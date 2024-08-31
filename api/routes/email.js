const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

require('dotenv').config();

const host = process.env.SMTP_HOST;
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

console.log('SMTP Host:', host);
console.log('SMTP User:', user);
console.log('SMTP Pass:', pass);

// Create a reusable transporter object using SMTP transport.
const transporter = nodemailer.createTransport({
    host: host,
    port: 465,
    secure: true, // use false for STARTTLS; true for SSL on port 465
    auth: {
        user: user,
        pass: pass
    },
 });
 
 
 // Email sending endpoint.
 router.post('/send-email', async (req, res) => {
    try {
        console.log("POST Email request: RECIEVED");
        const { firstName, lastName, phone, company, title, email, message } = req.body.formData; // Destructure and retrieve data from request body.
        const selectedOptions = req.body.selectedOptions.join(", "); // Retrieve selected options.
        let  name = `${firstName} ${lastName}`; // Combine first and last name.

        // Validate required fields.
        if (!firstName || !lastName || !phone || !company || !title || !email || !message || !selectedOptions) {
            return res.status(400).json({ status: 'error', message: 'Missing required fields' });
        }
        console.log("Data Validated");

        // Send two emails. One with the inquiry details and another with a confirmation message.
        var msg = `Name: ${name}\nPhone: ${phone}\nCompany: ${company}\nTitle: ${title}\nEmail: ${email}\nSelected Services: ${selectedOptions}\nMessage: ${message}`;
        // Prepare the email message options.
        const inquiryMailOptions = {
            from: process.env.SENDER_EMAIL, // Sender's email address.
            to: process.env.RECEIVER_EMAIL, // Recipient's name and email address.
            subject: "New Client Inquiry", // Subject line.
            text: msg // Plaintext body.
        };

        console.log("Sending Email's");
        // Send email and log the response.
        const inquiry = await transporter.sendMail(inquiryMailOptions);
        // Add error handling
        console.log('Email sent:', inquiry.response);

        // Prepare the confirmation email message options.
        const confirmationMailOptions = {
            from: `"World Wide Strategic Alliances" ${process.env.SENDER_EMAIL}`, // Sender's email address.
            to: email, // Recipient's name and email address.
            subject: "Inquiry Confirmation", // Subject line.
            text: `Hello ${name},\n\nThank you for your inquiry. We have recieved your inquiry and will get back to you as soon as possible.\n\nBest Regards,\n\nMark Jackson\n\nmark@wws-alliances.org\n\nWorld Wide Strategic Alliances` // Plaintext body.
        };
        const confirmation = await transporter.sendMail(confirmationMailOptions);
        console.log('Email sent:', confirmation.response);
        // Add error handling

        res.status(200).json({ status: 'success', message: 'Email sent successfully' });
    } catch (err) {
        // Handle errors and log them.
        console.error('Error sending email:', err);
        res.status(500).json({ status: 'error', message: 'Error sending email, please try again.' });
    }
 });

module.exports = router;