//Define HTML Elements
let create = document.getElementById("Create"); 
let output = document.getElementById("output");
//add an event listener to the create button that generates the cards, along with the value of the user input, and outputs them in the 'output' div of the HTML
//Call a function that will make the delete buttons work, newDel, here. It doesn't matter that you haven't defined it yet.
create.addEventListener("click", function () {
	output.innerHTML += "<div class='innerDiv' " + "id='innerDiv'" + "'>" + document.getElementById("input").value + "<button id='clear'" + "class='clear'" + "'>" + "Clear" +  "</button>" + '</div>';
	newDel();
}); 
//Define the delete button's task with a function:
function newDel () {
	//1) Create a variable that contains the classname of the delete button (clear). Use class rather than id, because there will be multiple buttons 
	var clearbtn = document.getElementsByClassName('clear');
	//2) create a for loop---you will need to iterate through each time a button shows up 
	for (let i = 0; i < clearbtn.length; i++) {
		//3) Define newone--which is the button, loaded with a for loop
		var newone = clearbtn[i];
		//4) Give newone a click event listener 
		newone.addEventListener('click', function (event) {
		//5) Use event.path to specify what exactly in the DOM you want the delete button to remove. In this case, 
		//its innerDiv, for each individual instance of the button. This gets called up in the anonymous function of the 
		//first event listener.
		event.path[1].remove(); 
	});
	} 
}









