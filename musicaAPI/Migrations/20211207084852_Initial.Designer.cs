﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using musicaAPI.Data;

#nullable disable

namespace musicaAPI.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20211207084852_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("musicaAPI.Data.musicaModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("estilo_musica")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("nome_album")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("nome_banda")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("nome_cantor")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("nome_musica")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Musicas");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            estilo_musica = "Rock",
                            nome_album = "Thank you, happy birthday",
                            nome_banda = "Cage the Elephant",
                            nome_cantor = "Matt Shulez",
                            nome_musica = "Always Something"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
