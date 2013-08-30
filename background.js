chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('main.html', {
		'bounds': {
			'width': 768,
			'height': 768
		}
		//'permissions':[what? what? what?]
	});
});