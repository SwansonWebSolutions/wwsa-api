const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

require('dotenv').config();

const host = process.env.SMTP_HOST;
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

if(process.env.NODE_ENV === 'development') {
    console.log('SMTP Host:', host);
    console.log('SMTP User:', user);
    console.log('SMTP Pass:', pass);
}

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
 router.post('/send-message', async (req, res) => {
    try {
        console.log("POST Email request: RECIEVED");
        console.log(req.body)
        const { fullname, phone, email, message } = req.body.formData; // Destructure and retrieve data from request body.
        // Validate required fields.
        if (!fullname || !phone || !email || !message) {
            return res.status(400).json({ status: 'error', message: 'Missing required fields' });
        }
        console.log("Data Validated");

        // Send two emails. One with the inquiry details and another with a confirmation message.
        var msg = `Name: ${fullname}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
        // Prepare the email message options.
        const inquiryMailOptions = {
            from: process.env.SENDER_EMAIL, // Sender's email address.
            to: process.env.RECEIVER_EMAIL, // Recipient's name and email address.
            subject: "New Message", // Subject line.
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
            subject: "WWSA - Message Confirmation", // Subject line.
            text: `Hello ${fullname},\n\nThank you for your message. We have recieved your inquiry and will get back to you as soon as possible.\n\nBest Regards,\n\nMark Jackson\n\nmark@wws-alliances.org\n\nWorld Wide Strategic Alliances` // Plaintext body.
        };
        const confirmation = await transporter.sendMail(confirmationMailOptions);
        console.log('Email sent:', confirmation.response);

        res.status(200).json({ status: 'success', message: 'Email sent successfully' });
    } catch (err) {
        // Handle errors and log them.
        console.error('Error sending email:', err);
        res.status(500).json({ status: 'error', message: 'Error sending email, please try again.' });
    }
 });


 // Email sending endpoint.
 router.post('/send-quote', async (req, res) => {
    try {
        console.log("POST Email request: RECIEVED");
        const { firstName, lastName, company, title, phone, email, message } = req.body.formData; // Destructure and retrieve data from request body.
        const selectedOptions = req.body.selectedOptions;
        // Validate required fields.
        if (!firstName || !lastName || !company || !title || !phone || !email || !message) {
            return res.status(400).json({ status: 'error', message: 'Missing required fields' });
        }
        console.log("Data Validated");
        var fullname = `${firstName} ${lastName}`;
        let services = '';
        if(selectedOptions.length > 0) {
            services = selectedOptions.join(', ');
        }
        // Send two emails. One with the inquiry details and another with a confirmation message.
        var msg = `Name: ${fullname}\nPhone: ${phone}\nEmail: ${email}\nCompany: ${company}\nTitle: ${title}\n\nInterested in: ${services}\n\nMessage: ${message}`;
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
            subject: "Quote Request Confirmation", // Subject line.
            text: `Hello ${fullname},\n\nThank you for your request. We have recieved your inquiry and will get back to you as soon as possible.\n\nBest Regards,\n\nMark\n\nmark@wws-alliances.org\n\nWorld Wide Strategic Alliances` // Plaintext body.
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