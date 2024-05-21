using System.IdentityModel.Tokens.Jwt;
using System.Security.Cryptography;
using System.Text;

namespace ilfl.Utilities.Common;

public class Common
{
    private readonly byte[] _iv =
    {
        0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08,
        0x09, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16
    };

    private static readonly byte[] Salt =
    {
        0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76
    };

    /// <summary>
    ///     Null safe trim
    /// </summary>
    /// <param name="text">Text that needs to be trimmed</param>
    /// <returns>Trimmed text</returns>
    public static string? NullSafeTrim(string? text)
    {
        if (string.IsNullOrEmpty(text)) return text;
        text = text.Trim();
        return text;
    }

    public async Task<byte[]> EncryptAsync(string? clearText, string passPhrase)
    {
        if (passPhrase == null) ArgumentNullException.ThrowIfNull(passPhrase);
        using var aes = Aes.Create();
        aes.Key = DeriveKeyFromUserSecret(passPhrase);
        aes.IV = _iv;
        using MemoryStream output = new();
        await using CryptoStream cryptoStream = new(output, aes.CreateEncryptor(), CryptoStreamMode.Write);
        if (clearText != null) await cryptoStream.WriteAsync(Encoding.Unicode.GetBytes(clearText));
        await cryptoStream.FlushFinalBlockAsync();
        return output.ToArray();
    }

    public string DecryptAsync(byte[] encrypted, string passPhrase)
    {
        if (passPhrase == null) ArgumentNullException.ThrowIfNull(passPhrase);
        using var aes = Aes.Create();
        aes.Key = DeriveKeyFromUserSecret(passPhrase);
        aes.IV = _iv;
        using MemoryStream input = new(encrypted);
        using CryptoStream cryptoStream = new(input, aes.CreateDecryptor(), CryptoStreamMode.Read);
        using MemoryStream output = new();
        cryptoStream.CopyToAsync(output);
        return Encoding.Unicode.GetString(output.ToArray());
    }

    private static byte[] DeriveKeyFromUserSecret(string userSecret)
    {
        var emptySalt = Array.Empty<byte>();
        const int iterations = 1000;
        const int desiredKeyLength = 32; // 16 bytes equal 128 bits.
        var hashMethod = HashAlgorithmName.SHA512;
        return Rfc2898DeriveBytes.Pbkdf2(Encoding.Unicode.GetBytes(userSecret),
            emptySalt,
            iterations,
            hashMethod,
            desiredKeyLength);
    }

    public static string RandomStringGenerator(int length)
    {
        var randomGenerator = RandomNumberGenerator.Create();
        return new string(Enumerable.Repeat(Constants.RandomString, length)
            .Select(s => s[Next(randomGenerator, 0, s.Length)]).ToArray());
    }

    private static int Next(RandomNumberGenerator generator, int min, int max)
    {
        max -= 1;
        var bytes = new byte[sizeof(int)];
        generator.GetNonZeroBytes(bytes);
        var val = BitConverter.ToInt32(bytes);
        var result = ((val - min) % (max - min + 1) + (max - min + 1)) % (max - min + 1) + min;
        return result;
    }

    public static string Encrypt(string plainText, string passPhrase)
    {
        var clearBytes = Encoding.Unicode.GetBytes(plainText);
        var algorithm = GetAlgorithm(passPhrase);
        using var memoryStream = new MemoryStream();
        using (var cryptoStream = new CryptoStream(memoryStream, algorithm.CreateEncryptor(), CryptoStreamMode.Write))
        {
            cryptoStream.Write(clearBytes, 0, clearBytes.Length);
            cryptoStream.Close();
        }

        return Convert.ToBase64String(memoryStream.ToArray());
    }

    public static string Decrypt(string? cipherText, string passPhrase)
    {
        if (string.IsNullOrEmpty(cipherText)) return string.Empty;
        cipherText = cipherText.Replace(" ", "+");
        var cipherBytes = Convert.FromBase64String(cipherText);
        var algorithm = GetAlgorithm(passPhrase);
        using var memoryStream = new MemoryStream();
        using (var cryptoStream = new CryptoStream(memoryStream, algorithm.CreateDecryptor(), CryptoStreamMode.Write))
        {
            cryptoStream.Write(cipherBytes, 0, cipherBytes.Length);
            cryptoStream.Close();
        }

        return Encoding.Unicode.GetString(memoryStream.ToArray());
    }

    private static Aes GetAlgorithm(string counterSign)
    {
        const int myIterations = 1000;
        var hashMethod = HashAlgorithmName.SHA512;
        var pdf = new Rfc2898DeriveBytes(counterSign, Salt, myIterations, hashMethod);
        var algorithm = Aes.Create();
        algorithm.Mode = CipherMode.CBC;
        algorithm.Key = pdf.GetBytes(32);
        algorithm.IV = pdf.GetBytes(16);
        return algorithm;
    }

    public static string EncryptedGuid(string plainText, string passPhrase)
    {
        var clearBytes = Encoding.Unicode.GetBytes(plainText);
        using var encrypt = Aes.Create();
#pragma warning disable SYSLIB0041
        var pdb = new Rfc2898DeriveBytes(passPhrase, Salt);
#pragma warning restore SYSLIB0041
        encrypt.Key = pdb.GetBytes(32);
        encrypt.IV = pdb.GetBytes(16);
        using var memoryStream = new MemoryStream();
        using (var cryptoStream = new CryptoStream(memoryStream, encrypt.CreateEncryptor(), CryptoStreamMode.Write))
        {
            cryptoStream.Write(clearBytes, 0, clearBytes.Length);
            cryptoStream.Close();
        }

        return Convert.ToBase64String(memoryStream.ToArray());
    }

    public static string DecryptedGuid(string? cipherText, string passPhrase)
    {
        if (string.IsNullOrEmpty(cipherText)) return string.Empty;
        cipherText = cipherText.Replace(" ", "+");
        var cipherBytes = Convert.FromBase64String(cipherText);
        using var encrypt = Aes.Create();
#pragma warning disable SYSLIB0041
        var pdb = new Rfc2898DeriveBytes(passPhrase, Salt);
#pragma warning restore SYSLIB0041
        encrypt.Key = pdb.GetBytes(32);
        encrypt.IV = pdb.GetBytes(16);
        using var memoryStream = new MemoryStream();
        using (var cryptoStream = new CryptoStream(memoryStream, encrypt.CreateDecryptor(), CryptoStreamMode.Write))
        {
            cryptoStream.Write(cipherBytes, 0, cipherBytes.Length);
            cryptoStream.Close();
        }

        return Encoding.Unicode.GetString(memoryStream.ToArray());
    }

    public static byte[] ImageToDataUri(string? imagePath, string filename)
    {
        var imgBytes = Array.Empty<byte>();
        if (!File.Exists(imagePath + filename)) return imgBytes;
        var fi = new FileInfo(imagePath + filename);
        var ext = Path.GetExtension(fi.FullName);

        DicSupportedFormats.TryGetValue(ext, out var extType);
        if (string.IsNullOrWhiteSpace(extType))
        {
            extType = "png";
        }
        var imageDataUriPrefix = "data:image/" + extType + ";base64,";
        var fileBytes = File.ReadAllBytes(fi.FullName);
        var base64ImageString = imageDataUriPrefix + Convert.ToBase64String(fileBytes);
        imgBytes = Encoding.UTF8.GetBytes(base64ImageString);
        return imgBytes;
    }

    private static readonly Dictionary<string, string> DicSupportedFormats = new()
    {
                {".jpg", "jpeg"},
                {".jpeg", "jpeg"},
                {".jfif", "jpeg"},
                {".pjp", "jpeg"},
                {".pjpeg", "jpeg"},
                {".png", "png"},
                {".svg", "svg+xml"},
                {".webp", "webp"},
                {".gif", "gif"},
                {".avif", "avif"},
                {".apng", "apng"},
                {".ico", "x-icon"},
                {".cur", "x-icon"},
                {".tiff", "tiff"},
                {".tif", "tiff"}
    };

    public static bool GetAuthorizationValues(string authHeader, out string role, out string id, out string email)
    {
        if (string.IsNullOrWhiteSpace(authHeader))
        {
            role = string.Empty;
            id = string.Empty;
            email = string.Empty;
            return true;
        }

        authHeader = authHeader.Replace("Bearer ", "");
        var handler = new JwtSecurityTokenHandler();
        var jsonToken = handler.ReadToken(authHeader);
        if (jsonToken is not JwtSecurityToken token)
        {
            role = string.Empty;
            id = string.Empty;
            email = string.Empty;
            return true;
        }

        role = token.Claims.First(claim => claim.Type == "typ").Value;
        id = token.Claims.First(claim => claim.Type == "sid").Value;
        email = token.Claims.First(claim => claim.Type == "email").Value;
        return false;
    }

    public static string CheckLearnerValidity(string learnerId, string authHeader)
    {
        if (GetAuthorizationValues(authHeader, out _, out var id, out var email)) return string.Empty;
        return id != learnerId ? "Details are only visible to the creator of the account." : string.Empty;
    }
}