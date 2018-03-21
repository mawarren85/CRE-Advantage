const config = require('../knexfile.js')['development'];
// const config = require('../knexfile.js')[process.env.ENVIRONMENT];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(8);

const session = require('express-session');

// filterInt - The function from MDN that confirms a particular value is actually an integer. Because parseInt isn't quite strict enough.
const filterInt = function(value) {
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
        return Number(value);
    return NaN;
};

//// Get user for update account
router.get('/:id', (req, res, next)=>{
  const id = filterInt(req.params.id);

  knex('users').where('id', id).select('*')
  .then((user) => {
    res.json(user);
    })
    .catch(function(error) {
      console.log(error);
      res.sendStatus(500);
    })
  });


  /////Update Email
  router.patch('/:id/email', (req, res, next)=>{
    const id = filterInt(req.params.id);
    const email = req.body.email
    knex('users').where('id', id).update({email: email})
    .then(function(results) {
      console.log(results, 'results in update email');
      if(results == 1) {
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    }).catch(function(error){
      console.log('THERE BE AN ERROR IN YOUR NOTE PUT');
    });
});



    ///////Update info
  router.put('/:id/info', (req, res, next)=>{
    const id = filterInt(req.params.id);
    let name = req.body.name;
    let city = req.body.city + ", " + req.body.state;

    knex('users').where('id', id).update({name:name, city:city})
    .then(() => {
      res.sendStatus(200);
      })
      .catch(function(error) {
        console.log(error);
        res.sendStatus(500);
      })
    });


///////////Update Password
      router.put('/:id/password', (req, res, next)=>{
        console.log(req.body, "body");
        const id = filterInt(req.params.id);

        const passObj = req.body

       let oldHash = bcrypt.hashSync(passObj.oldPassword, 10)

        console.log(oldHash, "old hash");

        let newHash = bcrypt.hashSync(passObj.oldPassword, 10)

        console.log(newHash, "new hash");

      });

module.exports = router;
