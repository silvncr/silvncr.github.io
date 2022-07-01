const json = {
	"badge": [
		{
			"name": "views",
			"link": "https://github.com/TurnipGuy30",
			"image": "https://gpvc.arturio.dev/TurnipGuy30"
		},
		{
			"name": "stars",
			"link": "https://github.com/TurnipGuy30/?tab=repositories",
			"image": "https://img.shields.io/github/stars/TurnipGuy30"
		},
		{
			"name": "wakatime",
			"link": "https://wakatime.com/@580a86f3-d10f-4415-ac5c-b9a0b252a2fb",
			"image": "https://wakatime.com/badge/user/580a86f3-d10f-4415-ac5c-b9a0b252a2fb.svg"
		}
	],
	"card": [
		{
			"owner": "Pokemon-PythonRed",
			"repo": "Pokemon-PythonRed"
		},
		{
			"owner": "PradoLang",
			"repo": "Prado"
		},
		{
			"repo": "Helloz"
		},
		{
			"repo": "School"
		},
		{
			"repo": "Celebi"
		},
	],
	"lang": [
		{
			"name": "angularjs",
			"link": "https://angular.io"
		},
		{
			"name": "bootstrap",
			"link": "https://getbootstrap.com"
		},
		{
			"name": "bash",
			"link": "https://www.gnu.org/software/bash/"
		},
		{
			"name": "brainfuck",
			"link": "https://en.wikipedia.org/wiki/Brainfuck",
			"image": "https://res.cloudinary.com/cagatayc/image/upload/c_scale,w_500/v1493914344/bf.png"
		},
		{
			"name": "c",
			"link": "https://www.cprogramming.com/"
		},
		{
			"name": "chrome",
			"link": "https://www.google.com/intl/en_au/chrome/"
		},
		{
			"name": "csharp",
			"link": "https://www.w3schools.com/cs/"
		},
		{
			"name": "css3",
			"link": "https://www.w3schools.com/css/"
		},
		{
			"name": "dot-net",
			"link": "https://dotnet.microsoft.com/"
		},
		{
			"name": "git",
			"link": "https://git-scm.com/"
		},
		{
			"name": "github",
			"link": "https://github.com/"
		},
		{
			"name": "html5",
			"link": "https://www.w3.org/html/"
		},
		{
			"name": "javascript",
			"link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
		},
		{
			"name": "json",
			"link": "https://www.json.org/json-en.html",
			"image": "https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg"
		},
		{
			"name": "jupyter",
			"link": "https://jupyter.org/"
		},
		{
			"name": "markdown",
			"link": "https://www.markdownguide.org/"
		},
		{
			"name": "nodejs",
			"link": "https://nodejs.org"
		},
		{
			"name": "pandas",
			"link": "https://pandas.pydata.org/"
		},
		{
			"name": "prado",
			"link": "https://github.com/PradoLang/Prado",
			"image": "https://raw.githubusercontent.com/PradoLang/Prado/main/logo.png"
		},
		{
			"name": "python",
			"link": "https://www.python.org"
		},
		{
			"name": "sass",
			"link": "https://sass-lang.com"
		},
		{
			"name": "sqlite",
			"link": "https://www.sqlite.org/"
		},
		{
			"name": "swift",
			"link": "https://developer.apple.com/swift/"
		},
		{
			"name": "vscode",
			"link": "https://code.visualstudio.com/"
		},
		{
			"name": "yaml",
			"link": "https://yaml.org/",
			"image": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Official_YAML_Logo.svg"
		}
	],
	"nav": [
		{
			"link": "https://github.com/TurnipGuy30",
			"label": "GitHub"
		},
		{
			"link": "https://www.khanacademy.org/profile/TurnipGuy30",
			"label": "Khan Academy"
		},
		{
			"link": "https://stackexchange.com/users/21928188/turnipguy30",
			"label": "StackExchange"
		},
		{
			"link": "https://gdbrowser.com/u/TurnipGuy30",
			"label": "Geometry Dash"
		},
		{
			"link": "https://turnipguy30.github.io/DT",
			"label": "My Projects"
		}
	],
	"stat": [
		{
			"name": "trophies",
			"image": "https://github-profile-trophy.vercel.app/?username=TurnipGuy30&theme=dracula&no-frame=true&column=-1"
		},
		{
			"name": "languages",
			"image": "https://github-readme-stats.vercel.app/api/top-langs?username=turnipguy30&show_icons=true&locale=en&layout=compact&theme=tokyonight&langs_count=10&custom_title=Most%20Used%20Languages%20%28Complete%29"
		}
	]
}
window.onload = function () {
	for (let i = 0; i < json.nav.length; i++) {
		document.getElementById("nav").innerHTML += `<li><a href="${json.nav[i].link}" target="_blank" rel="noopener noreferrer"><span>${json.nav[i].label}</span></a></li>`
	}
	for (let i = 0; i < json.badge.length; i++) {
		document.getElementById("badge").innerHTML += `<a href="${json.badge[i].link}" target="_blank" rel="noopener noreferrer"><img src="${json.badge[i].image}" alt="${json.badge[i].name}"></a>\n`
	}
	for (let i = 0; i < json.lang.length; i++) {
		if (json.lang[i].image) {
			document.getElementById("lang").innerHTML += `<a href="${json.lang[i].link}" target="_blank" rel="noopener noreferrer"><img src="${json.lang[i].image}" alt="${json.lang[i].name}" width="40" height="40"></a><!--${json.lang[i].name}-->\n`
		} else {
			document.getElementById("lang").innerHTML += `<a href="${json.lang[i].link}" target="_blank" rel="noopener noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${json.lang[i].name}/${json.lang[i].name}-original.svg" alt="${json.lang[i].name}" width="40" height="40"></a><!--${json.lang[i].name}-->\n`
		}
	}
	for (let i = 0; i < json.stat.length; i++) {
		document.getElementById("stat").innerHTML += `<img id="${json.stat[i].name}" src="${json.stat[i].image}" alt="${json.stat[i].name}">\n`
	}
	for (let i = 0; i < json.card.length; i++) {
		if (json.card[i].owner) {
			if (json.card[i].owner === json.card[i].repo) {
				document.getElementById("card").innerHTML += `<a href="https://github.com/${json.card[i].owner}/${json.card[i].repo}" target="_blank" rel="noopener noreferrer"><img alt="${json.card[i].owner}/${json.card[i].repo}" src="https://github-readme-stats.vercel.app/api/pin/?username=${json.card[i].owner}&repo=${json.card[i].repo}&theme=tokyonight&show_owner=false" width="400" height="150"></a>\n`
			} else {
				document.getElementById("card").innerHTML += `<a href="https://github.com/${json.card[i].owner}/${json.card[i].repo}" target="_blank" rel="noopener noreferrer"><img alt="${json.card[i].owner}/${json.card[i].repo}" src="https://github-readme-stats.vercel.app/api/pin/?username=${json.card[i].owner}&repo=${json.card[i].repo}&theme=tokyonight&show_owner=true" width="400" height="150"></a>\n`
			}
		} else {
			document.getElementById("card").innerHTML += `<a href="https://github.com/TurnipGuy30/${json.card[i].repo}" target="_blank" rel="noopener noreferrer"><img alt="TurnipGuy30/${json.card[i].repo}" src="https://github-readme-stats.vercel.app/api/pin/?username=TurnipGuy30&repo=${json.card[i].repo}&theme=tokyonight&show_owner=false" width="400" height="150"></a>\n`
		}
	}
}
