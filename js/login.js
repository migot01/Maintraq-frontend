
API_PREFIX = 'https://maintraqa.herokuapp.com'
// Add event listener
document.getElementById('login').addEventListener('click', loginUser);

// login a user
function loginUser(e) {
	e.preventDefault();
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;

	fetch (API_PREFIX+'/api/v2/auth/login', {
		method: 'POST',
		headers: {
			"Accept":"application/json",
			"Content-type":"application/json"
		},
		body: JSON.stringify({email:email, password:password})
	})	
	.then((res) => res.json())
	.then((data) => {
        console.log(data);
        if (data.message === 'Login successful') {
            localStorage.setItem('auth-token', data.auth_token);
            console.log(data)
            if (data.role === 1) {
                
                location.href="adminpage.html"; 
            }
            else {
                location.href="userrequest_list.html"; 
            }             
        }
        else {
            alert(data.message);
        }    
    })     
}
