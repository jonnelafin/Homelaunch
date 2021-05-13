export function cleanurl(url){
	if(url == undefined){
		return "undefined";
	}
	if(isJS(url)){
		return url;
	}
	return "https://" + url.replace("https://", "").replace("http://","");
}
export function getRoot(url){
	if(url == undefined){
		return "undefined";
	}
	if(isJS(url)){
		return url;
	}
	return "https://" + url.replace("https://", "").replace("http://","").split("/")[0];
}

export function isJS(url){
	return url.startsWith("javascript:");
}
