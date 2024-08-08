console.log(
	`Be warned that 'spoilers.js' and the 'pages/' folder contain spoilers for puzzles and other content.

All other files are safe to view (for animations, etc).`
);

document.getElementById('year').innerHTML = `${new Date().getFullYear()}`;
document.querySelector('.screen-links').innerHTML += [
	['Discord', 'https://discord.com/invite/kx5cVTWjEg'],
	['GitHub', 'https://github.com/silvncr'],
	['Twitch', 'https://twitch.tv/silvncr'],
	['YouTube', 'https://youtube.com/@silvncr'],
]
	.map(
		([name, link]) =>
			`<a href="${link}" target="_blank" rel="noopener noreferrer" ` +
			`class="${name.toLowerCase()}"><em class="icofont-${name.toLowerCase()}">` +
			`</em></a><!--${name}-->`
	)
	.join('\n');
