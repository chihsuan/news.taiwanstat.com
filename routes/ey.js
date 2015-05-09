var express = require('express');
var FeedParser = require('feedparser')
  , request = require('request');

var router = express.Router();

router.get('/main', function(req, res) {
	var req = request('http://www.ey.gov.tw/Rss_Content.aspx?sms=4ACFA38B877F185F')
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
	  	item['rss:description']['#'] = item['rss:description']['#'].replace(/<\/?[^>]+(>|$)/g, "");
	  	news.push(item);
	  }
	});
	feedparser.on('end', function() {
		res.render('ey', {
			title: '行政院重大政策',
			description: '行政院重大政策即時新聞 - 用數據看台灣',
			news: news
		});

	})
	
});

router.get('/news', function(req, res) {
	var req = request('http://www.ey.gov.tw/Rss_Content.aspx?sms=99606AC2FCD53A3A')
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
	  	item['rss:description']['#'] = item['rss:description']['#'].replace(/<\/?[^>]+(>|$)/g, "");
	  	news.push(item);
	  }
	});
	feedparser.on('end', function() {
		res.render('ey', {
			title: '行政院即時新聞',
			description: '行政院即時新聞 - 用數據看台灣',
			news: news
		});

	})
	
});

router.get('/ey-news', function(req, res) {
	var req = request('http://www.ey.gov.tw/Ey_News_RSS.aspx')
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
	  	item['rss:description']['#'] = item['rss:description']['#'].replace(/<\/?[^>]+(>|$)/g, "");
	  	news.push(item);
	  }
	});
	feedparser.on('end', function() {
		res.render('ey', {
			title: '行政院本院新聞',
			description: '行政院本院新聞 - 用數據看台灣',
			news: news
		});

	})
	
});


router.get('/units', function(req, res) {
	var req = request('http://www.ey.gov.tw/unitRSS_ey.aspx')
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
	  	item['rss:description']['#'] = item['rss:description']['#'].replace(/<\/?[^>]+(>|$)/g, "");
	  	news.push(item);
	  }
	});
	feedparser.on('end', function() {
		res.render('ey', {
			title: '行政院部會新聞',
			description: '行政院部會新聞 - 用數據看台灣',
			news: news
		});

	})
	
});

router.get('/lead', function(req, res) {
	var req = request('http://www.ey.gov.tw/rss_leadertravel.aspx?n=4E183D9D41028977')
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
	  	item['rss:description']['#'] = item['rss:description']['#'].replace(/<\/?[^>]+(>|$)/g, "");
	  	news.push(item);
	  }
	});
	feedparser.on('end', function() {
		res.render('ey', {
			title: '行政院院長行程',
			description: '行政院院長行程 - 用數據看台灣',
			news: news
		});

	})
	
});

router.get('/content', function(req, res) {
	var req = request('http://www.ey.gov.tw/Rss_Content.aspx?sms=FF87AB3AC4507DE3')
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
	  	item['rss:description']['#'] = item['rss:description']['#'].replace(/<\/?[^>]+(>|$)/g, "");
	  	news.push(item);
	  }
	});
	feedparser.on('end', function() {
		res.render('ey', {
			title: '行政院院會決議',
			description: '行政院院會決議 - 用數據看台灣',
			news: news
		});

	})
	
});

router.get('/deal', function(req, res) {
	var req = request('http://www.ey.gov.tw/Rss_Content.aspx?sms=FF87AB3AC4507DE3')
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
	  	item['rss:description']['#'] = item['rss:description']['#'].replace(/<\/?[^>]+(>|$)/g, "");
	  	news.push(item);
	  }
	});
	feedparser.on('end', function() {
		res.render('ey', {
			title: '行政院院會決議',
			description: '行政院院會決議 - 用數據看台灣',
			news: news
		});

	})
	
});

router.get('/customer', function(req, res) {
	var req = request('http://www.ey.gov.tw/Rss_Content.aspx?sms=9101EB18DCFCC739')
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
	  	item['rss:description']['#'] = item['rss:description']['#'].replace(/<\/?[^>]+(>|$)/g, "");
	  	news.push(item);
	  }
	});
	feedparser.on('end', function() {
		res.render('ey', {
			title: '行政院消保/新聞稿',
			description: '行政院消保/新聞稿 - 用數據看台灣',
			news: news
		});

	})
	
});


router.get('/customer-alert', function(req, res) {
	var req = request('http://www.ey.gov.tw/Rss_Content.aspx?sms=E452EBB48FCCFD71')
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
	  	item['rss:description']['#'] = item['rss:description']['#'].replace(/<\/?[^>]+(>|$)/g, "");
	  	news.push(item);
	  }
	});
	feedparser.on('end', function() {
		res.render('ey', {
			title: '行政院消保/消費資(警)訊',
			description: '行政院消保/消費資(警)訊 - 用數據看台灣',
			news: news
		});

	})
	
});


module.exports = router;
