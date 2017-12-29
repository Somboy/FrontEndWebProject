var menu = document.getElementById("menu_icon");
var submit = document.getElementById("submit");
if(menu != null)
{	
	menu.addEventListener("click", displayMenu);
}
function displayMenu()
	{
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
			x.className += " responsive";
		} else {
			x.className = "topnav";
		}
	}

if(submit != null)
{	
	submit.addEventListener("click", validateData);
}
function validateData()
	{
		var fname = document.getElementById("fname").value;
		var emp_title = document.getElementById("emp_title");
		var title = emp_title.options[emp_title.selectedIndex].text;
		var subject = document.getElementById("subject").value;
		error_fname = document.getElementById("error_fname").innerHTML = "";
		error_title = document.getElementById("error_title").innerHTML = "";
		error_comment = document.getElementById("error_comment").innerHTML = "";

		if (fname === "") {
			error_fname = document.getElementById("error_fname").innerHTML = "Please enter name";
		} else if(title === "") {
			error_title = document.getElementById("error_title").innerHTML = "Please select title";
		}
		else if(subject === ""){
			error_comment = document.getElementById("error_comment").innerHTML = "Please write some comment before submitting";
		}
		else{
			alert("Thanks for your comment!!");
			}
}
