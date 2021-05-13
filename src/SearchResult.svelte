<script>
import { slide } from 'svelte/transition';
import { cleanurl, isJS } from "./ops.js";
export let url = "https://www.youtube.com/embed/dQw4w9WgXcQ";
export let name = "Rickroll";
export let image = " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAq1BMVEUAAAABAQGpqam4uLgAAAAAAAAAAAAuLi5gYGCqqqq7u7vJycm5ubnGxsbHx8c9PT3n5+fo6OjGxsbe3t7n5+ft7e2goKChoaGioqKkpKSmpqaoqKisrKyysrKzs7O3t7e5ubm8vLy+vr7AwMDMzMzNzc3T09PV1dXX19fY2Njc3Nzd3d3f39/g4ODh4eHi4uLj4+Pk5OTm5ubn5+fq6urr6+vw8PDz8/P6+vpiz3PzAAAAFnRSTlMAAhgYGh8iIjRUVFRVVVVW3Nzi9PT0ZPGLFQAAAKRJREFUOMvd09cSgjAQheHF3sW2NmzYCxJExfd/MjFghqwJl47jf5PJnO8uE4CfKNPyNZlZDiqetioHNT1o/CFYr9LBdtDfpIHDCHG41wPHwrDxMRp2p+isC8CmyLOc8HIPzn7wqlsSYIFxE9e7PuJ6TeMNGIrm7EJ2AnC2JDsFaJNdDRK7EiT3j7e4kV0B5B3KFJAdim1XqkN2gFxBKm98+WM+ATK5ZZxmxmq7AAAAAElFTkSuQmCC";
export let selected = false;
$: outline = selected ? ".24em solid #5D85A7" : "none";
export let settings;
function remove(){
	if(editing){
		editTarget = undefined;
	}
	let pos = settings.list.indexOf(name);
	delete settings.urls[name];
	settings.list.splice(pos, 1);
	settings = settings;
}
function open(){
	if(isJS(url)){
		location.href = url;
	}
	else{
		window.open(cleanurl(url));
	}
}
function edit(){
	if(editing){
		editTarget = undefined;
	}
	else{
		editTarget = name;
		targetUrl = url;
	}
}
let tried = false;
function fix(){
	if(!tried){
		tried = true;
		this.src=image+"/favicon.ico"
		if(isJS(url)){
			this.src = "data:image/png;base64,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";
		}
	}
}
export let editTarget;
export let targetUrl;
$: editing = (editTarget === name);
</script>


<span transition:slide class="a" style="--outline:{outline};--editing:{editing?'opacity(100%)':'opacity(25%)'};">
	<div>
		<img src="{image}/favicon.png" on:error={fix} on:click={open} />
		<p href="{cleanurl(url)}" on:click={open}>{name}</p>
		<button on:click={remove}>
			✖
		</button>
		<button class="editbtn" on:click={edit}>
			🖊
		</button>
	</div>
</span>

<style>
	div{
		background: white;
		color: black;
		backdrop-filter: blur(1em);
		border-radius: 5px;
		border: 2px solid #555555;
		padding: 1em;
    	transition: outline .1s;
		outline: var(--outline);
	}
	.a{
	}
	p{
		cursor: pointer;
		display: inline-block;
		margin: 0;
		padding: .25em;
	}
	img{
		cursor: pointer;
		width: 2em;
		height: auto;
		margin: 0;
		padding: .25em;
		display: inline-block;
		transform: translateY(-25%);
		float: left;
	}
	button{
		display: inline-block;
		background: none;
		border: none;
		float: right;
		margin: 0;
		padding: .25em;
		filter: opacity(25%);
		transition: filter .25s, background .25s;
	}
	.editbtn{
		filter: var(--editing);
	}
	button:hover{
		background: rgba(0,0,0,0.1);
		filter: opacity(100%);
	}
</style>
