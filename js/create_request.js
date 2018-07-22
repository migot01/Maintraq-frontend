//add eventlistener
API_PREFIX = 'http://127.0.0.1:5000'
document.getElementById("submitRequest").addEventListener('click', createRequest);

// Create request function
function createRequest(e) {
    e.preventDefault();
    
    let title = document.getElementById("title").value;
	let location = document.getElementById("location").value;
	let body = document.getElementById("body").value;

	fetch (API_PREFIX+'/api/v2/Auth/request', {
		method: 'POST',
		headers: {
			"Accept":"application/json",
			"Content-type":"application/json",
			"access-token":localStorage.getItem('auth-token')
		},
		body: JSON.stringify({title:title, location:location,
							  body:body})
	})
	.then ((res) => res.json())
	.then ((data) => {
		console.log(data)
		alert(data.message)
		
		if (data.message != "Please fill all fields")
		{
			window.location.assign('userrequest_list.html');
		}
	})
}