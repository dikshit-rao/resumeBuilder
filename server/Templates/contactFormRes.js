exports.contactUsEmail = (
    email,
    firstname,
    lastname,
    message,
    phoneNo,
    countrycode
  ) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Confirmation</title>
        <style>
            body {
                margin: 0;
                font-family: Arial, sans-serif;
                background-color: #f9faff;
                color: #07142b;
            }
    
            .email-container {
                max-width: 600px;
                margin: 20px auto;
                background: #ffffff;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
    
            .header {
                background-color: #ffc85e;
                color: #07142b;
                text-align: center;
                padding: 20px;
            }
    
            .header h1 {
                margin: 0;
                font-size: 24px;
            }
    
            .content {
                padding: 20px;
                text-align: center;
            }
    
            .content p {
                font-size: 16px;
                line-height: 1.5;
                margin: 0 0 20px;
                color: #46464e;
            }
    
            .footer {
                background-color: #f9faff;
                color: #46464e;
                text-align: center;
                padding: 10px;
                font-size: 12px;
            }
    
            .footer a {
                color: #07142b;
                text-decoration: none;
            }
    
            .footer a:hover {
                text-decoration: underline;
            }
        </style>
    </head>
    
    <body>
        <div class="email-container">
            <div class="header">
                <h1>Contact Form Confirmation</h1>
            </div>
            <div class="content">
                <p>Dear ${firstname} ${lastname},</p>
                <p>Thank you for reaching out to us. We have received your message and will get back to you soon.</p>
                <p><strong>Name:</strong> ${firstname} ${lastname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phoneNo}</p>
                <p><strong>Message:</strong> ${message}</p>
                <p>If you need urgent assistance, please contact us at <a href="mailto:info@studynotion.com">info@studynotion.com</a>.</p>
            </div>
            <div class="footer">
                <p>&copy; 2025 StudyNotion. All rights reserved.</p>
                <p><a href="#">Privacy Policy</a> | <a href="#">Support</a></p>
            </div>
        </div>
    </body>
    
    </html>`;
  }
  
