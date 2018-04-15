(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '<h2 class="section-heading">Results for "' + searchTerm + '"</h2>';

    if (results.length) { // Are there any results?
    	var appendString = '';
      appendString += '<div class="section-description">Retrieved ' + results.length + ' results</div>';
      appendString += '<ul>';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
        appendString += '<p>' + item.content.substring(0, 250) + '...</p>';
      }

      searchResults.innerHTML += appendString + '</ul>';
    } else {
      searchResults.innerHTML += '<li>No results found</li>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title');
      this.field('author');
      this.field('category');
      this.field('content');

	    for (var key in Epimetrics.store) { // Add the data to lunr
	      this.add({
	        'id': key,
	        'title': Epimetrics.store[key].title,
	        'author': Epimetrics.store[key].author,
	        'category': Epimetrics.store[key].category,
	        'content': Epimetrics.store[key].content
	      });
	    }
    });
    var results = idx.search(searchTerm); // Get lunr to perform a search
    displaySearchResults(results, Epimetrics.store); // We'll write this in the next section
  }
})();