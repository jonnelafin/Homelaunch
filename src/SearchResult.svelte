<script>
import { cleanurl } from "./ops.js";
export let url = "https://www.youtube.com/embed/dQw4w9WgXcQ";
export let name = "Rickroll";
export let image = " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAq1BMVEUAAAABAQGpqam4uLgAAAAAAAAAAAAuLi5gYGCqqqq7u7vJycm5ubnGxsbHx8c9PT3n5+fo6OjGxsbe3t7n5+ft7e2goKChoaGioqKkpKSmpqaoqKisrKyysrKzs7O3t7e5ubm8vLy+vr7AwMDMzMzNzc3T09PV1dXX19fY2Njc3Nzd3d3f39/g4ODh4eHi4uLj4+Pk5OTm5ubn5+fq6urr6+vw8PDz8/P6+vpiz3PzAAAAFnRSTlMAAhgYGh8iIjRUVFRVVVVW3Nzi9PT0ZPGLFQAAAKRJREFUOMvd09cSgjAQheHF3sW2NmzYCxJExfd/MjFghqwJl47jf5PJnO8uE4CfKNPyNZlZDiqetioHNT1o/CFYr9LBdtDfpIHDCHG41wPHwrDxMRp2p+isC8CmyLOc8HIPzn7wqlsSYIFxE9e7PuJ6TeMNGIrm7EJ2AnC2JDsFaJNdDRK7EiT3j7e4kV0B5B3KFJAdim1XqkN2gFxBKm98+WM+ATK5ZZxmxmq7AAAAAElFTkSuQmCC";
export let selected = false;
$: outline = selected ? ".24em solid #5D85A7" : "none";
export let settings;
function remove(){
	let pos = settings.list.indexOf(name);
	delete settings.urls[name];
	settings.list.splice(pos, 1);
	settings = settings;
}
function open(){
	window.open(cleanurl(url));
}
let tried = false;
function fix(){
	if(!tried){
		tried = true;
		this.src=image+"/favicon.ico"
	}
}
</script>


<span class="a" style="--outline:{outline};">
	<div>
		<img src="{image}/favicon.png" on:error={fix} on:click={open} />
		<p href="{cleanurl(url)}" on:click={open}>{name}</p>
		<button on:click={remove}>
			✖
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
	}
	button:hover{
		background: rgba(0,0,0,0.2);
	}
</style>
