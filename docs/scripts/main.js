console.log(
	[
		`Hi, curious traveller!`,
		`Be warned that 'spoilers.js' and the 'pages/' folder contain spoilers ` +
			`for puzzles and other content.`,
		`All other files are safe to view (for animations, etc).`,
		`Some HTTP requests are required for the site to function as intended. ` +
			`For transparency, a console log is made every time my code sends a request.`,
	].join('\n\n')
);

document.getElementById('year').innerHTML = `2021-${new Date().getFullYear()}`;
document.querySelector('.screen-links').innerHTML += [
	['Discord', 'https://discord.com/invite/kx5cVTWjEg'],
	['GitHub', 'https://github.com/silvncr'],
	['Spotify', 'https://open.spotify.com/artist/0c6XPiWIn7uYlWB9B6puvo'],
	['Steam', 'https://steamcommunity.com/id/silvncr'],
	['Twitch', 'https://twitch.tv/silvncr'],
	['YouTube', 'https://youtube.com/@silvncr'],
]
	.map(
		([name, link]) =>
			`<a href="${link}" target="_blank" rel="noopener noreferrer" ` +
			`title="${name}" class="${name.toLowerCase()}">` +
			`<em class="icofont-${name.toLowerCase()}"></em></a><!--${name}-->`
	)
	.join('\n');
