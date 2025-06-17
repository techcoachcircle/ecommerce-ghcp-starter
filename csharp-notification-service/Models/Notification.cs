
public class Notification
{
    public int Id { get; set; }
    public string Recipient { get; set; }
    public string Message { get; set; }
    public string Status { get; set; } = "pending"; // Default status
    
    public DateTime? Sent_At { get; set; }
}