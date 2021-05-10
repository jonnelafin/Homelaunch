<script>
	import { writable } from "svelte/store";
	const storedTheme = localStorage.getItem("theme");
	export const theme = writable(storedTheme);
	theme.subscribe(value => {
	    localStorage.setItem("theme", value);
	});
	let name = "Elias";
	let background_gradient_start = "#1c1b21";
	let background_gradient_end = "rgba(132,75,218,1)";
	let background_rot = "180";
	let background_handle1 = "5";
	export let settings;
	settings = {
		"name" : name,
		"background_gradient_start" : background_gradient_start,
		"background_gradient_end" : background_gradient_end,
		"background_rot" : background_rot,
		"background_handle1" : background_handle1
	}
</script>

<main style="--bg-start: {settings.background_gradient_start};--bg-end: {settings.background_gradient_end};--bg-rot: {settings.background_rot}deg;--bg-handle1: {settings.background_handle1}%;">
<div class="settings" id="settings">
	<h1> Settings </h1>
	<div>
		<label for="gradient-rot">Gradient rotation
			<input type=number bind:value={settings.background_rot} min=0 max=360> 
			<input type=range bind:value={settings.background_rot} min=0 max=360 id="gradient-rot"> 
		</label>
		<label for="gradient-per">Gradient percentage
			<input type=number bind:value={settings.background_handle1} min=0 max=100> 
			<input type=range bind:value={settings.background_handle1} min=0 max=100 id="gradient-per"> 
		</label>
		<br />
		<label for="gradient-1"> Gradient start color <input type="color" id="gradient-1" bind:value={settings.background_gradient_start}></label>
		<label for="gradient-2"> Gradient end color <input type="color" id="gradient-2" bind:value={settings.background_gradient_end}></label>
	</div>
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
</style>
