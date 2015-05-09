var express = require('express');
var FeedParser = require('feedparser')
  , request = require('request');


var router = express.Router();

router.get('/press', function(req, res) {
	var req = request('http://www.president.gov.tw/RSS.aspx?tabid=131&moduleid=514')
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
		res.render('president', {
			title: '總統府新聞稿',
			description: '總統府新聞稿即時新聞 - 用數據看台灣',
			news: news
		});

	})
	
});

router.get('/announce', function(req, res) {
	var req = request('http://www.president.gov.tw/RSS.aspx?tabid=84&moduleid=428')
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
		res.render('president', {
			title: '總統府公報',
			description: '總統府公報即時新聞 - 用數據看台灣',
			news: news
		});

	})
	
});

router.get('/spot', function(req, res) {
	var req = request('http://www.president.gov.tw/RSS.aspx?tabid=1103&moduleid=2780')
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
		res.render('president', {
			title: '總統府全民焦點',
			description: '總統府全民焦點即時新聞 - 用數據看台灣',
			news: news
		});

	})
	
});

router.get('/spot', function(req, res) {
	var req = request('http://www.president.gov.tw/RSS.aspx?tabid=1103&moduleid=2780')
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
		res.render('president', {
			title: '總統府全民焦點',
			description: '總統府全民焦點即時新聞 - 用數據看台灣',
			news: news
		});

	})
	
});

router.get('/paper', function(req, res) {
	var req = request('http://www.president.gov.tw/RSS.aspx?tabid=1105&moduleid=2781')
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
		res.render('president', {
			title: '總統府手稿',
			description: '總統府手稿即時新聞 - 用數據看台灣',
			news: news
		});

	})
	
});

module.exports = router;
