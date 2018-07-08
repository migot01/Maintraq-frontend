function getRequest() {	
	let title = localStorage.getItem('title')
	document.getElementById('req-title').innerHTML = '<u>Title: '+title+'</u>';

	let location = localStorage.getItem('location')
	document.getElementById('req-location').innerHTML = '<em><b>Location: </b>'+location+'<em>';

	let body = localStorage.getItem('body')
    document.getElementById('req-body').innerHTML = '<em><b>Description:</b> '+body+'</em>';
    
    let status = localStorage.getItem('status')
	document.getElementById('req-status').innerHTML = '<em><b>Status:</b> '+status+'</em>';

	
}