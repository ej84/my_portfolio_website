<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Get the form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Set the recipient email address
  $to = "example@exmaplem.com";

  // Set the email subject
  $subject = "New Contact Form Submission";

  // Set the email headers
  $headers = "From: $name <$email>" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  // Compose the email body
  $emailBody = "Name: $name\n\n" .
               "Email: $email\n\n" .
               "Message:\n$message";

  // Send the email
  if (mail($to, $subject, $emailBody, $headers)) {
    echo "Thank you for your message!";
    echo "Your name: " . $name;
    echo "Your Email: " . $email;
    echo "Your Message: " . $message;
  } else {
    echo "Oops! Something went wrong. Please try again later.";
  }
}
?>
