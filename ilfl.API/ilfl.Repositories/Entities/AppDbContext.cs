﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ilfl.Repositories.Entities;

public partial class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Ifctcontent> Ifctcontents { get; set; }

    public virtual DbSet<IfdddirectorDetail> IfdddirectorDetails { get; set; }

    public virtual DbSet<Ifsssection> Ifsssections { get; set; }

    public virtual DbSet<Ifuluser> Ifulusers { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Ifctcontent>(entity =>
        {
            entity.HasKey(e => e.Ifctid);

            entity.ToTable("IFCTContent");

            entity.Property(e => e.Ifctid).HasColumnName("IFCTId");
            entity.Property(e => e.IfctIfss).HasColumnName("IFCT_IFSS");
            entity.Property(e => e.IfctdisplayName)
                .IsRequired()
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("IFCTDisplayName");
            entity.Property(e => e.Ifctfile)
                .IsRequired()
                .IsUnicode(false)
                .HasColumnName("IFCTFile");

            entity.HasOne(d => d.IfctIfssNavigation).WithMany(p => p.Ifctcontents)
                .HasForeignKey(d => d.IfctIfss)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_IFCT_IFSS");
        });

        modelBuilder.Entity<IfdddirectorDetail>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("IFDDDirectorDetails");

            entity.Property(e => e.Ifddfile)
                .IsRequired()
                .IsUnicode(false)
                .HasColumnName("IFDDFile");
            entity.Property(e => e.Ifddname)
                .IsRequired()
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("IFDDName");
            entity.Property(e => e.Ifddposition)
                .IsRequired()
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("IFDDPosition");
        });

        modelBuilder.Entity<Ifsssection>(entity =>
        {
            entity.HasKey(e => e.Ifssid);

            entity.ToTable("IFSSSection");

            entity.Property(e => e.Ifssid).HasColumnName("IFSSId");
            entity.Property(e => e.Ifssname)
                .IsRequired()
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("IFSSName");
            entity.Property(e => e.Ifssparent).HasColumnName("IFSSParent");
            entity.Property(e => e.Ifsspath)
                .HasMaxLength(150)
                .IsUnicode(false)
                .HasColumnName("IFSSPath");
        });

        modelBuilder.Entity<Ifuluser>(entity =>
        {
            entity.HasKey(e => e.Ifulid);

            entity.ToTable("IFULUsers");

            entity.Property(e => e.Ifulid).HasColumnName("IFULId");
            entity.Property(e => e.Ifulpassword)
                .IsRequired()
                .HasMaxLength(150)
                .HasColumnName("IFULPassword");
            entity.Property(e => e.Ifulusername)
                .IsRequired()
                .HasMaxLength(150)
                .HasColumnName("IFULUsername");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}