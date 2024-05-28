let i = 1n;
let x = 3n * 10n ** 1020n;
let pi_calc = x;
while (x > 0) {
	x = (x * i) / ((i + 1n) * 4n);
	pi_calc += x / (i + 2n);
	i += 2n;
}
const pi_out = (pi_calc / 10n ** 20n).toString().slice(1);
document.getElementById('year').innerHTML = `&nbsp;${new Date().getFullYear()}`;
for (const [name, link] of [
	['Discord', 'https://discord.com/invite/kx5cVTWjEg'],
	['GitHub', 'https://github.com/silvncr'],
	['Spotify', 'https://open.spotify.com/artist/0c6XPiWIn7uYlWB9B6puvo'],
	['Twitch', 'https://twitch.tv/silvncr'],
	['YouTube', 'https://youtube.com/@silvncr'],
]) {
	document.querySelector('.screen-links').innerHTML +=
		'\n' +
		[
			`<a href="${link}" target="_blank" rel="noopener noreferrer"`,
			`class="${name.toLowerCase()}">`,
			`<em class="icofont-${name.toLowerCase()}"></em></a>`,
			`<!--${name}-->`,
		].join('\n') +
		'\n';
}
const change = (vars) =>
	Object.entries(vars).forEach((v) => root.style.setProperty(v[0], v[1]));
const download_file = (url, filename) => {
	let a = document.createElement('a');
	a.href = url;
	a.download = filename;
	a.style.display = 'none';
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
};
const link_span = (text) => {
	return text
		.replace(/\[/g, `<span class="link-span">`)
		.replace(/\]/g, '</span>');
};
const strip = (str, remove) => {
	while (str.length > 0 && remove.indexOf(str.charAt(0)) != -1) {
		str = str.substr(1);
	}
	while (str.length > 0 && remove.indexOf(str.charAt(str.length - 1)) != -1) {
		str = str.substr(0, str.length - 1);
	}
	return str;
};
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const colours = {
	blue: {
		'--primary-1': '33 150 255',
		'--primary-2': '30 143 255',
	},
	cream: {
		'--primary-1': '245 222 179',
		'--primary-2': '255 255 160',
	},
	cyan: {
		'--primary-1': '0 255 255',
		'--primary-2': '0 240 240',
	},
	green: {
		'--primary-1': '0 230 50',
		'--primary-2': '8 200 30',
	},
	none: {
		'--primary-1': 'auto',
		'--primary-2': 'auto',
	},
	orange: {
		'--primary-1': '255 165 0',
		'--primary-2': '240 180 0',
	},
	pink: {
		'--primary-1': '255 108 203',
		'--primary-2': '255 182 193',
	},
	purple: {
		'--primary-1': '135 0 255',
		'--primary-2': '128 0 128',
	},
	red: {
		'--primary-1': '230 50 50',
		'--primary-2': '200 50 50',
	},
	yellow: {
		'--primary-1': '255 255 0',
		'--primary-2': '240 240 0',
	},
};
const root = document.querySelector(':root');
const link = document.querySelector('.link');
let keys_in = '';
let pi_game_active = false;
let pi_game_prompt = false;
let pi_game_counter = 0;
let link_text_old = link.innerHTML;
let link_text = link_text_old;
let click_order = '';
let vault_active = false;
let vault_in = '';
let found_match = false;
let password_length = 20;
let frog = false;
let showing_version = false;
let tutorial_event = false;
if (new Date().getDay == 20 && new Date().getMonth == 12) {
	change({
		'--primary-1': '255 255 255',
		'--primary-2': '255 255 255',
	});
	document.getElementById('info').innerHTML += '&nbsp;🎂';
} else {
	change(colours.cyan);
}
window.addEventListener('keydown', (event) => {
	let key = event.key.toLowerCase();
	if (
		alphabet
			.concat(numbers)
			.concat([' ', '.', 'backspace', 'enter'])
			.includes(key)
	) {
		keys_in += key;
		if (vault_active) {
			if (key == 'enter') {
				if (
					[
						'b',
						'back',
						'e',
						'end',
						'exit',
						'o',
						'out',
						'q',
						'quit',
						'wq',
						'x',
					].includes(vault_in)
				) {
					vault_active = false;
					link_text = link_text_old;
					link.innerHTML = link_text;
				} else {
					found_match = false;
					for (const [k, m] of Object.entries(messages)) {
						let vault_iter = vault_in.replace(/,/g, '').toLocaleLowerCase();
						let k_iter = k.replace(/_/g, ' ').toLocaleLowerCase();
						if (vault_iter == k_iter) {
							found_match = true;
							link.innerHTML = link_span(m);
						}
					}
					for (const [k, t] of Object.entries(events)) {
						if (!found_match) {
							let vault_iter = vault_in.replace(/,/g, '').toLocaleLowerCase();
							let k_iter = k.replace(/_/g, ' ').toLocaleLowerCase();
							if (vault_iter == k_iter) {
								found_match = true;
								t();
							}
						}
					}
					for (const [k, v] of Object.entries(redirects)) {
						if (!found_match) {
							let vault_iter = vault_in.replace(/,/g, '').toLocaleLowerCase();
							let k_iter = k.replace(/_/g, ' ').toLocaleLowerCase();
							if (vault_iter == k_iter) {
								found_match = true;
								link.innerHTML = link_span(v[0]);
								document.title = 'redirecting...';
								setTimeout(() => {
									window.location.href = v[1];
								}, 1000);
							}
						}
					}
					if (vault_in && !found_match) {
						link.innerHTML = 'invalid password';
					}
				}
				found_match = false;
				vault_in = '';
			} else {
				if (key == 'backspace') {
					vault_in = vault_in.slice(0, -1);
				} else if (vault_in.length < password_length) {
					if (!['.', ','].includes(key)) {
						vault_in += key;
					}
				}
				link.innerHTML = vault_in || link_text.match(/.{1,20}/g).join('<br>');
			}
		} else if (pi_game_prompt) {
			if (key == '.') {
				pi_game_active = true;
				pi_game_prompt = false;
				link.innerHTML = pi_game_counter;
			} else {
				pi_game_prompt = false;
				link.innerHTML = link_text;
			}
		} else if (pi_game_active) {
			link.innerHTML = pi_game_counter;
			if (key == pi_out[pi_game_counter]) {
				if (pi_game_counter == pi_out.length) {
					link.innerHTML = `really, ${pi_game_counter} digits?!`;
					pi_game_active = pi_game_prompt = false;
					pi_game_counter = 0;
				} else {
					pi_game_counter += 1;
					link.innerHTML = pi_game_counter;
				}
			} else if (numbers.includes(key)) {
				link.innerHTML = `you scored: ${pi_game_counter}`;
				pi_game_active = pi_game_prompt = false;
				pi_game_counter = 0;
			}
		} else {
			pi_game_active = pi_game_prompt = false;
			link.innerHTML = link_text;
			if (keys_in.endsWith('3')) {
				pi_game_prompt = true;
				link.innerHTML = 'press . to play';
			} else {
				for (const [k, v] of Object.entries(colours)) {
					if (keys_in.endsWith(k)) {
						change(v);
					}
				}
			}
		}
	}
});
const trophies_alert = () => {
	if (document.getElementById('trophies').innerText.length > 0) {
		link.innerHTML = 'These are your trophies! How many can you find?&nbsp;'
			+ '<span onclick="tutorial()">🏆</span>';
	}
};
const link_span_click = (n) => {
	click_order += n.toString();
	if (click_order.endsWith('3124')) {
		vault_active = true;
		click_order = '';
		link_text = 'welcome to the vault';
		link.innerHTML = link_text;
	}
};
link_span_click('');
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
					return alphabet[Math.floor(Math.random() * 26)];
				})
				.join('');
			if (iteration >= name_element.dataset.value.length) {
				clearInterval(interval);
			}
		}
		iteration += 1 / 3;
	}, 30);
};
