<script lang="ts">
	export let name: string;
	export let platforms: Array<any>;
</script>

<div class=" w-full lg:max-w-full lg:flex">
	<div
		class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden border-l border-b border-t border-r border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none"
	>
		<h2 class="text-3xl font-bold">{name}</h2>
	</div>
	<div
		class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
	>
		<div class="mb-8">
			<div class="text-gray-900 font-bold text-xl mb-2">Platforms</div>
			{#each platforms as platform}
				<div class="text-gray-700 text-base w-full">
					<p>{platform.name}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
