/*

WARNING: this file contains puzzle answers and other spoilers!

	Animations and effects are in `main.js`.

*/

const version = '0.1.0';

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
			frog = true;
			trophy('🐸');
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
			link.innerHTML = '* your world has expanded... *';
			trophy('🔓');
			password_length = 21;
		} else {
			link.innerHTML = "that's enough for now";
		}
	},
	version: () => {
		if (!showing_version) {
			link.innerHTML = 'okay, fine';
			document.getElementById('version').innerHTML = `&nbsp;-&nbsp;v${version}`;
			showing_version = true;
		} else {
			link.innerHTML = 'never mind';
			document.getElementById('version').innerHTML = '';
			showing_version = false;
		}
	},
};

const trophies_list = [
	'🏆',
	'🔑',
	'🔓',
	'🐸',
	'🥧',
	'🧩',
	'🙌',
	'🎈',
	'🏓',
	'✨',
	'🎀',
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
	if (trophies_list.includes(t) && !obtained.includes(t)) {
		obtained.push(t);
	}
	refresh_trophies();
};

const reset_trophies = () => {
	obtained = [];
	refresh_trophies();
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

document.addEventListener('readystatechange', () => {
	if (document.readyState == 'complete') {
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
