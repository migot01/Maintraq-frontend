function getRequest() {	
	let title = localStorage.getItem('title')
	document.getElementById('req-title').innerHTML = title ;

	let location = localStorage.getItem('location')
	document.getElementById('req-location').innerHTML = location ;

	let body = localStorage.getItem('body')
    document.getElementById('req-body').innerHTML = body ;

    document.getElementById("save").addEventListener('click', updateRequest);
    	
}


function updateRequest(e) {
    e.preventDefault();

    let title = document.getElementById("req-title").value;
	let location = document.getElementById("req-location").value;
	let body = document.getElementById("req-body").value;

	let req_id = localStorage.getItem('id');


		fetch ('http://127.0.0.1:5000/api/v2/users/requests/'+req_id, {
			method: 'PUT',
			headers:  {
                "Accept":"application/json",
                "Content-type":"application/json",
                "access-token":localStorage.getItem('auth-token')
            },
			body: JSON.stringify({title:title, location:location,
                body:body})
		})
		.then((res) => res.json())
		.then((data) => console.log(data))
	
}
