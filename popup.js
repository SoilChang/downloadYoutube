console.log("Donwdload youtube music activated");


userUrl = 'https://www.onlinevideoconverter.com/video-converter?ref=addon&version=121'

function convert(url) {
	const onlinevideoconverterpath = userUrl + "&url=" + encodeURIComponent(url);
	window.open(onlinevideoconverterpath + "&format=" + 'mp3');
}

function download() {
	chrome.tabs.query({
		'active': true,
		'lastFocusedWindow': true
	}, function (tabs) {
		var url = tabs[0].url;
		convert(url);
	});
}

document.querySelector('#download-button').addEventListener('click', download);