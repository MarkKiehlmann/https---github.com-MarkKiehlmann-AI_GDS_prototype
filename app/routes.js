//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
//const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
const express = require('express');
const router = express.Router();

// Route for the introduction page
router.get('/', function (req, res) {
    res.render('introduction');
});

// Route for the form page
router.get('/form', function (req, res) {
    res.render('form');
});

// Route to handle form submissions and redirect to the check answers page
router.post('/check-answers', function (req, res) {
    const formData = req.body;
    res.render('check-answers', { data: formData });
});

// Route to handle the submission from the check answers page and redirect to the success page
router.post('/success', function (req, res) {
    const licenseNumber = 'FL-' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    res.render('success', { licenseNumber });
});

// Export routes
module.exports = router;
