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
	// [name, url, icon file]
	['Bluesky', 'https://bsky.app/profile/silvncr.github.io', 'bluesky.svg'],
	['Discord', 'https://discord.com/invite/wkcJzKDUCU', null],
	['GitHub', 'https://github.com/silvncr', 'github-mark-white.svg'],
	['itch.io', 'https://silvncr.itch.io/', 'itchio-textless-white.svg'],
	['MuseScore', 'https://musescore.com/user/38096226', 'musescore-logo.png'],
	['osu!', 'https://osu.ppy.sh/users/27934898', 'osu-logo.png'],
	//['Spotify', 'https://open.spotify.com/artist/0c6XPiWIn7uYlWB9B6puvo', null],
	['Steam', 'https://steamcommunity.com/id/silvncr', null],
	['Twitch', 'https://twitch.tv/silvncr', null],
	['YouTube', 'https://youtube.com/@silvncr', null],
]
	.map(
		([name, link, file]) =>
			file
				? `<a href="${link}" target="_blank" rel="noopener noreferrer" ` +
				`title="${name}" class="${name.toLowerCase()}">` +
				`<img class="icon-img" src="images/${file}"></a><!--${name}-->`
				: `<a href="${link}" target="_blank" rel="noopener noreferrer" ` +
				`title="${name}" class="${name.toLowerCase()}">` +
				`<em class="icofont-${name.toLowerCase()}"></em></a><!--${name}-->`
	)
	.join('\n');

/*
const links = [
	// [name, url, icon file, row number]
];

function linkHTML([name, link, file]) {
	return file
		? `<a href="${link}" target="_blank" rel="noopener noreferrer" ` +
			`title="${name}" class="${name.toLowerCase()}">` +
			`<img class="icon-img" src="images/${file}"></a><!--${name}-->`
		: `<a href="${link}" target="_blank" rel="noopener noreferrer" ` +
			`title="${name}" class="${name.toLowerCase()}">` +
			`<em class="icofont-${name.toLowerCase()}"></em></a><!--${name}-->`;
}

[1, 2].forEach(row => {
	const container = document.querySelector(`.screen-links-row${row}`);
	container.innerHTML = links
		.filter(link => link[3] === row)
		.map(link => linkHTML(link))
		.join('\n');
});
*/
