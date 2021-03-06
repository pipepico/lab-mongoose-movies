const express   = require('express');
const router    = express.Router();
const Celebrity = require('../models/Celebrity')

router.get('/', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render('celebrities/index', { celebrities });
    })
    .catch(err => {
      res.send(err)
    })
});

router.get('/:id', (req,res,next) => {
  const { id } = req.params
  Celebrity.findById(id)
    .then(celebrity => {
      res.render('celebrities/show', celebrity)
    })
    .catch(err => { res.send(err)})
})

router.get('/new', (req,res,next) => {
  res.render('celebrities/new',)
})

router.post('/new', (req,res, next) => {
  Celebrity.create({ ...req.body })
    .then(celebrities => {
      res.send('celebrities/',celebrities)
    })
    .catch(err => {
      res.render('celebrities/new', err)
    })
})

module.exports = router;
