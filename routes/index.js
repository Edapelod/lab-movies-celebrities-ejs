const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


const index = require('./routes/index')
app.use('/', index)


const movieRoutes = require('./routes/movies.routes')
app.use('/movies', movieRoutes)


const celebritiesRoutes = require('./routes/celebrities.routes')
app.use('/celebrities', celebritiesRoutes)

module.exports = router;
