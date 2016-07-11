module.exports = function (request, response, next) {
  var startTime = +new Date();
  var method = request.method;
  var url = request.url;
  var stream = process.stdout;
  var duration = null;

  response.on('finish', function () {
    duration = +new Date() - startTime;
    var message =method+url+" took "+duration+" ms \n\n";
    stream.write(message);
  });
  next();
 };