var text =" Ram Mandir "

fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${text.trim().replace(" ","%20")}&pageNumber=1&pageSize=10&autoCorrect=true&safeSearch=false&withThumbnails=true&fromPublishedDate=null&toPublishedDate=null`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "af93dfbf1fmsh11afdd00a127d49p1fee0fjsneaa96fe41718",
		"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => {
	console.error(err);
});