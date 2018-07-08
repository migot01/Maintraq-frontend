API_PREFIX = 'https://maintraqa.herokuapp.com'
function AdminRequestsList() {
	fetch(API_PREFIX+'/api/v2/requests', {
		method: 'GET',
		headers: {
            "Accept":"application/json",
            "Content-type":"application/json",
            "access-token":localStorage.getItem('auth-token')
        }
	})
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		data.forEach(function(request) {
			let table = document.getElementById('requests');
			
			i = 1
			console.log(table);
			
			if (typeof table !== "undefined" && table !== null) {
					let row = table.insertRow(i);

                    let id = row.insertCell(0);
                    let title = row.insertCell(1);
                    let location = row.insertCell(2);
                    let body = row.insertCell(3);
					let status = row.insertCell(4);
					
				
				
					id.innerHTML ="<a>"+request.id+"</a>";
					title.innerHTML = request.title;
					location.innerHTML = request.location;
					body.innerHTML = request.body;
					status.innerHTML = request.status;
					
					i++;
                    id.addEventListener('click', viewRequest);	
				
			} 
            function viewRequest(e) {
				e.preventDefault();
				fetch(API_PREFIX+'/api/v2/requests/'+request.id, {
					method: 'GET',
					headers:{
						"Accept":"application/json",
						"Content-type":"application/json",
						"access-token":localStorage.getItem('auth-token')
					}
				})
				.then((res) => res.json())
				.then((data) => {
					console.log('Hello');
					localStorage.setItem('id', data.id);
					localStorage.setItem('title', data.title);
					localStorage.setItem('location', data.location);
					localStorage.setItem('body', data.body);
					localStorage.setItem('status', data.status);
					location.href='adminresponserequest.html';
				})
			}
			
			

		});
	})
}
			
			
			

		