function logger(req, res, next) {
  const time = new Date().toISOString();
  console.log(`Your request: ${req.url} was received at ${time}`);

  next();
}

module.exports = logger;
