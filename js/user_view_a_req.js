function getRequest() {	
	title = localStorage.getItem('title')
	document.getElementById('req-title').innerHTML = 'Title: '+title+'';

	location = localStorage.getItem('location')
	document.getElementById('req-location').innerHTML = 'Location: '+location+'';

	body = localStorage.getItem('body')
    document.getElementById('req-body').innerHTML = 'Body: '+body+'';
    
    status = localStorage.getItem('status')
	document.getElementById('req-status').innerHTML = 'Status: '+status+'';

	
}