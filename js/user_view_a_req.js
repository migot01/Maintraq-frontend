function getRequest() {	
	let title = localStorage.getItem('title')
	document.getElementById('req-title').innerHTML = 'Title: '+title+'';

	let location = localStorage.getItem('location')
	document.getElementById('req-location').innerHTML = 'Location: '+location+'';

	let body = localStorage.getItem('body')
    document.getElementById('req-body').innerHTML = 'Body: '+body+'';
    
    let status = localStorage.getItem('status')
	document.getElementById('req-status').innerHTML = 'Status: '+status+'';

	
}