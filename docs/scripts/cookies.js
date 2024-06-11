const write_cookie = (name, value, days = 365) => {
	var expires = '';
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = '; expires=' + date.toUTCString();
	}
	document.cookie = name + '=' + (value || '') + expires + '; path=/';
};

const read_cookie = (name) => {
	var name_eq = name + '=';
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(name_eq) == 0) {
			return c.substring(name_eq.length, c.length);
		}
	}
	return null;
};

const delete_cookie = (name) => {
	document.cookie = name + '=; Max-Age=-99999999;';
};
