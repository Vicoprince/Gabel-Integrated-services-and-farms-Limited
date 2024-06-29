const express = require ('express');
const morgan = require('morgan');
const app = express();
const emailjs = require("emailjs-com");
const cors = require("cors");
const nodemailer = require("nodemailer");

app.listen(3002);
console.log("Connected to db");

app.set('view engine', 'ejs');
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })); //takes all the url encoded data from the form and parses it into an object for use in the req object
// rendering static css files
app.use(express.static('public'));
console.log("reguests made");

  // Express routes
app.get('/',(req,res)=>{
    res.render('index', {title: "Homepage"});
});

app.get('/about',(req,res)=>{
    res.render('about', {title: "About"});
});

app.get('/Services',(req,res)=>{
    res.render("Services", { title: "Services" });
});

app.get('/Why_us',(req,res)=>{
    res.render("Why_us", { title: "Why us" });
});

app.get('/Contact',(req,res)=>{
    res.render("Contact", { title: "Contact" });
});

app.post("/quote_request", async (req, res) => {
  const { name, email, mobile, message } = req.body;
//   console.log(req.body);

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail", // you can use any email service
    auth: {
      user: "oluajimativictor@gmail.com", // your email
      pass: "navu arzd zvxy exbx", // your email password or app password
    },
  });

  // Setup email data
  let mailOptions = {
    from: '"Gabel Integrated Services and Farms Limited" gabelintegratedfarmsltd@gmail.com', // sender address
    to: "gabelintegratedfarmsltd@gmail.com", // list of receivers
    subject: "New Quote Request", // Subject line
    text: `You have a new quote request from:
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Message: ${message}`, // plain text body
    html: `<p>You have a new quote request from:</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Mobile:</strong> ${mobile}</p>
               <p><strong>Message:</strong> ${message}</p>`, // html body
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return res.status(500).send(`
        <html>
          <body>
            <script>
              alert('Failed to send request: ${error.message}');
              window.location.href = '/#get_quote';
            </script>
          </body>
        </html>
      `);
    }
    res.send(`
      <html>
        <body>
          <script>
            alert('Quote request sent successfully!');
            window.location.href = '/#get_quote';
          </script>
        </body>
      </html>
    `);
    // console.log({ message: "Email sent successfully!" });
  });

});

app.post("/quote_services", async (req, res) => {
  const { name, email, mobile, message } = req.body;
//   console.log(req.body);

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail", // you can use any email service
    auth: {
      user: "oluajimativictor@gmail.com", // your email
      pass: "navu arzd zvxy exbx", // your email password or app password
    },
  });

  // Setup email data
  let mailOptions2 = {
    from: '"Gabel Integrated Services and Farms Limited" gabelintegratedfarmsltd@gmail.com', // sender address
    to: "gabelintegratedfarmsltd@gmail.com", // list of receivers
    subject: "New Quote Request", // Subject line
    text: `You have a new quote request from:
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Message: ${message}`, // plain text body
    html: `<p>You have a new quote request from:</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Mobile:</strong> ${mobile}</p>
               <p><strong>Message:</strong> ${message}</p>`, // html body
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions2, (error, info) => {
    if (error) {
      return res.status(500).send(`
        <html>
          <body>
            <script>
              alert('Failed to send request: ${error.message}');
              window.location.href = '/Services';
            </script>
          </body>
        </html>
      `);
    }
    res.send(`
      <html>
        <body>
          <script>
            alert('Quote request sent successfully!');
            window.location.href = '/Services';
          </script>
        </body>
      </html>
    `);
    // console.log({ message: "Email sent successfully!" });
  });
});

app.post("/send_message", async (req, res) => {
  const { name, email, mobile, message } = req.body;
//   console.log(req.body);

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail", // you can use any email service
    auth: {
      user: "oluajimativictor@gmail.com", // your email
      pass: "navu arzd zvxy exbx", // your email password or app password
    },
  });

  // Setup email data
  let mailOptions3 = {
    from: '"Gabel Integrated Services and Farms Limited" gabelintegratedfarmsltd@gmail.com', // sender address
    to: "gabelintegratedfarmsltd@gmail.com", // list of receivers
    subject: "New Message", // Subject line
    text: `You have a new message from:
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Message: ${message}`, // plain text body
    html: `<p>You have a new message from:</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Mobile:</strong> ${mobile}</p>
               <p><strong>Message:</strong> ${message}</p>`, // html body
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions3, (error, info) => {
    if (error) {
      return res.status(500).send(`
        <html>
          <body>
            <script>
              alert('Failed to send message: ${error.message}');
              window.location.href = '/Contact';
            </script>
          </body>
        </html>
      `);
    }
    res.send(`
      <html>
        <body>
          <script>
            alert('Message sent successfully!');
            window.location.href = '/Contact';
          </script>
        </body>
      </html>
    `);
    // console.log({ message: "Email sent successfully!" });
  });
});

app.post("/signup", async (req, res) => {
  const { name, email, mobile, message } = req.body;
//   console.log(req.body);

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail", // you can use any email service
    auth: {
      user: "oluajimativictor@gmail.com", // your email
      pass: "navu arzd zvxy exbx", // your email password or app password
    },
  });

  // Setup email data
  let mailOptions4 = {
    from: '"Gabel Integrated Services and Farms Limited" gabelintegratedfarmsltd@gmail.com', // sender address
    to: "gabelintegratedfarmsltd@gmail.com", // list of receivers
    subject: "New subscription", // Subject line
    text: `You have a new Newsletter subscription from:
        Email: ${email}`,
    html: `<p>You have a new Newsletter subscription from:</p>
               <p><strong>Email:</strong> ${email}</p>`, // html body
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions4, (error, info) => {
    if (error) {
      return res.status(500).send(`
        <html>
          <body>
            <script>
              alert('Failed to subscribe: ${error.message}');
              window.location.href = '/';
            </script>
          </body>
        </html>
      `);
    }
    res.send(`
      <html>
        <body>
          <script>
            alert('Newsletter subscription successful!');
            window.location.href = '/';
          </script>
        </body>
      </html>
    `);
    // console.log({ message: "Email sent successfully!" });
  });
});

app.use((req,res)=>{
  res.status(404).render('404', {title: "404 Page"});
});

