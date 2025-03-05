<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate form data
    if (empty($name) || empty($email) || empty($message)) {
        // Redirect back to the contact page with an error message
        header("Location: contact.html?error=1");
        exit();
    }

    // Process the form data (e.g., save to database, send email, etc.)
    // For demonstration, we'll just echo the data
    echo "Name: " . $name . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Message: " . $message . "<br>";

    // Send an email
    $to = "snowboardingleif@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        // Redirect back to the contact page with a success message
        header("Location: contact.html?success=1");
    } else {
        // Redirect back to the contact page with an error message
        header("Location: contact.html?error=1");
    }

    exit();
} else {
    // Redirect back to the contact page if the request method is not POST
    header("Location: contact.html");
    exit();
}
?>