const expressErrorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 404;

  if(res.statusCode == 404){
    // res.redirect('/login', {status: 200})
    res.render('login', {status: 200});
  }else{
    res.status(statusCode).json({
      status: statusCode,
      error: err.message
    })
  }
};

module.exports = { expressErrorHandler };