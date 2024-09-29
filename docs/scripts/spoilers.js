/*

WARNING: this file contains puzzle answers and other spoilers!

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
	no_u: '* no u',
	o_t_t_t: '[another]',
	on_earth: '[not anymore]',
	only_if_you_want_it_to_be: 'coming soon to a theater near you',
	pause: 'press any key to resume',
	phosphatidylethanolamines: "you're not supposed to be here",
	ptfu1yi35: 'i am in [the classroom]',
	schoolmaster: 'life is about [cautioned] [education]',
	silvncr: '[the eyes];<br>[they see] everything',
	talking_to_myself: '...',
	talking_to_yourself: '...',
	this_world_is_mine: 'horse a',
	thpirseswsorldtoisplmaiyne: 'maybe you should try again',
	tony_manero: 'time for some additional [dancing]',
	true_unreal_lies: 'but what did they lie about?',
	twins_b: "it's almost as if there's an exclusive song...",
	uc207pr4f57t9: "bro you're actually cheating",
	ultimate_survivor: 'wrong way, go back',
	unreal_lies: "they don't mean anything until they're true",
	victoria: "it's almost as if it means something...",
	void: 'it grows...',
	welcome_to_the_vault: '* the vault welcomes you back *',
	welcome_to_the_void: 'it grows...',
	will_anyone_solve_this: 'probably not',
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
	lies: [
		'lies are just alternate truths, until proven otherwise',
		'./pages/realeyes.html',
	],
};

const events = {
	forty_five_over_fifty: () => {
		if (!forty_five) {
			link.innerHTML = 'the journey begins';
			trophy('🧩');
			forty_five = true;
		} else {
			link.innerHTML = link_span('[n]e[ver] for[g]et t[he] [past]');
		}
	},
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
			document.getElementById('version').innerHTML = `-&nbsp;v${
				Object.keys(trophies_list).filter((_t) => trophies_list[_t]).length
			}`;
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

const trophies_list = {
	'✨': null,
	'🍰': 'You visited this page on my birthday! 🎉',
	'🎀': null,
	'🎂': null,
	'🎃': null,
	'🎈': null,
	'🎨': 'You found every colour theme! Which one was your favourite?',
	'🎭': 'You found a "random" page! I wonder which one it was...',
	'🏁': null,
	'🏆': 'You completed the tutorial!',
	'🏓': null,
	'🐸': "How's my li'l guy doing?",
	'💊': null,
	'💎': null,
	'💸': null,
	'🔓': 'You made something happen! What could it be?',
	'🥧': 'You maxed out the Pi Game! Why!?',
	'🧩': 'You started on your journey... where will it take you?',
	'🙌': null,
};
let obtained = read_cookie('trophies')
	? read_cookie('trophies').split(',')
	: [];

const update_trophies = () => {
	let trophies = Object.keys(trophies_list)
		.filter((_t) => obtained.includes(_t) && trophies_list[_t])
		.map(
			(_t) =>
				`<span class="trophy" title="${trophies_list[_t]}" ` +
				`onclick="trophies_alert()">${_t}</span>`
		);

	let chunks = [];
	for (let i = 0; i < trophies.length; i++) {
		let chunk_index = Math.floor(
			i /
				(obtained.length <= 4
					? 12
					: trophies.length / 2 <= 12
					? Math.ceil(trophies.length / 2)
					: 12)
		);
		chunks[chunk_index] = (chunks[chunk_index] || '') + trophies[i];
	}

	let result = chunks
		.map((chunk) => {
			let div = document.createElement('div');
			div.innerHTML = chunk;
			return div;
		})
		.reverse();

	document.getElementById('trophies').innerHTML = '';
	result.forEach((div) => document.getElementById('trophies').appendChild(div));

	write_cookie('trophies', obtained.join(','));
};

const trophy = (t) => {
	if (!obtained.includes(t)) {
		if (Object.keys(trophies_list).includes(t)) {
			obtained.push(t);
		} else {
			console.log('invalid trophy:', t);
		}
	}
	update_trophies();
};

const reset_trophies = () => {
	obtained = [];
	update_trophies();
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
		tutorial_event = true;
		trophy('🏆');
		trophies_alert();
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
		update_trophies();
		if (obtained.includes('🎨')) {
			all_colours_found = true;
		}
		if (obtained.includes('🎭')) {
			any_random = true;
		}
		if (obtained.includes('🏆')) {
			tutorial_event = true;
		}
		if (obtained.includes('🐸')) {
			frog = true;
		}
		if (obtained.includes('🔓')) {
			password_length = 21;
		}
		if (obtained.includes('🧩')) {
			forty_five = true;
		}
	}
});

let i = 1n;
let x = 3n * 10n ** 120n;
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

let pi_game_prompt = false;
let pi_game_active = false;
let pi_game_counter = 0;

let link_text_old = link.innerHTML;
let link_text = link_text_old;

let click_order = '';
let vault_active = false;

let processing = false;

let keys_in = '';
let vault_in = '';
let found_match = false;
let password_length = 20;

let tutorial_event = false;
let any_random = false;
let forty_five = false;
let frog = false;
let showing_version = false;

let colours_found = [];
let all_colours_found = false;

window.addEventListener('keydown', (event) => {
	let key = event.key.toLowerCase();
	if (
		alphabet
			.concat(numbers)
			.concat([' ', '.', 'backspace', 'enter'])
			.includes(key) &&
		!processing
	) {
		processing = true;
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
							let vault_iter = vault_in
								.replace(/,/g, '')
								.toLocaleLowerCase()
								.trim();
							let k_iter = k.replace(/_/g, ' ').toLocaleLowerCase().trim();
							if (vault_iter == k_iter) {
								found_match = true;
								link.innerHTML = link_span(m);
							}
						}
					}
					for (const [k, t] of Object.entries(events)) {
						if (!found_match) {
							let vault_iter = vault_in
								.replace(/,/g, '')
								.toLocaleLowerCase()
								.trim();
							let k_iter = k.replace(/_/g, ' ').toLocaleLowerCase().trim();
							if (vault_iter == k_iter) {
								found_match = true;
								t();
							}
						}
					}
					for (const [k, v] of Object.entries(redirects)) {
						if (!found_match) {
							let vault_iter = vault_in
								.replace(/,/g, '')
								.toLocaleLowerCase()
								.trim();
							let k_iter = k.replace(/_/g, ' ').toLocaleLowerCase().trim();
							if (vault_iter == k_iter) {
								found_match = true;
								link.innerHTML = link_span(v[0]);
								document.title = '(redirecting)';
								setTimeout(() => {
									window.location.href = v[1];
								}, 3000);
							}
						}
					}
					if (vault_in && !found_match) {
						forward_url = `https://silvncr.github.io/random/${vault_in
							.replace(/ /g, '-')
							.replace(/,/g, '')
							.toLocaleLowerCase()
							.trim()}`;
							response = fetch_async(forward_url);
							if (response && typeof response == 'string') {
							if (
								response.contains(
									'<h1><a href="https://silvncr.github.io/random/">random</a></h1>'
								)
							) {
								window.open(forward_url, '_blank').focus();
								if (!found_match) {
									link.innerHTML = 'you found a random page!';
								}
								found_match = true;
								if (!any_random) {
									any_random = true;
									trophy('🎭');
								}
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
					if (!['.', ','].includes(key) && (vault_in + key).trim()) {
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
						if (!colours_found.includes(k) && !all_colours_found) {
							colours_found.push(k);
							if (colours_found.length == Object.keys(colours).length) {
								trophy('🎨');
								all_colours_found = true;
							}
						}
						break;
					}
				}
			}
		}
		processing = false;
	}
});

/*

You're definitely NOT supposed to be here...

	Just please don't spoil things for anyone else, okay?

*/
