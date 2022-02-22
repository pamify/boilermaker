const router = require('express').Router();

router.use('/puppies', require('./puppies'));
router.use('/kittens', require('./kittens'));

// 404 page not found
router.use((req, res, next) => {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;