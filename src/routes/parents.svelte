<script lang="ts">
	import CardCompany from "../components/card-company.svelte";
	import { getFamilyPlatforms } from "./api/games.json";

	let consoleCompanyPromise = getFamilyPlatforms();
</script>

<svelte:head>
	<title>Companies and Consoles</title>
</svelte:head>

<div
	class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5"
>
	{#await consoleCompanyPromise}
		...
	{:then companiesAndConsoles}
		{#each companiesAndConsoles.results as c}
			<CardCompany name={c.name} platforms={c.platforms} />
		{/each}
	{/await}
</div>
