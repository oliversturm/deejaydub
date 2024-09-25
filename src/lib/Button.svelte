<script>
	export let kind = 'neutral';

	const styles = {
		neutral: 'bg-blue-200 text-black hover:bg-blue-300',
		good: 'bg-lime-500 text-white hover:bg-lime-600',
		bad: 'bg-red-500 text-white hover:bg-red-600'
	};

	$: style = styles[kind] || styles.neutral;

	export let enabled = true;
</script>

<button
	class="rounded px-4 py-1 font-bold disabled:bg-neutral-200 disabled:text-gray-400 {style}"
	on:click
	disabled={!enabled}><slot /></button
>
