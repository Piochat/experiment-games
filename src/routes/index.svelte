<script lang="ts">
	import Console from "../components/console.svelte";
	import { getGames } from "./api/games.json";

	let gamesPromise = getGames();
</script>

<svelte:head>
	<title>Consoles</title>
</svelte:head>

<div
	class="p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4"
>
	{#await gamesPromise}
		<p>...</p>
	{:then consoles}
		{#each consoles.results as console}
			<Console
				name={console.name}
				imageBackground={console.image_background}
				games={console.games}
			/>
		{/each}
	{/await}
</div>
