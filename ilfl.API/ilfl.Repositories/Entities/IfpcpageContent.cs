﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace ilfl.Repositories.Entities;

public partial class IfpcpageContent
{
    public int Ifpcid { get; set; }

    public int IfpcIfssid { get; set; }

    public string IfpcHtmlContent { get; set; }

    public virtual Ifsssection IfpcIfss { get; set; }
}