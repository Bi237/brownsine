<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // 1. Kon mail-e pabe
    $to = "roadrulers360@gmail.com"; // ekhane tomar mail

    $subject = "New Application - Road & Rulers";

    // 2. Form data neowa
    $name     = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email    = isset($_POST['email']) ? trim($_POST['email']) : '';
    $phone    = isset($_POST['phone']) ? trim($_POST['phone']) : '';
    $position = isset($_POST['position']) ? trim($_POST['position']) : '';
    $message  = isset($_POST['message']) ? trim($_POST['message']) : '';

    // Basic validation
    if ($name === '' || $email === '' || $message === '') {
        die("Required fields are missing.");
    }

    // 3. Mail body
    $body  = "New application received from Road & Rulers website.\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Message:\n$message\n";

    // 4. Headers
    // Live server e giye eta tomar domain-er mail kore nio (e.g. no-reply@tomardomain.com)
    $from = "no-reply@yourdomain.com";
    $headers  = "From: $from\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // 5. Mail pathano
    if (mail($to, $subject, $body, $headers)) {
        // Success hole thank-you page e pathate paro
        // jodi thank-you.html bana na thake, sudhu ekta text show korte paro
        echo "Your application has been submitted successfully. Thank you!";
        // header("Location: thank-you.html");
        // exit;
    } else {
        echo "Sorry, there was a problem sending your application. Please try again.";
    }

} else {
    header("Location: index.html");
    exit;
}
?>
