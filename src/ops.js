export function cleanurl(url){
	return "https://" + url.replace("https://", "").replace("http://","");
}
export function getRoot(url){
	return "https://" + url.replace("https://", "").replace("http://","").split("/")[0];
}
