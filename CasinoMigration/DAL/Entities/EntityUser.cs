using Microsoft.AspNetCore.Identity;

namespace CasinoMigration.DAL.Entities;

public class EntityUser : IdentityUser<int>
{
    // Ne redéfinissez pas Id, UserName, Email.
    // IdentityUser les gère déjà.

    // Supprimez MotDePasse. Identity gère le hachage avec sa propriété PasswordHash.

    public string? Statut { get; set; }
    public int Niveau{ get; set; }
    public int NombreXpNiveauActuel{ get; set; }
    public int XpTotal{ get; set; }
    public int Prestige{ get; set; }
    public DateOnly DateInscription{ get; set; }
    public DateOnly DateDerniereConnection{ get; set; }
    public int NbJourConnecterConsecutif{ get; set; }
    public int NbJourConnecterTotal{ get; set; }
}