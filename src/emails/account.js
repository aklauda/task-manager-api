const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aklauda@foi.hr',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'aklauda@foi.hr',
        subject: 'Sorry to see you go!',
        text: `Goodbye ${name}, thank you for using our service. Is there anything we could have done to kept you onboard?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}