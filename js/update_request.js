API_PREFIX = 'https://maintraqa.herokuapp.com'
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
	


		fetch (API_PREFIX+'/api/v2/users/requests/'+req_id, {
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
		.then((data) => {
			console.log(data)
			alert(data.message);
			if (data.message ==="request updated!")
			{
				window.location.assign('userrequest_list.html');
			}
		})
	
}
