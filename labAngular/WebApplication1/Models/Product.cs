﻿namespace WebApplication1.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string? Description { get; set; }

        // Navigation property
        public ICollection<CartItem> CartItems { get; set; }
    }
}
