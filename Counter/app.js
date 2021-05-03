//set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// console.log(btns);  --> Nodelist
// forEAch() CAN be run on Nodelist

btns.forEach((btn) => {
	// console.log(btn);
	btn.addEventListener('click', (e) => {
		// check which button was clicked and show assigned classes -->
		console.log(e.currentTarget.classList);
		const styles = e.currentTarget.classList;
		if (styles.contains('decrease')) {
			count--;
		} else if (styles.contains('increase')) {
			count++;
		} else {
			count = 0;
		}

		if (count > 0) {
			value.style.color = 'green';
		} else if (count < 0) {
			value.style.color = 'red';
		} else {
			value.style.color = 'black';
		}
		// from const = value.doc.querys(#value)
		value.textContent = count;
	});
});
