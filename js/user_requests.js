API_PREFIX = 'http://127.0.0.1:5000'
let sort;
// let table = document.getElementById('requests');


function UserRequestsList(){
	fetch(API_PREFIX+'/api/v2/users/requests', {
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
					row.setAttribute('onclick', 'viewRequest(this)');
					
					
                    let id = row.insertCell(0);
                    let title = row.insertCell(1);
                    let location = row.insertCell(2);
                    let body = row.insertCell(3);
					let status = row.insertCell(4);
					
				
				
					id.innerHTML =request.id;
					title.innerHTML = request.title;
					location.innerHTML = request.location;
					body.innerHTML = request.body;
					status.innerHTML = request.status;
					
					i++;
					// id.addEventListener('click', viewRequest);
					
						
					
					title.className ="title";
					
					
					
			} 
		});
		table = document.getElementById('requests');
		sort = paginate(table);
	})
	

}
     
function viewRequest(event){

				fetch(API_PREFIX+'/api/v2/users/requests/'+event.cells[0].innerHTML, {
					method: 'GET',
					headers:{
						"Accept":"application/json",
						"Content-type":"application/json",
						"access-token":localStorage.getItem('auth-token')
					}
				})
				.then((res) => res.json())
				.then((data) => {
					localStorage.setItem('id', data.id);
					localStorage.setItem('title', data.title);
					localStorage.setItem('location', data.location);
					localStorage.setItem('body', data.body);
					localStorage.setItem('status', data.status);
					location.href='user_view_a_request.html';
				})
			}
			
			

		

				// Implement search on user request page
	searchTitle = document.getElementById('filterbytitle');
	searchTitle.addEventListener('keyup', filterTitle);

	function filterTitle() {
		let filterValue = document.getElementById('filterbytitle').value.toUpperCase();

		// Get table rows
		let tr = document.getElementsByClassName('title');
		// Get entries
		for (let i=0; i<tr.length; i++) {
			if (tr[i].innerHTML.toUpperCase().indexOf(filterValue) > -1 ) {
	            tr[i].parentNode.style.display = '';
	        } else {
	            tr[i].parentNode.style.display = 'none';
	        }
		}	
	}
				
// Pagination function 
function paginate(tb) {
	let table_rows = tb.rows.length
	console.log(table_rows);
	let table_header = tb.rows[0].firstElementChild.tagName;
	// Set rows to be displayed per page
	page_rows = 5;
	// Check if table has header
	is_header = (table_header === 'TH');
	// Array to hold each row
	let tr = [];
	// Start counter row at 1 if table header is present
	let i, ii, j = (is_header)?1:0;
	// Insert first row as header if present
	let th = (is_header?tb.rows[(0)].outerHTML:"");
	// Determine no of pages required 
	let pages = Math.ceil(table_rows/page_rows);
	// If only one page is present do nothing 

	if (pages > 1) {
		// Assign each row into the array

		for (i=j, ii=0; i < table_rows; i++, ii++) {
			tr[ii] = tb.rows[(i)].outerHTML;
			console.log(tr[ii])
		}
		tb.insertAdjacentHTML("afterend","<br/><div id='buttons'></div");
		sort(1);
	}
	// Generate current page after user clicks page button
	function sort(selected_page) {
		// rows variable holds the group of rows on the page including the header if present
		// start_point is the first row on each page

		let rows = th, start_point = ((page_rows*selected_page)-page_rows);
		for (i=start_point; i<(start_point+page_rows) && i<tr.length; i++) {
			rows += tr[i];
		}

		// table has a number of rows
		tb.innerHTML = rows;
		// Create pagination buttons
		document.getElementById('buttons').innerHTML = pageButtons(pages, selected_page);
		// Style button
		document.getElementById("id"+selected_page).setAttribute("class", "active");
	}
	// pageCount, current_page selected 
	function pageButtons(pageCount, current_page) {
		// Disable previous button on first page and next button on last page
		let prev_disable = (current_page === 1)?"disabled":"";
		let next_disable = (current_page === pageCount)?"disabled":"";
		// Buttons hold every button required
		let buttons = "<input type='button' value='&lt;&lt; Prev' onclick='sort("+(current_page-1)+")' "+prev_disable+">";
		console.log(buttons)
		for (i=1; i<=pageCount; i++) {
			buttons += "<input type='button' value='"+i+"' id='id"+i+"' onclick='sort("+i+")'>";
		}
		buttons +="<input type='button' value='Next &gt;&gt;' onclick='sort("+(current_page+1)+")' "+next_disable+">";
		return buttons;
	}
	return sort;
}		