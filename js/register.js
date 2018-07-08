// Add event listener
API_PREFIX = 'https://maintraqa.herokuapp.com'
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
		if (data.message ==="User created!")
		{
			window.location.assign('login.html');
		}
	})

}