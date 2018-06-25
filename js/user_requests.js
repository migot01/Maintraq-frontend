function UserRequestsList() {
	fetch('http://127.0.0.1:5000/api/v2/users/requests', {
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
					
				
				
					id.innerHTML = request.id;
					title.innerHTML = request.title;
					location.innerHTML = request.location;
					body.innerHTML = request.body;
					status.innerHTML = request.status;
					
					i++;	
				
			} 
			
			

		});
	})
}