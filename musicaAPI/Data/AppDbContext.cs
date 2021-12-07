using Microsoft.EntityFrameworkCore;

namespace musicaAPI.Data
{
    public class AppDbContext : DbContext
    {

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<musicaModel> Musicas{ get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<musicaModel>()
                .HasData(
                    new musicaModel { Id = 1, nome_musica = "Always Something", nome_cantor = "Matt Shulez", nome_banda = "Cage the Elephant", estilo_musica = "Rock", nome_album = "Thank you, happy birthday" }
                    
                );
        }

    }
}
