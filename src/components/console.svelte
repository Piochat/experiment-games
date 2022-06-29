<script lang="ts">
	export let name: string;
	export let imageBackground: string;
	export let games: Array<any>;
</script>

<div class="rounded overflow-hidden shadow-lg">
	<img class="w-full" src={imageBackground} alt={name} />
	<div class="px-6 py-4">
		<div class="font-bold text-xl mb-2">{name}</div>
		<p class="text-gray-700 text-base">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			Voluptatibus quia, Nonea! Maiores et perferendis eaque,
			exercitationem praesentium nihil.
		</p>
	</div>
	<div class="px-4 pt-3 pb-1">
		<span
			class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
			>{games[0].name}</span
		>
		<span
			class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
			>{games[1].name}</span
		>
		<span
			class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
			>{games[2].name}</span
		>
	</div>
</div>
