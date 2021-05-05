// practice event target --> returns anything you click on
// event bubbling --> if we setup the listener on the parent, we are able to access it children

const btn = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const description = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
	// // show which part of .about you click
	console.log(e.target);
	/*
	console.log(e.target.dataset.id); 
  only buttons contain data-id
  1. click on the buttons --> id appears in console
  2. click on anything else --> undefined
  */
	const id = e.target.dataset.id;
	if (id) {
		console.log(id);
		// remove active from all buttns
		btn.forEach((btn) => {
			btn.classList.remove('active');
			e.target.classList.add('active');
		});

		// hide all descriptions
		description.forEach((paragraph) => {
			paragraph.classList.remove('active');
			const element = document.getElementById(id);
			element.classList.add('active');
		});
	}
});
