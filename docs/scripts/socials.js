const links = [
	['Geometry Dash', 'https://gdbrowser.com/u/TurnipGuy30', 'https://upload.wikimedia.org/wikipedia/en/3/35/Geometry_Dash_Logo.PNG'],
	['GitHub', 'https://github.com/TurnipGuy30', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'],
	['Khan Academy', 'https://www.khanacademy.org/profile/TurnipGuy30', 'https://seeklogo.com/images/K/khan-academy-logo-EFA43B86E0-seeklogo.com.png'],
	['Osu!', 'https://osu.ppy.sh/users/27934898', 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Osulogo.png'],
	['Reddit', 'https://www.reddit.com/user/TurnipGuy30', 'https://www.redditinc.com/assets/images/site/reddit-logo.png'],
	['Spotify', 'https://open.spotify.com/user/31hjsk6wmtjbwgdup3t4wmz7f7hy', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/1024px-Spotify_App_Logo.svg.png'],
	['StackOverflow', 'https://stackoverflow.com/users/16210754/turnipguy30', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png'],
	['Steam', 'https://steamcommunity.com/profiles/76561199190287286', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png'],
	['TrueAchievements', 'https://www.trueachievements.com/gamer/TurnipGuy30', 'https://static.wikia.nocookie.net/xbox/images/6/67/TrueAchevements_Logo.png/revision/latest?cb=20220215011025'],
	['Twitch', 'https://twitch.tv/turnipguy30', 'https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/twitch-512.png'],
	['YouTube', 'https://www.youtube.com/channel/UCrEgyQT9a9UkW0Xg6t3em6g', 'https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png']
].sort()
window.onload = function() {
	document.getElementById('box').innerHTML = '<br>\n'
	for (let i = 0; i < links.length; i++) {
		console.log(links[i].length)
		if (links[i].length == 3) {
			document.getElementById('box').innerHTML += `<a href='${links[i][1]}' target='_blank' rel='noopener noreferrer' title='${links[i][0]}'><img src='${links[i][2]}' alt='${links[i][0]}' width='60' height='60'></a><!--${links[i][0]}-->\n`
		}
	}
}
