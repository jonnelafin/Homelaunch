<script>
	let name = "Name Here";
	let background_gradient_start = "#1c1b21";
	let background_gradient_end = "#3A285600"; //Originally rgba(132,75,218,1)
	let background_rot = "180";
	let background_handle1 = "10";
	let background_handle2 = "100";
	export let settings;
	settings = {
		"valid" : true,
		"name" : name,
		"background_gradient_start" : background_gradient_start,
		"background_gradient_end" : background_gradient_end,
		"background_rot" : background_rot,
		"background_handle1" : background_handle1,
		"background_handle2" : background_handle2,
		"list" : ["Youtube", "Google Classroom", "koulus.fi", "Rickroll"],
		"urls" : {
				"Youtube" : "youtube.com",
				"Google Classroom" : "classroom.google.com",
				"koulus.fi" : "koulus.fi",
				"Rickroll" : "https://www.youtube.com/embed/dQw4w9WgXcQ"
			}
	}
	const stored = localStorage.getItem('settings');
	let error = "";
	if (stored != null){
		try{
			let sets = JSON.parse(stored);
			console.log(sets);
			if(sets.valid === true){
				settings = sets;
			}
		}
		catch{
			error = "error: couldn't parse json: '" + stored + "'";
			console.log(error);
		}
	}
	function save(){
		localStorage.setItem('settings', JSON.stringify(settings));
	}
	let code = "";
	function showCode(){
		code = JSON.stringify(settings);
	}
	function clear(){
		localStorage.clear();
	}
</script>

<main style="--bg-start: {settings.background_gradient_start};--bg-end: {settings.background_gradient_end};--bg-rot: {settings.background_rot}deg;--bg-handle1: {settings.background_handle1}%;--bg-handle2: {settings.background_handle2}%;">
<div class="settings" id="settings">
	<h1> Settings </h1>
	<div>
		<label for="name"> Name <input type=text id="name" bind:value={settings.name}> </label>
		<label for="gradient-rot">Gradient rotation
			<input type=number bind:value={settings.background_rot} min=0 max=360> 
			<input type=range bind:value={settings.background_rot} min=0 max=360 id="gradient-rot"> 
		</label>
		<label for="gradient-per">Gradient percentage 1
			<input type=number bind:value={settings.background_handle1} min=0 max=100> 
			<input type=range bind:value={settings.background_handle1} min=0 max=100 id="gradient-per"> 
		</label>
		<label for="gradient-per2">Gradient percentage 2
			<input type=number bind:value={settings.background_handle2} min=0 max=200> 
			<input type=range bind:value={settings.background_handle2} min=0 max=200 id="gradient-per2"> 
		</label>
		<br />
		<label for="gradient-1"> Gradient start color 
			<input type="color" id="gradient-1" bind:value={settings.background_gradient_start}>
			<input type=text bind:value={settings.background_gradient_start}>
		</label>
		<label for="gradient-2"> Gradient end color 
			<input type="color" id="gradient-2" bind:value={settings.background_gradient_end}>
			<input type=text bind:value={settings.background_gradient_end}>
		</label>
		<label for="bg-img"> Background image url
			<input type=text id="bg-img" bind:value={settings.background_img_url}>
		</label>
	</div>
	<h3> {error} </h3>
	<button on:click={save} > Save </button> <button on:click={showCode} > Show JSON </button> <button on:click={clear} > Reset </button>
	<p> {code} </p>
</div>
</main>

<style>
	.settings {
		background: var(--bg-start);
		color: white;
	}
	h1{
		margin: 0;
		padding: 0;
	}
	p{
		margin: 0;
	}
</style>
