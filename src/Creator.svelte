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
</script>


<main style="--bg-start: {settings.background_gradient_start};--bg-end: {settings.background_gradient_end};--bg-rot: {settings.background_rot}deg;--bg-handle1: {settings.background_handle1}%;--bg-handle2: {settings.background_handle2}%;">
	<h2> Add a card </h2>
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
		<button on:click={add}>Add</button>
	</div>
</main>

<style>
	main{
		color: white;
		background: rgba(0,0,0,0);
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
