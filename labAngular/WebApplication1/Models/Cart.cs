namespace WebApplication1.Models
{
    public class Cart
    {
        public int Id { get; set; }

        // Foreign Key
        public string UserId { get; set; }

        // Navigation properties
        public User User { get; set; }
        public ICollection<CartItem> Items { get; set; }
    }
}
