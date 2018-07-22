// Add event listener
API_PREFIX = 'http://127.0.0.1:5000'
document.getElementById('register').addEventListener('click', registeruser);

// register a user
function registeruser(e) {
	e.preventDefault();

    let first_name= document.getElementById('First_name').value;
    let last_name= document.getElementById('last_name').value;
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;

	fetch (API_PREFIX+'/api/v2/auth/register', {
		method: 'POST',
		headers: {
			"Accept":"application/json",
			"Content-type":"application/json"
		},
		body: JSON.stringify({first_name:first_name,last_name:last_name, email:email, password:password})
	})	
	
	.then((res) => res.json())
	.then((data) => {
		console.log(data)
		alert(data.message);
		if (email === "" && password === ""){
			window.location.assign('login.html');
		}
		if (data.message ==="User created!")
		{
			window.location.assign('login.html');
		}
	})
	

}

