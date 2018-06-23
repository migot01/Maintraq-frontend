// Add event listener
document.getElementById('login').addEventListener('click', loginUser);

// login a user
function loginUser(e) {
	e.preventDefault();
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;

	fetch ('http://127.0.0.1:5000/api/v2/auth/login', {
		method: 'POST',
		headers: {
			"Accept":"application/json",
			"Content-type":"application/json"
		},
		body: JSON.stringify({email:email, password:password})
	})	
	.then((res) => res.json())
	.then((data) => localStorage.setItem('auth-token', data.auth_token)) 
}