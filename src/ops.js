export function cleanurl(url){
	if(url == undefined){
		return "undefined";
	}
	return "https://" + url.replace("https://", "").replace("http://","");
}
export function getRoot(url){
	if(url == undefined){
		return "undefined";
	}
	return "https://" + url.replace("https://", "").replace("http://","").split("/")[0];
}
