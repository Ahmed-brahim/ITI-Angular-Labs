﻿using Microsoft.AspNetCore.Identity;

namespace WebApplication1.Models
{
    public class User:IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Role { get; set; } = "User";
        public int Age { get; set; } 
    }
}
