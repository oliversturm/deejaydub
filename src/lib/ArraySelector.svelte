<script>
	export let array = [];
	export let selectedValue;
	export let caption = 'Select a value';

	function sliderChanged(event) {
		selectedValue = array[event.target.value];
	}

	$: labelCaption = `${caption}: ${selectedValue}`;
</script>

<div class="flex flex-col w-48 items-center gap-1 rounded p-1 bg-amber-100">
	<select bind:value={selectedValue}>
		{#each array as e}
			<option value={e}>{e}</option>
		{/each}
	</select>
	<input type="range" min="0" max={array.length - 1} on:input={sliderChanged} />
	<div class="text-sm font-bold text-center">{labelCaption}</div>
</div>
