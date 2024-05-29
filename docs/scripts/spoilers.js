/*

WARNING: this file contains puzzle answers and other spoilers!

	Check `main.js` to see what files are safe to view.

*/

const messages = {
	10000: 'okay, ultimate supreme leader',
	13: '[eleven plus two] equals [twelve plus one]',
	1700400840: "y'all are stalkers",
	348: 'when in rome, do as the romans do',
	42: 'bro found the answer',
	75: 'so close',
	anagram: '[a rag man]',
	armaldo: 'almost there',
	armload: 'wrong way, go back',
	asdfghjkl: 'that might work on another vault, but not this one!',
	auctioned: '[n]o [c][o][s]t t[o] [g][r][e][a]t',
	cccxlviii: "it's almost as if it means something...",
	geocoronas: 'wrong way, go back',
	glens_falls_open: 'but only sometimes',
	hamiltonian_paths: 'do u know da wae?',
	hello_world: '* the code greets you back *',
	helloz: '* the vault greets you back *',
	hint: 'wow much hint',
	hiro_shimono: 'how many [dice] do you own?',
	invalid_password: 'no u',
	is_this_world_mine: 'creative question award',
	kaito_momota: '[lumi]n[ary] [of] [the] [st]a[rs]!',
	kokichi_oma: "d'y'know what they say about his voice?",
	london_underground: 'mind the gap',
	maximum_length_exceeded: 'but only sometimes',
	memory: "it's almost as if it means something...",
	no_u: 'no u',
	o_t_t_t: '[another]',
	on_earth: '[not anymore]',
	only_if_you_want_it_to_be: 'coming soon to a theater near you',
	pause: 'press any key to resume',
	phosphatidylethanolamines: "you're not supposed to be here",
	ptfu1yi35: 'i am in [the classroom]',
	schoolmaster: 'life is about [cautioned] [education]',
	silvncr: '[the eyes];<br>[they see] everything',
	this_world_is_mine: 'horse a',
	thpirseswsorldtoisplmaiyne: 'maybe you should try again',
	tony_manero: 'time for some additional [dancing]',
	twins_b: "it's almost as if there's an exclusive song...",
	uc207pr4f57t9: "bro you're actually cheating",
	ultimate_survivor: 'wrong way, go back',
	victoria: "it's almost as if it means something...",
	void: 'it grows...',
	w: 'did you find the vim reference?',
	welcome_to_the_vault: '* the vault welcomes you back *',
	welcome_to_the_void: 'it grows...',
	wrong_way_go_back: 'no u',
	wrong_your_password_is: "bro you're actually cheating",
	you_are_cheating: 'no u',
	you_are_invalid: 'no u',
	you_are_not_supposed_to_be_here: 'no u',
	you_are_not_supposed_to_know_this: 'no u',
	you_are_the_mastermind: "you're not",
	you_are_wrong: 'no u',
	your_password_is_invalid: 'no u',
	your_password_is_wrong: 'no u',
};

const redirects = {
	rickroll: ['never gonna give you up...', 'https://youtu.be/dQw4w9WgXcQ'],
};

const events = {
	suboptimal: () => {
		if (!frog) {
			link.innerHTML = 'take care of him';
			trophy('🐸');
			frog = true;
			download_file(
				'258 - Mudkip - C6D800000000.pk8',
				'258 - Mudkip - C6D800000000.pk8'
			);
		} else {
			link.innerHTML = 'did you lose him already?!';
			setTimeout(() => {
				window.location.href = 'https://www.youtube.com/watch?v=6n3pFFPSlW4';
			}, 1000);
		}
	},
	twenty_one: () => {
		if (password_length == 20) {
			link.innerHTML = 'your world has expanded...';
			trophy('🔓');
			password_length = 21;
		} else {
			link.innerHTML = "that's enough for now";
		}
	},
	version: () => {
		if (!showing_version) {
			link.innerHTML = 'okay, fine';
			document.getElementById(
				'version'
			).innerHTML = `-&nbsp;v${trophies_list.length}`;
			showing_version = true;
		} else {
			link.innerHTML = 'never mind';
			document.getElementById('version').innerHTML = '';
			showing_version = false;
		}
	},
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

const trophies_list = [
	'🍰',
	//'🎂',
	'🥧',
	'🏆',
	//'🔑',
	'🔓',
	'🐸',
	//'🧩',
	//'🏁',
	//'🙌',
	//'🎈',
	//'🏓',
	//'✨',
	//'🎀',
];
let obtained = read_cookie('trophies')
	? read_cookie('trophies').split(',')
	: [];

const refresh_trophies = () => {
	document.getElementById('trophies').innerHTML = trophies_list
		.filter((_t) => obtained.includes(_t))
		.map((_t) => `<span class="trophy" onclick="trophies_alert()">${_t}</span>`)
		.join('');
	write_cookie('trophies', obtained.join(','));
};

const trophy = (t) => {
	if (!obtained.includes(t)) {
		obtained.push(t);
		if (!trophies_list.includes(t)) {
			console.log('invalid trophy:', t);
		}
	}
	refresh_trophies();
};

const reset_trophies = () => {
	obtained = [];
	refresh_trophies();
	location.reload();
};

const trophies_alert = () => {
	if (document.getElementById('trophies').innerText.length > 0) {
		link.innerHTML =
			'These are your trophies! How many can you find?' +
			(!tutorial_event
				? '&nbsp;<span class="trophy" onclick="tutorial()">🏆</span>'
				: '');
	}
};

const tutorial = () => {
	if (!tutorial_event) {
		link.innerHTML = 'you can have that one for free!';
		trophy('🏆');
		tutorial_event = true;
	} else {
		link.innerHTML = 'you already collected that trophy!';
	}
};

const call_pi = () => {
	trophy('🥧');
};

const cake = () => {
	link.innerHTML = link_span('ha[ppy] b[i]r[th]day!');
	trophy('🍰');
	document.getElementById('white').innerHTML = '';
};

document.addEventListener('readystatechange', () => {
	if (document.readyState == 'complete') {
		if (new Date().getDate() == 20 && new Date().getMonth() == 12) {
			change({
				'--primary-1': '255 255 255',
				'--primary-2': '255 255 255',
			});
			if (!obtained.includes('🍰')) {
				document.getElementById('white').innerHTML =
					'<span class="trophy" onclick="cake()">🍰</span>';
			}
		} else {
			change(colours.cyan);
		}
		refresh_trophies();
		if (obtained.includes('🏆')) {
			tutorial_event = true;
		}
		if (obtained.includes('🔓')) {
			password_length = 21;
		}
		if (obtained.includes('🐸')) {
			frog = true;
		}
	}
});

let i = 1n;
let x = 3n * 10n ** 1020n;
let pi_calc = x;
while (x > 0) {
	x = (x * i) / ((i + 1n) * 4n);
	pi_calc += x / (i + 2n);
	i += 2n;
}
const pi_out = (pi_calc / 10n ** 20n).toString().slice(1);

const change = (vars) => {
	Object.entries(vars).forEach((v) => root.style.setProperty(v[0], v[1]));
};

const download_file = (url, filename) => {
	let a = document.createElement('a');
	a.href = `vendor/${url}`;
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
						if (!found_match) {
							let vault_iter = vault_in.replace(/,/g, '').toLocaleLowerCase();
							let k_iter = k.replace(/_/g, ' ').toLocaleLowerCase();
							if (vault_iter == k_iter) {
								found_match = true;
								link.innerHTML = link_span(m);
							}
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
					call_pi();
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

/*

You're *definitely* NOT supposed to be here...

	Just please don't spoil things for everyone else, okay?

*/
