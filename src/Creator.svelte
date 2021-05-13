<script>
	export let settings = {
		
	};
	export let name = "";
	export let url = "";
	function add(){
		console.log(settings);
		addCard(name, url);
	}
	function addCard(name, url){
		if(!(settings.list.includes(name))){
			settings.list.push(name);
			settings.urls[name] = url;
			settings = settings;

			name = "";
			url = "";
		}
	}
	function apply(){
		editTarget = undefined;
	}
	export let editTarget = undefined;
	editTarget = undefined;
	export let targetUrl = "";
	let lastTarget = "";
	let lastUrl = "";
	$: editing = editTarget != undefined;
	$: {
		if(editing){
			if(lastTarget !== ""){
				let index = settings.list.indexOf(lastTarget);
				settings.list[index] = editTarget;
			}
			if(lastUrl !== ""){
				settings.urls[editTarget] = targetUrl;
			}
		}
		if(editing){
			lastTarget = editTarget;
			lastUrl = targetUrl;
		}
		else{
			lastTarget = "";
			lastUrl = "";
		}
	}
</script>


<main style="--bg-start: {settings.background_gradient_start};--bg-end: {settings.background_gradient_end};--bg-rot: {settings.background_rot}deg;--bg-handle1: {settings.background_handle1}%;--bg-handle2: {settings.background_handle2}%;">
	<h2> {editing?"Editing \""+editTarget+"\"":"Add a card"}</h2>
	{#if editing}
	<div class="go">
		<label for="name"> 
			<p>Name: </p>
			<input bind:value={editTarget} type="text" id="name" autofocus> 
		</label>
		<br />
		<label for="url"> 
			<p>Url: </p>
			<input bind:value={targetUrl} type="url" id="name"> 
		</label>
		<br />
		<button on:click={apply}>Apply</button>
	</div>
	{/if}
	{#if !editing}
	<div class="go">
		<label for="name"> 
			<p>Name: </p>
			<input bind:value={name} type="text" id="name" autofocus> 
		</label>
		<br />
		<label for="url"> 
			<p>Url: </p>
			<input bind:value={url} type="url" id="name"> 
		</label>
		<br />
		<button on:click={apply}>Add</button>
	</div>
	{/if}
</main>


<style>
	main{
		color: white;
		background: rgba(0,0,0,0);
		transform: scaleX(1) scaleY(1) !important;
	}
	.go{
		background: var(--bg-start);
		border: 1px solid gray;
		border-radius: 5px;/*
		min-width: 200px;
		max-width: 50%;*/
		margin: auto;
		padding: 1em;
	}
	p{
		float: left;
	}
	input{
		float: right;
		width: 85%;
	}
	br{
		clear: both;
	}
	button{
		width: 100%;
	}
</style>
