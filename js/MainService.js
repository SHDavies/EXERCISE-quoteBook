angular.module('quoteBook').service('MainService', function() {

	var quotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];

  if (localStorage.length === 0) {
  	localStorage.setItem('quoteStorage', JSON.stringify(quotes));
  }

  var storedQuotes = JSON.parse(localStorage.getItem('quoteStorage'));

  this.getData = function() {
  	return storedQuotes;
  };

  this.addData = function(newText, authorName) {
  	var newQuote = {
  		text: newText,
  		author: authorName
  	};
  	quotes.push(newQuote);
  	localStorage.setItem('quoteStorage', JSON.stringify(quotes));
  	return quotes;
  };

  this.removeData = function(toRemove) {
  	for (var i = 0; i < quotes.length; i++) {
  		if (quotes[i].text === toRemove) {
  			quotes.splice(i, 1);
  		}
  	}
  	localStorage.setItem('quoteStorage', JSON.stringify(quotes));
  	return quotes;
  };

  this.resetStorage = function() {
  	localStorage.clear();
  	localStorage.setItem('quoteStorage', JSON.stringify(quotes));
  	quotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  	];
  	return quotes;
  }
})