const nodemailer = require('nodemailer');

async function sendMail(){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'my7899831@gmail.com',
            pass: 'yelnhudqzdhjhkig'
        },
        tls: {
            // Disable TLS
            rejectUnauthorized: false,
            secure: false
        }
    });

    const mailOptions = {
        from: 'my7899831@gmail.com',
        to: 'muskanvishkarma9981@gmail.com',
        subject: ' Birthday Wishes 🎉',
        text: 'HAPPY BIRTHDAY DEAR MUSKAN 🎂🥳',
    }

    try {
    const result = await   transporter.sendMail(mailOptions);
    console.log('Email sent successfully..')
    } catch (error) {
        console.log('Email send failed with error', error)
    }
}
sendMail()