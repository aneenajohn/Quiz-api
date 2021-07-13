const errorHandler = (err, req, res, next) => {
  console.error(err.stack)
  // res.status(500).send('Something broke!')
  res.status(500).json(
    {success:false,error:err.message,message:"Err occured!Have a look at err stack"});
}

const routeNotFound = (req,res) => {
  res.status(404).json({success:false,message:"404 Route not found on server, please check"})
}

module.exports = {errorHandler,routeNotFound}
