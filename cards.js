/*When the user enters in text into the text area and then clicks the create button, 
create a new card element in the DOM. 
You decide the height/width of the card.
When the user clicks the Delete button, the containing card, and no other cards, 
should then be removed from the DOM. Not just made invisible, actually removed from the DOM.*/
let create = document.getElementById("Create"); 
let output = document.getElementById("output");

create.addEventListener("click", function () {
	let maths = Math.floor((Math.random() * 60) + 9);
	output.innerHTML += "<div class='innerDiv' " + "id='innerDiv'" + maths + "'>" + document.getElementById("input").value + "<button id='clear'" + "class='clear'" + maths + "'>" + "Clear" +  "</button>" + '</div>';

}); 

document.addEventListener('click', function (event) {
	if (event.target === document.getElementById('clear')) {
	event.target.parentElement.remove(); 
}
});



