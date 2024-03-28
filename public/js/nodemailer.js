const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: 'kotelnikova_01@mail.ru',
    pass: 'rXRkWccD0RJKjxmdG5vf',
  },
});

// async..await is not allowed in global scope, must use a wrapper
const email = 'igor.laptev2020@mail.ru';
async function main(email) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'kotelnikova_01@mail.ru', // sender address
    to: email, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main(email).catch(console.error);
