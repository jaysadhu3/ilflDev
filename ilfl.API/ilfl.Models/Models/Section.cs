using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ilfl.Models.Models;

public class Section
{
    public int Ifssid { get; set; }

    public int? Ifssparent { get; set; }

    public required string Ifssname { get; set; }

    public string? Ifsspath { get; set; }
}
