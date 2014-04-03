var express = require('express'),
    app = express(),
    blocks = require('blocks');

var conf = {
  db: {
    user: 'blocks'
  }
};
blocks.pages(conf, function(err, pages) {
  if (err) throw err;
  app.use(pages);
  var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
  });
});


