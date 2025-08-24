async function fetch_async(url) {
    console.log(`Sending request to ${url}`);
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                document.body.className = 'ok';
            } else if (this.response == null && this.status === 0) {
                document.body.className = 'error offline';
            } else {
                document.body.className = 'error';
            }
        }
    };
    request.open('GET', url, true);
    request.send(null);
}
