namespace CasinoMigration.Controllers;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using CasinoMigration.DTO.Auth;
using System.Text;
using CasinoMigration.DAL.Entities;
using Asp.Versioning;
using Microsoft.AspNetCore.Authorization;
 
[Route("api/v{version:apiVersion}/[controller]")]
[ApiVersion(1.0)]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly UserManager<EntityUser> _userManager;
    private readonly RoleManager<IdentityRole<int>> _roleManager;
    private readonly IConfiguration _configuration;

    public AuthController(UserManager<EntityUser> userManager, RoleManager<IdentityRole<int>> roleManager, IConfiguration configuration)
    { 
        _userManager = userManager; 
        _roleManager = roleManager; 
        _configuration = configuration;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterDTO dto)
    {
        var user = new EntityUser
        {
            UserName = dto.UserName,
            Email = dto.Email,
            DateInscription = DateOnly.FromDateTime(DateTime.UtcNow),
            DateDerniereConnection = DateOnly.FromDateTime(DateTime.UtcNow)
        };
        var result = await _userManager.CreateAsync(user, dto.Password);
            if (!result.Succeeded)
                return BadRequest(result.Errors);
        
            return Ok(new { message = "Utilisateur créé avec succès" }); 
        }

}