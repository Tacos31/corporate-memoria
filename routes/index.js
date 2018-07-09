var express = require('express');
var router = express.Router();
var app = express();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/accueil', function(req, res, next) {
  res.render('accueil');
});

router.get('/pourquoi', function(req, res, next) {
  res.render('pourquoi');
});

router.get('/entreprise', function(req, res, next) {
  res.render('entreprise');
});

router.get('/demarche', function(req, res, next) {
  res.render('demarche');
});

router.get('/qui', function(req, res, next) {
  res.render('qui');
});

router.get('/ethique', function(req, res, next) {
  res.render('ethique');
});

router.get('/respect', function(req, res, next) {
  res.render('respect');
});

router.get('/verite', function(req, res, next) {
  res.render('verite');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.post('/contact', function(req, res, next) {
  if (req.body.email=="" || req.body.name == "" || req.body.message == "") {
    res.render('contact', {
      errorMessage: "Veuillez remplir les champs obligatoires"
    });
  } else {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
            user: `corporate.memoria@gmail.com`,
            pass: `Corporate@memoria`
      }
    })
    const mailOptions = {
        from: `${req.body.email}`,
        to: 'corporate.memoria@outlook.com',
        subject: `Message de ${req.body.name} depuis Corporate Memoria`,
        text: `Message :\n\n${req.body.message}\n\nContactez moi :\n\nTelephone : ${req.body.phone} \nEmail : ${req.body.email}`,
        replyTo: `${req.body.email}`
      }
    //console.log(mailOptions);
    transporter.sendMail(mailOptions, function(err, res) {
      if (err) {
        console.error('there was an error: ', err);
      } else {
        //console.log('here is the res: ', res)
      }
    })
    res.render('contact', {
      successMessage: "Email envoyé"
    });
  }
});

module.exports = router;
