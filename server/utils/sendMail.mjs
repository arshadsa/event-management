import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_SENDER_PASS
    }
})

export default async function sendMail({ user, subject, template }) {
    return await transport.sendMail({
        from: process.env.EMAIL_SENDER,
        to: user.email,
        subject,
        html: template
    }).then(res => console.log(res)).catch(err => console.log(err));
}