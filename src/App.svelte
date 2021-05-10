<script>
	import Settings from "./Settings.svelte";
	let settings_visible = false;
	let settings_display = "none";
	let settings = {};
	function toggle_settings(){
		settings_visible = !settings_visible;
		settings_display = settings_visible?'inherit':'none';
	}
</script>

<div class="content" style="display:{settings_display}; background: black; padding: 0; margin: 0;">
<Settings bind:settings={settings} />
</div>
<main style="--bg-start: {settings.background_gradient_start};--bg-end: {settings.background_gradient_end};--bg-rot: {settings.background_rot}deg;--bg-handle1: {settings.background_handle1}%;">
	<p class="logo"> Homelaunch <button on:click={toggle_settings}> Settings </button> </p>
	<div class="content">
		<h1> Good morning, {settings.name} </h1>
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
		background: linear-gradient(var(--bg-rot), var(--bg-start) var(--bg-handle1), var(--bg-end) 100%); 
		color: #DDDDDD;
	}
	.logo {
		color: #DDDDDD;
		font-family: Comic Sans MS;
		margin: 0;
	}
	.content {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
	p {
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
