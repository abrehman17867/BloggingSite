const express = require("express")//for import express
const app = express() //it will start express.js
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// 
app.use(express.json())
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/blog4U-reactapp")//name of our database
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log("failed to connect");
    })
//                                            for signup or register
//                       verification schema
const verificationschema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    checkbox: {
        type: String,
    },
    verifypass: {
        type: String,
        required: true
    },
    expireAt: { type: Date, default: Date.now, index: { expires: '40m' } }
})
const collectionsign = new mongoose.model("verification-code", verificationschema)//name of schema
//     working all correct
const loginschema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    checkbox: {
        type: String

    }
})
const scollection = new mongoose.model("login-data", loginschema)//name of schema
// 
app.post('/api/login', async (req, res) => {
    try {
        console.log("i am working")
        const username= req.body.username;
        const password= req.body.password;
        console.log(username)
        console.log(password)

        const user = await scollection.findOne({ username });
        if (user) {
            if (user.password === password) {
                res.json(user); // Login successful
            } else {
                res.status(401).json({ error: 'Password is not correct' });
            }
        } else {
            res.status(401).json({ error: 'Username is not correct' });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
});
//             work upper code and closed
//                                  for contact form schema and api for contact 


const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})
const collections = new mongoose.model("contact-data", contactSchema)//name of schema
// working
// 
app.post("/contact", async (req, res) => {//inorder to work with mongoose write async

    try {
        const data = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            desc: req.body.desc
        };
        await collections.insertMany([data])
        res.status(200).send("Form submitted successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error occurred while submitting the form");
    }
})


// 
//                            working upper code 

//                                    for send email verification
const nodemailer = require('nodemailer');
const randomstring = require('randomstring'); // npm package to generate random strings
// create a Nodemailer transport object using SMTP
// let transporter;
// define a function to send a verification code to the user's email address
function sendVerificationCode(email) {
    // generate a random verification code
    let transporter = nodemailer.createTransport({
        service: 'Gmail', // replace with your email service provider
        auth: {
            user: 'razamrauf8@gmail.com', // replace with your email address
            pass: 'ggah vcym pvyh dwke' // replace with your email password or app-specific password
        }
    });
    // 
    const verificationCode = randomstring.generate(6); // 6-character code
    // define the email message
    let mailOptions = {
        from: 'razamrauf8@gmail.com', // replace with your email address
        to: email, // replace with the user's email address
        subject: 'Verification Code for Your App', // replace with your email subject
        text: `Your verification code is: ${verificationCode}` // replace with your email body
    };
    // send the email message
    // let transporter;
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    // return an object containing the verification code and expiry time
    return verificationCode
}
//                                            main code
//                                     sendverification code 
app.post("/emailverify", async (req, res) => {//inorder to work with mongoose write async
    const userEmail = req.body.email; // replace with the user's email address
    const verificationCode = sendVerificationCode(userEmail);
    console.log(`Verification code sent to ${userEmail}: ${verificationCode}`);
    const datasign = {
        email: req.body.email,
        checkbox: req.body.checkbox,
        verifypass: `${verificationCode}`
    }
    try {
        await collectionsign.insertMany([datasign])
        res.status(200).send("email code send  successfully");
    }
    catch {
        res.status(500).send("Error occurred while submitting the form");
    }
})

//           for enter verification code or resend code   
app.post('/api/sign21', async (req, res) => {
    try {
        const { verifypass } = req.body;
        console.log(verifypass)
        const check = await collectionsign.findOne({ verifypass: verifypass });
        if (check) {
            res.json(check);
        } else {
            res.status(401).json({ error: 'verify pass is incorrect' });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
});

//          sign up  (username and password)
app.post("/setpass", async (req, res) => {//inorder to work with mongoose write async
    try {
        const datasign = {
            username: req.body.username,
            password: req.body.password,
            checkbox: req.body.checkbox
        }
        await scollection.insertMany([datasign])
        res.status(200).send("set password and username  successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error occurred while signup");
    }
})
//                      code for searching start 
function findCommonWords(line1, line2) { // findCommonWordsWithLevenshteinDistance
    const words1 = line1.toLowerCase().split(' ');
    const words2 = line2.toLowerCase().split(' ');
    const commonWords = [];
    for (let i = 0; i < words1.length; i++) {
        for (let j = 0; j < words2.length; j++) {
            const distance = levenshteinDistance(words1[i], words2[j]);
            if (distance <= 2 && !commonWords.includes(words1[i])) {
                commonWords.push(words1[i]);
            }
        }
    }
    if (commonWords.length === 0) {
        return null;
    }
    return commonWords;
}
function levenshteinDistance(word1, word2) {
    const matrix = [];
    for (let i = 0; i <= word2.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= word1.length; j++) {
        matrix[0][j] = j;
    }
    for (let i = 1; i <= word2.length; i++) {
        for (let j = 1; j <= word1.length; j++) {
            if (word2.charAt(i - 1) === word1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    return matrix[word2.length][word1.length];
}

app.put("/searchapi", async (req, res) => {
    try {
      const srch = req.body.search;
      const line = "online earning earn earns online earn online Earn online";
      const line2 = "crypto trading trading crypto trade";
      const line3 = "web web3.0 3.0web 3.oweb web3.0";
      const line4 = "artificial intelligence";
      const line5 = "block chain blockchain bloackchain";
      const line6 = "metaverse meta verse meta-verse";
      const line7 = "articles articale articales";
      const line8 = "future articles futurarticles iincoming articales";
      const line9 = "comingsoon commingsoon coming soon son";
      const line10 = "home HOME";
      const line11 = "aboutus about ABOUT";
      const line12 = "contact contactus CONTACT";
      const line13 = "login LOGIN";
      const line14 = "article-writer become becomeanarticlewriter";
      const line15 = "terms conditions term-condition";
      const line16 = "privacy policy privacy-policy";
      const line17 = "disclaimers disclaimer";
      
      const onlineearn = findCommonWords(srch, line);
      const crypto = findCommonWords(srch, line2);
      const web3 = findCommonWords(srch, line3);
      const artificial = findCommonWords(srch, line4);
      const blockchain = findCommonWords(srch, line5);
      const metaverse = findCommonWords(srch, line6);
      const articles = findCommonWords(srch, line7);
      const futurearticles = findCommonWords(srch, line8);
      const comingsoon = findCommonWords(srch, line9);
      const home = findCommonWords(srch, line10);
      const about = findCommonWords(srch, line11);
      const contactus = findCommonWords(srch, line12);
      const login = findCommonWords(srch, line13);
      const becomewriter = findCommonWords(srch, line14);
      const termCondition = findCommonWords(srch, line15);
      const privacypolicy = findCommonWords(srch, line16);
      const disclaimer = findCommonWords(srch, line17);
      
      if (onlineearn != null) {
        res.send("onlineearning");
      } else if (crypto != null) {
        res.send("cryptotrading");
      } else if (web3 != null) {
        res.send("web3");
      } else if (artificial != null) {
        res.send("artificial");
      } else if (blockchain != null) {
        res.send("blockchain");
      } else if (metaverse != null) {
        res.send("metaverse");
      } else if (articles != null) {
        res.send("articles");
      } else if (futurearticles != null) {
        res.send("futurearticles");
      } 
      else if (comingsoon != null) {
        res.send("comingsoon");
      } 
    //   
      else if (home != null) {
        res.send("home");
      } 
      else if (about != null) {
        res.send("about");
      } 
      else if (contactus != null) {
        res.send("contactus");
      } 
      else if (login != null) {
        res.send("login");
      } 
      else if (becomewriter != null) {
        res.send("becomewriter");
      } 
      else if (termCondition != null) {
        res.send("terms and conditions");
      } 
      else if (privacypolicy != null) {
        res.send("privacypolicy");
      } 
      else if (disclaimer != null) {
        res.send("disclaimer");
      } 
      else {
        res.send("error");
      }
    } catch (error) {
      res.send("error404");
    }
  });
  

app.listen(8080, () => {
    console.log("port connected");
})