const json = {
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
			"name": "nodejs",
			"link": "https://nodejs.org"
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
			"name": "yaml",
			"link": "https://yaml.org/",
			"image": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Official_YAML_Logo.svg"
		}
	]
};
window.onload = function () {
	for (let i = 0; i < json.lang.length; i++) {
		if (json.lang[i].image) {
			document.getElementById("pics").innerHTML += `<a href="${json.lang[i].link}" target="_blank" rel="noopener noreferrer"><img src="${json.lang[i].image}" alt="${json.lang[i].name}" width="40" height="40"></a><!--${json.lang[i].name}-->\n`;
		} else {
			document.getElementById("pics").innerHTML += `<a href="${json.lang[i].link}" target="_blank" rel="noopener noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${json.lang[i].name}/${json.lang[i].name}-original.svg" alt="${json.lang[i].name}" width="40" height="40"></a><!--${json.lang[i].name}-->\n`;
		}
	}
}
var m10 = function () {
	alert('Pokemon PythonRed Mystery Gift #10: "TITLE"');
}
var m12 = function () {
	alert('Pokemon PythonRed Mystery Gift #12: "CORRECT"');
}
