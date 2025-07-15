namespace WebApplication1.Dto
{
    public class CreateUserDto
    {
        public string Email { get; set; }
        public string Password { get; set; }  // required for create
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Role { get; set; }
    }
}
