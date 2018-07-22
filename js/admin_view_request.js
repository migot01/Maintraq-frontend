API_PREFIX = 'http://127.0.0.1:5000'
function getRequest() {	
    request_id = localStorage.getItem('id')

	let title = localStorage.getItem('title')
	document.getElementById('req-title').innerHTML = '<u>Title: '+title+'</u>';
	

	let location = localStorage.getItem('location')
	document.getElementById('req-location').innerHTML = '<em><b>Location: </b>'+location+'</em>';

	let body = localStorage.getItem('body')
    document.getElementById('req-body').innerHTML = '<em><b>Description: </b>'+body+'</em>';
    
    let status = localStorage.getItem('status')
    document.getElementById('req-status').innerHTML = '<em><b>Status: </b>'+status+'</em>';
    
    document.getElementById('approve').addEventListener('click', approveRequest);
	document.getElementById('reject').addEventListener('click', disapproveRequest);
    document.getElementById('resolve').addEventListener('click', resolveRequest);
    
   

	
}

// Approve request
function approveRequest(e) {
	e.preventDefault();

	fetch(API_PREFIX +'/api/v2/requests/'+request_id+'/approve', {
		method: "PUT",
		headers: {
            "Accept":"application/json",
            "Content-type":"application/json",
            "access-token":localStorage.getItem('auth-token')
        }
	})
	.then((res) => res.json())
	.then((data) => {
		console.log(data)
		alert(data.message);
		if (data.message === "Request approved successfully")
		{
			window.location.assign('adminpage.html');
		}
	})
}

// disapprove request
function disapproveRequest(e) {
	e.preventDefault();

	fetch(API_PREFIX+'/api/v2/requests/'+request_id+'/disapprove', {
		method: "PUT",
		headers: {
            "Accept":"application/json",
            "Content-type":"application/json",
            "access-token":localStorage.getItem('auth-token')
        }
	})
	.then((res) => res.json())
	.then((data) => {
		console.log(data)
		alert(data.message);
		if (data.message === "Request rejected successfully")
		{
			window.location.assign('adminpage.html');
		}
	})

}

// resolve request
function resolveRequest(e) {
	e.preventDefault();

	fetch(API_PREFIX+'/api/v2/requests/'+request_id+'/resolve', {
		method: "PUT",
		headers: {
            "Accept":"application/json",
            "Content-type":"application/json",
            "access-token":localStorage.getItem('auth-token')
        }
	})
	.then((res) => res.json())
	.then((data) => {
		console.log(data)
		alert(data.message);
		if (data.message === "Request resolved successfully")
		{
			window.location.assign('adminpage.html');
		}
	})
}