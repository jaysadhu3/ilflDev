﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ilfl.Models.Models;

public class Content
{
    public int Ifctid { get; set; }

    public required string IfctdisplayName { get; set; }

    public required string Ifctsection { get; set; }

    public required string Ifctfile { get; set; }
}