var express = require('express');
var FeedParser = require('feedparser')
  , request = require('request');

var router = express.Router();

router.get('/main', function(req, res) {
	var req = request('http://www.ly.gov.tw/01_lyinfo/0111_rss/rssLynews.action')
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
	  	// item['rss:description']['#'] = item['rss:description']['#'].replace(/<\/?[^>]+(>|$)/g, "");
	  	news.push(item);
	  }
	});
	feedparser.on('end', function() {
		res.render('ly', {
			title: '立法院新聞訊息',
			description: '立法院新聞訊息 - 用數據看台灣',
			news: news
		});

	})
	
});


router.get('/meet', function(req, res) {
	var req = request('http://www.ly.gov.tw/01_lyinfo/0111_rss/rssMeeting.action')
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
	  	// item['rss:description']['#'] = item['rss:description']['#'].replace(/<\/?[^>]+(>|$)/g, "");
	  	news.push(item);
	  }
	});
	feedparser.on('end', function() {
		res.render('ly', {
			title: '立法院會議預報',
			description: '立法院會議預報 - 用數據看台灣',
			news: news
		});

	})
	
});

router.get('/memoir', function(req, res) {
	var req = request('http://www.ly.gov.tw/01_lyinfo/0111_rss/rssMemoir.action')
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
	  	// item['rss:description']['#'] = item['rss:description']['#'].replace(/<\/?[^>]+(>|$)/g, "");
	  	news.push(item);
	  }
	});
	feedparser.on('end', function() {
		res.render('ly', {
			title: '立法院會議紀要',
			description: '立法院會議紀要 - 用數據看台灣',
			news: news
		});

	})
	
});

router.get('/ly-news', function(req, res) {
	var req = request('http://www.ly.gov.tw/01_lyinfo/0111_rss/rssLegnews.action')
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
	  	// item['rss:description']['#'] = item['rss:description']['#'].replace(/<\/?[^>]+(>|$)/g, "");
	  	news.push(item);
	  }
	});
	feedparser.on('end', function() {
		res.render('ly', {
			title: '立法院委員最新消息',
			description: '立法院委員最新消息 - 用數據看台灣',
			news: news
		});

	})
	
});

router.get('/achrives', function(req, res) {
	var req = request('http://www.ly.gov.tw/01_lyinfo/0111_rss/rssLegAchi.action')
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
	  	// item['rss:description']['#'] = item['rss:description']['#'].replace(/<\/?[^>]+(>|$)/g, "");
	  	news.push(item);
	  }
	});
	feedparser.on('end', function() {
		res.render('ly', {
			title: '立法院委員政績',
			description: '立法院委員政績 - 用數據看台灣',
			news: news
		});

	})
	
});

router.get('/press', function(req, res) {
	var req = request('http://www.ly.gov.tw/01_lyinfo/0111_rss/rssLegDispatch.action')
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
	  	// item['rss:description']['#'] = item['rss:description']['#'].replace(/<\/?[^>]+(>|$)/g, "");
	  	news.push(item);
	  }
	});
	feedparser.on('end', function() {
		res.render('ly', {
			title: '立法院新聞稿',
			description: '立法院新聞稿 - 用數據看台灣',
			news: news
		});

	})
	
});

module.exports = router;
