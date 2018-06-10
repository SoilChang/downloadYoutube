console.log("Donwdload youtube music activated");


userUrl = 'https://www.onlinevideoconverter.com/video-converter?ref=addon&version=121'

function convertUrl(url) {
	const onlinevideoconverterpath = userUrl + "&url=" + encodeURIComponent(url);
	return onlinevideoconverterpath + "&format=" + 'mp3';
}

function download() {
	chrome.tabs.query({
		'active': true,
		'lastFocusedWindow': true
	}, function (tabs) {
		var url = tabs[0].url;
		window.open(convertUrl(url));
		// document.querySelector('#iframe-wrapper').innerHTML = `<iframe src="${convertUrl(url)}" style="width: 100%;height: 390px;" id="myiframe"></iframe>`;
		// document.querySelector("#myiframe").addEventListener("load", injectJS);
	});
}

function injectJS() {
	var iFrameHead = window.frames["myiframe"].document.getElementsByTagName("head")[0];
	var myscript = document.createElement('script');
	myscript.type = 'text/javascript';
	myscript.src = 'iframe.js'; // replace this with your SCRIPT
	iFrameHead.appendChild(myscript);
}



document.querySelector('#download-button').addEventListener('click', download);