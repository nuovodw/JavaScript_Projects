// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
	//view classes associated with the links variable
	// console.log(links.classList.contains('random')); // --> false
	// console.log(links.classList.contains('links')); // --> true

	//long-version
	// if (links.classList.contains('show-links')) {
	// 	links.classList.remove('show-links');
	// } else {
	// 	links.classList.add('show-links');
	// }

	// must add ->.links height: auto <- in css/@media screen
	links.classList.toggle('show-links');
});
