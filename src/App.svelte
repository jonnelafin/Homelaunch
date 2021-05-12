<svelte:head>
	<!-- title, might be customizable later -->
	<title> New Tab </title>
	<!-- a hack to make the favicon blank with as little effort as possible -->
	<link rel="icon" href="data:;base64,iVBORw0KGgo=">
</svelte:head>

<script>
	import Settings from "./Settings.svelte";
	import Creator from "./Creator.svelte";
	import SearchResult from "./SearchResult.svelte";
	import { cleanurl, getRoot } from "./ops.js";
	let settings_visible = false;
	$: settings_display = settings_visible?'inherit':'none';
	let creator_visible = false;
	$: creator_display = creator_visible?'inherit':'none';
	let settings = {};
	function toggle_settings(){
		settings_visible = !settings_visible;
	}
	function toggle_creator(){
		creator_visible = !creator_visible;
	}
	let date = new Date();
	$: time = date.toLocaleTimeString().replaceAll(".", ":");
		const interval = setInterval(() => {
			date = new Date();
		}, 1000);
	let greeting = "Good morning,";
	var curHr = date.getHours();
		if (curHr < 12) {
			greeting = "Good morning,";
		} else if (curHr < 18) {
			greeting = "Good afternoon,";
		} else if (curHr < 21) {
			greeting = "Good afternoon,";
		} else {
			greeting = "Good night,";
		}
	let list = ["Youtube", "Google Classroom", "koulus.fi", "Rickroll"];
	let urls = {
		"Youtube" : "youtube.com",
		"Google Classroom" : "classroom.google.com",
		"koulus.fi" : "koulus.fi",
		"Rickroll" : "https://www.youtube.com/embed/dQw4w9WgXcQ"
	}
	let searchterm = "";
	$: recommendations = list.filter(name => name.toLowerCase().includes(searchterm.toLowerCase()));

	function enter(){
		if(searchterm.length > 0){ //only open a window if something has been searched
			if(recommendations.length > 0){
				let active = recommendations[0];
				let url = urls[active];
				window.open(cleanurl(url));
			}
			else{
				window.open(cleanurl(searchterm));
			}
			searchterm = "";
		}
	}
</script>

<div class="content" style="display:{settings_display}; background: black; padding: 0; margin: 0;">
	<Settings bind:settings={settings} />
</div>
<div class="content" style="display:{creator_display}; background: black; padding: 0; margin: 0;">
	<Creator />
</div>
<main style="--bg-start: {settings.background_gradient_start};--bg-end: {settings.background_gradient_end};--bg-rot: {settings.background_rot}deg;--bg-handle1: {settings.background_handle1}%;--bg-handle2: {settings.background_handle2}%;">
	<p class="logo"> Homelaunch <button on:click={toggle_settings} class="settingsbtn"> Settings </button> </p>
	<div class="content">
		<h1> {greeting} {settings.name} </h1>
		<h1> The time is {time} </h1>
		<input on:change={enter} bind:value={searchterm} type="text" id="query" name="query" placeholder="Type to search" list="recommend" autocomplete="off" autofocus><br>

		<hr />
		
		<datalist id="recommend">
			{#if false}
			{#each list as o}
				<option>{o}</option>
			{/each}
			{#each urls as o}
				<option>{o}</option>
			{/each}
			{/if}
		</datalist>
		<grid>
			{#each recommendations as c, i(c)}
				<SearchResult selected={i===0&&searchterm.length>0}  name={c} url={urls[c]} image={getRoot(urls[c])}/favicon.ico />
			{/each}
			<button class="create" on:click={toggle_creator}> <p class="createp" style="transform:rotate({creator_visible?'45':'0'}deg)">+</p> </button>
		</grid>
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0; 
		height: 100%;
	}
	main {
		height: 100%;
		background: rgb(0,0,0);
		background: linear-gradient(var(--bg-rot), var(--bg-start) var(--bg-handle1), var(--bg-end) var(--bg-handle2)); 
		color: #FFFFFF;
	}
	.logo {
		color: #BBBBBB;
		font-family: Comic Sans MS;
		margin: 0;
	}
	.content {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
	#query {
		border: none;
		border-radius: 2em;
		width: 20em;
	    padding-left: 1em;
    	padding-right: 1em;
    	transition: outline .1s;
	}
	#query:focus, #query:focus{
	    outline: .24em solid gray;
	}
	hr{
		margin-bottom: 1em;
	}
	grid{
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
		gap: 10px;
		grid-auto-flow: dense;
		place-self: center;
	}
	.create{
		background: rgba(255, 255, 255, 0.35);
		padding: 1em;
		border: 1px dashed #DDDDDD;
		font-size: 1.1em;
		max-width: 4em;
		max-height: 4em;
	}
	.createp{
		padding: 0;
		margin: 0;
		transition: transform .5s;
	}
	@media (max-width: 600px){
		grid{
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		}
		.create{
			max-width: inherit;
			max-height: inherit;
		}
	}
	h1{
		
		font-family: Cantarell, "Segoe UI", Ubuntu, Roboto;
		font-weight: 300 !important;
	}
	.settingsbtn{
		background: none;
		color: #BBBBBB;
		border: 1px solid rgba(1, 1, 1, 0);
		text-decoration: underline;
	}
	.settingsbtn:hover {
		border: 1px solid gray;
	}
	p {
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
