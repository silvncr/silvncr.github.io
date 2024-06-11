const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';

window.onpointermove = (event) => {
	const { clientX, clientY } = event;
	document.getElementById('blob').animate(
		{
			left: `${clientX}px`,
			top: `${clientY}px`,
		},
		{
			duration: 3000,
			fill: 'forwards',
		}
	);
};

let interval = null;
const name_element = document.querySelector('.name');

document.querySelector('.screen').onmouseenter = (_) => {
	let iteration = 0;
	clearInterval(interval);
	interval = setInterval(() => {
		if (name_element && name_element.innerText) {
			name_element.innerText = name_element.innerText
				.split('')
				.map((_, index) => {
					if (index < iteration) {
						return name_element.dataset.value[index];
					}
					return alphabet[Math.floor(Math.random() * alphabet.length)];
				})
				.join('');
			if (iteration >= name_element.dataset.value.length) {
				clearInterval(interval);
			}
		}
		iteration += 1 / 3;
	}, 30);
};
