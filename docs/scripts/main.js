window.onload = () => {
	let i = 1n,
		x = 3n * 10n ** 1020n,
		pi = x;
	while (x > 0) {
		x = (x * i) / ((i + 1n) * 4n),
			pi += x / (i + 2n),
			i += 2n;
	};
	pi_out = (pi / 10n ** 20n).toString().slice(1);
	for (const [name, link] of [
		["Discord", "https://discord.com/invite/kx5cVTWjEg"],
		["GitHub", "https://github.com/silvncr"],
		["Instagram", "https://instagram.com/silvncr"],
		["Spotify", "https://open.spotify.com/artist/6XO0vKydOw2Zt9kI36Xtj7"],
		["Twitch", "https://twitch.tv/silvncr"],
		["YouTube", "https://youtube.com/@silvncr"],
	]) {
		document.querySelector(".screen-links").innerHTML += `<a href="${link}" class="${name.toLowerCase()}"><em class="icofont-${name.toLowerCase()}"></em></a><!--${name}-->\n`;
	};
	let keys_in = "",
		pi_game_active = pi_game_prompt = false,
		pi_game_counter = 0;
	const change = (vars) => Object.entries(vars).forEach((v) => root.style.setProperty(v[0], v[1])),
		colours = {
			blue: {
				"--primary-1": "33 150 255",
				"--primary-2": "30 143 255",
			},
			cream: {
				"--primary-1": "245 222 179",
				"--primary-2": "255 255 160",
			},
			green: {
				"--primary-1": "0 255 0",
				"--primary-2": "8 230 30",
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
		},
		root = document.querySelector(":root"),
		link = document.querySelector(".link"),
		link_text = link.innerHTML;
	change(colours.blue);
	window.addEventListener("keypress", function (event) {
		key = event.key.toLowerCase(),
			keys_in += key;
		if (pi_game_prompt) {
			if (key == '.') {
				pi_game_active = true,
					pi_game_prompt = false;
				link.innerHTML = pi_game_counter;
			} else {
				pi_game_prompt = false,
					link.innerHTML = link_text;
			};
		} else if (pi_game_active) {
			link.innerHTML = pi_game_counter;
			if (key == pi_out[pi_game_counter]) {
				pi_game_counter += 1;
				link.innerHTML = pi_game_counter;
			} else if ("0123456789".includes(key)) {
				link.innerHTML = `you scored: ${pi_game_counter}`,
					pi_game_active = pi_game_prompt = false,
					pi_game_counter = 0;
			};
		} else {
			pi_game_active = pi_game_prompt = false,
				link.innerHTML = link_text;
			if (keys_in.endsWith("3")) {
				pi_game_prompt = true,
					link.innerHTML = "press . to play";
			} else {
				for (const [key, val] of Object.entries(colours)) {
					if (keys_in.endsWith(key)) {
						change(val);
					};
				};
			};
		};
	});
	window.onpointermove = (event) => {
		const { clientX, clientY } = event;
		document.getElementById("blob").animate(
			{
				left: `${clientX}px`,
				top: `${clientY}px`,
			},
			{ duration: 3000, fill: "forwards" }
		);
	};
	let interval = null;
	const name = document.querySelector(".name");
	document.querySelector(".screen").onmouseenter = (event) => {
		let iteration = 0;
		clearInterval(interval);
		interval = setInterval(() => {
			name.innerText = name.innerText
				.split("")
				.map((letter, index) => {
					if (index < iteration) {
						return name.dataset.value[index];
					};
					return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];
				})
				.join("");
			if (iteration >= name.dataset.value.length) {
				clearInterval(interval);
			};
			iteration += 1 / 3;
		}, 30);
	};
};
