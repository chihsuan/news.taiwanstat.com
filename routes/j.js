var express = require('express');
var FeedParser = require('feedparser')
  , request = require('request');


var router = express.Router();

router.get('/news', function(req, res) {
	var req = request('http://jirs.judicial.gov.tw/GNNWS/rss.asp?classid=u')
  , feedparser = new FeedParser();

  var news = [];

	req.on('error', function (error) {
	  // handle any request errors
	  res.render('error', error)
	});

	req.on('response', function (res) {
	  var stream = this;

	  if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));

	  stream.pipe(feedparser);
	});


	feedparser.on('error', function(error) {
	  // always handle errors
	  res.render('error', error)
	});
	feedparser.on('readable', function() {
	  var stream = this
	    , meta = this.meta // **NOTE** the "meta" is always available in the context of the feedparser instance
	    , item;

	  while (item = stream.read()) {
	  	news.push(item);
	  }
	});
	feedparser.on('end', function() {
		res.render('j', {
			title: '司法院司改訊息',
			description: '司法院司改訊息 - 用數據看台灣',
			news: news
		});

	})
	
});

router.get('/press', function(req, res) {
	var req = request('http://jirs.judicial.gov.tw/GNNWS/rss.asp?classid=n')
  , feedparser = new FeedParser();

  var news = [];

	req.on('error', function (error) {
	  // handle any request errors
	  res.render('error', error)
	});

	req.on('response', function (res) {
	  var stream = this;

	  if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));

	  stream.pipe(feedparser);
	});


	feedparser.on('error', function(error) {
	  // always handle errors
	  res.render('error', error)
	});
	feedparser.on('readable', function() {
	  var stream = this
	    , meta = this.meta // **NOTE** the "meta" is always available in the context of the feedparser instance
	    , item;

	  while (item = stream.read()) {
	  	news.push(item);
	  }
	});
	feedparser.on('end', function() {
		res.render('j', {
			title: '司法院新聞稿',
			description: '司法院新聞稿 - 用數據看台灣',
			news: news
		});

	})
	
});

module.exports = router;
