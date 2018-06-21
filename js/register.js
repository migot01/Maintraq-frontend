// Add event listener
document.getElementById('register').addEventListener('click', register);

// register a user
function registeruser(e) {
	e.preventDefault();

    let first_name= document.getElementById('first_name').value;
    let last_name= document.getElementById('last_name').value;
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;

	fetch ('http://127.0.0.1:5000/api/v2/auth/register', {
		method: 'POST',
		headers: {
			"Accept":"application/json",
			"Content-type":"application/json"
		},
		body: JSON.stringify({first_name:first_name,last_name:last_name, email:email, password:password})
	})	
	.then((res) => res.json())
	.then((data) => console.log(data))
}