let xhr = new XMLHttpRequest();
xhr.open('GET', './data.json');
xhr.send();

xhr.onload = function () {
	if (xhr.status != 200) {
		alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
	} else {
		console.log(JSON.parse(xhr.responseText));
	}
};