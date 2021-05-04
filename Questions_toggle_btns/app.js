//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
	// console.log(question);
	const btn = question.querySelector('.question-btn'); // not document.que....
	// console.log(btn);
	btn.addEventListener('click', () => {
		questions.forEach((item) => {
			if (item !== question) {
				item.classList.remove('show-text');
			}
		});
		question.classList.toggle('show-text');
	});
});

// traversing the dom (moving up and down the DOM tree)

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach((jazz) => {
// 	jazz.addEventListener('click', (e) => {
// 		const question = e.currentTarget.parentElement.parentElement;
// 		question.classList.toggle('show-text');
// 	});
// });
