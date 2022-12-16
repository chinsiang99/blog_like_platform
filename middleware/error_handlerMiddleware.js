const expressErrorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 404;

  if(res.statusCode == 404){
    res.render('login', {status: 200});
  }else if(res.statusCode == 401){
    const data = {
      status: 401,
      errorMessage: "User not found!",
    }
    res.render('login', data);
  }else{
    res.status(statusCode).json({
      status: statusCode,
      error: err.message
    })
  }
};

module.exports = { expressErrorHandler };