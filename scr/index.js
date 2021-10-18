const nodemailer = require('nodemailer');

const SMTP_CONFIG = require('./config/smtp');

const transporter = nodemailer.createTransport({
host: SMTP_CONFIG.host,
port: SMTP_CONFIG.port,
secure: false, 
auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
},
tls:{
    rejectUnauthorized: false, 
},
});

export async function run() {
    const mailSent = await transporter.sendMail({
        text: 'voce eh o amor da mia vida ',
        subject: 'lorena te amo',
        from: 'SysUnity <sysunityproject@gmail>',
        to: ["tailasantos41@gmail.com, sysunityproject@gmail.com, lorena3nascimento@gmail.com"]
    });
    console.log(mailSent);
}
