let i = 1n;
let x = 3n * 10n ** 1020n;
let pi = x;
while (x > 0) {
	x = (x * i) / ((i + 1n) * 4n);
	pi += x / (i + 2n);
	i += 2n;
}
const pi_out = (pi / 10n ** 20n).toString().slice(1);
for (const [name, link] of [
	["Discord", "https://discord.com/invite/kx5cVTWjEg"],
	["GitHub", "https://github.com/silvncr"],
	["Instagram", "https://instagram.com/silvncr"],
	["Spotify", "https://open.spotify.com/artist/6XO0vKydOw2Zt9kI36Xtj7"],
	["Twitch", "https://twitch.tv/silvncr"],
	["Twitter", "https://twitter.com/@silvncr"],
	["YouTube", "https://youtube.com/@silvncr"],
]) {
	document.querySelector(
		".screen-links"
	).innerHTML += `<a href="${link}" target="_blank" rel="noopener noreferrer" class="${name.toLowerCase()}"><em class="icofont-${name.toLowerCase()}"></em></a><!--${name}-->\n`;
}
let keys_in = "";
let pi_game_active = false;
let pi_game_prompt = false;
let pi_game_counter = 0;
const change = (vars) =>
	Object.entries(vars).forEach((v) => root.style.setProperty(v[0], v[1]));
const link_span = (text) => {
	return text
		.replace(/\[/g, `<span class="link-span">`)
		.replace(/\]/g, "</span>");
};
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const colours = {
	blue: {
		"--primary-1": "33 150 255",
		"--primary-2": "30 143 255",
	},
	cream: {
		"--primary-1": "245 222 179",
		"--primary-2": "255 255 160",
	},
	cyan: {
		"--primary-1": "0 255 255",
		"--primary-2": "0 240 240",
	},
	green: {
		"--primary-1": "0 255 0",
		"--primary-2": "8 230 30",
	},
	none: {
		"--primary-1": "auto",
		"--primary-2": "auto",
	},
	orange: {
		"--primary-1": "255 165 0",
		"--primary-2": "240 180 0",
	},
	pink: {
		"--primary-1": "255 108 203",
		"--primary-2": "255 182 193",
	},
	purple: {
		"--primary-1": "135 0 255",
		"--primary-2": "128 0 128",
	},
	red: {
		"--primary-1": "255 0 0",
		"--primary-2": "255 30 24",
	},
	yellow: {
		"--primary-1": "255 255 0",
		"--primary-2": "240 240 0",
	},
};
const root = document.querySelector(":root");
const link = document.querySelector(".link");
let link_text_old = link.innerHTML;
let link_text = link_text_old;
let click_order = "";
let vault_active = false;
let vault_in = "";
let found_match_iter = false;
change(colours.cyan);
window.addEventListener("keydown", (event) => {
	let key = event.key.toLowerCase();
	if (
		alphabet.concat(numbers).concat([" ", ".", "backspace", "enter"]).includes(key)
	) {
		keys_in += key;
		if (vault_active) {
			if (key == "enter") {
				if (["b", "back", "e", "end", "exit", "q", "quit"].includes(vault_in)) {
					vault_active = false;
					link_text = link_text_old;
					link.innerHTML = link_text;
				} else {
					found_match_iter = false;
					for (const [k, v] of Object.entries(messages)) {
						if (
							vault_in == k.replace(/_/g, " ").replace(/\$/g, ",").toLowerCase()
						) {
							link.innerHTML = link_span(v);
							found_match_iter = true;
						}
					}
					if (vault_in && !found_match_iter) {
						link.innerHTML = "invalid password";
					}
				}
				found_match_iter = false;
				vault_in = "";
			} else {
				if (key == "backspace") {
					vault_in = vault_in.slice(0, -1);
				} else if (vault_in.length < 20) {
					vault_in += key;
				}
				link.innerHTML = vault_in || link_text;
			}
		} else if (pi_game_prompt) {
			if (key == ".") {
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
					link.innerHTML = `really, ${pi_out.length} digits?!`;
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
			if (keys_in.endsWith("3")) {
				pi_game_prompt = true;
				link.innerHTML = "press . to play";
			} else {
				for (const [key, val] of Object.entries(colours)) {
					if (keys_in.endsWith(key)) {
						change(val);
					}
				}
			}
		}
	}
});
const link_span_click = (num) => {
	click_order += num.toString();
	if (click_order.endsWith("3124")) {
		vault_active = true;
		click_order = "";
		link_text = "welcome to the vault";
		link.innerHTML = link_text;
	}
};
link_span_click("");
window.onpointermove = (event) => {
	const { clientX, clientY } = event;
	document.getElementById("blob").animate(
		{
			left: `${clientX}px`,
			top: `${clientY}px`,
		},
		{
			duration: 3000,
			fill: "forwards",
		}
	);
};
let interval = null;
const name_element = document.querySelector(".name");
document.querySelector(".screen").onmouseenter = (event) => {
	let iteration = 0;
	clearInterval(interval);
	interval = setInterval(() => {
		name_element.innerText = name_element.innerText
			.split("")
			.map((letter, index) => {
				if (index < iteration) {
					return name_element.dataset.value[index];
				}
				return alphabet[Math.floor(Math.random() * 26)];
			})
			.join("");
		if (iteration >= name_element.dataset.value.length) {
			clearInterval(interval);
		}
		iteration += 1 / 3;
	}, 30);
};
