namespace CasinoMigration.Data; 
using Microsoft.EntityFrameworkCore;
using CasinoMigration.DAL.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
public class CasinoContext : IdentityDbContext<EntityUser, IdentityRole<int>, int>
{
    public CasinoContext(DbContextOptions<CasinoContext> options) : base(options)
    {

    }

    public DbSet<EntityUser> Users { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<EntityUser>()
            .HasKey(ul => new { ul.Id});
    }

}