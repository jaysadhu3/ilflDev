namespace LearnerPortal.Utilities.Common;

public abstract class Constants
{
    public const string ErrorMessage = "Error occurred in {0} method and error message is: {1}";

    public const string CurrentUser = "Learner Portal";

    public const string CurrentProgram = "Learner Portal";

    public const string CurrentYear = "CY";

    public const string EncryptionKey = "c1v1c4#1234567";

    public const string EmailOption = "P";

    public const string StudentUserType = "LE";

    public const string ParentUserType = "PG";

    public const string ForgotSecretKeyEmailBody = "<html><body><img src=\"{0}\" alt=\"Preview\" style=\"padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.375rem;max-width:100%;height:auto\">" +
                                                  "<br /><p>Forgotten Password</p><br />" +
                                                  "<p>Thank you for requesting your password to the Learner Hub is reset." +
                                                  " Please click on the link below, where you will be redirected to enter the PIN.</p>" +
                                                  "<br/><a href=\"{1}\">Click here</a><br />" +
                                                  "<p>Your PIN code is</p>" +
                                                  "<p><strong>{2}</strong></p>" +
                                                  "<p>Once you have entered this you will be able to change your password and then be able to sign in and use the Learner Hub.</p></body></html>";

    public const string UserRegisteredEmailBody = "<html><body><img src=\"{0}\" alt=\"Preview\" style=\"padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.375rem;max-width:100%;height:auto\">" +
                                                  "<br /><p>Continue your registration.</p><br /><br />" +
                                                  "<p>Thank you for registering your interest in signing up to the Learner Hub." +
                                                  " To finalise this process, please click on the link below, where you will be redirected to complete your registration.</p>" +
                                                  "<br /><br/><a href=\"{1}\">Click here</a><br /><br />" +
                                                  "<p>Once it's done you will then be able to sign in and start using your new Learner Hub.</p></body></html>";

    public const string VerifyParentEmailBody = "<html><body><img src=\"{0}\" alt=\"Preview\" style=\"padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.375rem;max-width:100%;height:auto\">" +
                                                  "<br /><p>Verification required.</p><br /><br />" +
                                                  "<p>Thank you for registering with Parent  Hub. " +
                                                  "To finalise this process, please click on the link below, where you will be redirected to complete your registration." +
                                                  "<br /><br/><a href=\"{1}\">Click here</a><br /><br />" +
                                                  "<p>Once it's done you will then be able to sign in and start using your new Parent Hub.</p></body></html>";

    public const string VerifyUserEmailBody = "<html><body><img src=\"{0}\" alt=\"Preview\" style=\"padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.375rem;max-width:100%;height:auto\">" +
                                                "<br /><p>Multi Factor Authentication Required</p><br /><br />" +
                                                "<p>A request has been made to access your Learner Hub account, before you will be allowed to log in, we need to verify who you are. " +
                                                "Please click on the link below to authenticate this request and continue with your log in." +
                                                "<br /><br/><a href=\"{1}\">Click here</a><br /><br />" +
                                                "<p>This link will expire in 15 minutes and will need to be requested again in order to gain access to your account.</p></body></html>";

    public const string RandomString = "ABDEGHIJLMNOPQRTVWXYZ123456789";

    public const int RandomStringLength = 16;

    public const string VerifyUrlParameter = "/verify?p=";

    public const string ForgotSecretKeyUrlParameter = "/verification?p=";

    public const string RegisterUrlParameter = "/register?p=";

    public const string LinkageApprovalStatus = "Approved";

    public const string LinkagePendingStatus = "Pending";

    public const string DashboardLinkagePendingStatus = "Request Pending";

    public const string MfaTypeEmail = "E";

    public const string MfaTypeSms = "S";

    public const string AttendanceCalculatedByHours = "H";

    public const string RegisterUrlParameter2 = "&a2=true";
    public const string MinDate = "01/01/2000";
    public const string SentAFileText = "Sent a file";
    public const string AllowedFileTypes = ".JPG.JPEG.GIF.PNG.DOC.DOCX.XLS.XLSX.PDF.XPS.TXT.";
    public const int MaxFileSize = 4;


}

public static class Roles
{
    public const string Learner = "LE";

    public const string Parent = "PG";

    public const string Staff = "ST";
}