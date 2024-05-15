using System.ComponentModel;

namespace LearnerPortal.Utilities.Common;

public static class Enums
{
    public static string GetEnumDescription(Enum value)
    {
        var fieldInfo = value.GetType().GetField(value.ToString());
        if (fieldInfo == null) return string.Empty;
        var attributes = (DescriptionAttribute[])fieldInfo.GetCustomAttributes(typeof(DescriptionAttribute), false);
        return attributes is { Length: > 0 } ? attributes[0].Description : value.ToString();
    }

    public enum GncdCodes
    {
        [Description("LPR")]
        LPR,

        [Description("NTS")]
        NTS
    }
}