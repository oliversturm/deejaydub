<script>
	import Cat from '$lib/Cat.svelte';
	import {
		left,
		random,
		randomColorCombo,
		rotate,
		top,
		colors,
		standardColors,
		scaleX,
		scaleY,
		skewX,
		skewY
	} from '$lib/styles.js';
	import Wazzup from '$lib/Wazzup.svelte';

	let djwSaysVisible = false;
	let djwColor;
	let djwTop;
	let djwLeft;
	let djwRotate;

	$: djwStyles = `${djwTop} ${djwLeft} ${djwRotate} ${djwColor}`;

	let catClick = () => {
		const newColorCombo = randomColorCombo();
		djwColor = `${newColorCombo.fg} ${newColorCombo.bg}`;
		djwTop = random(top);
		djwLeft = random(left);
		djwRotate = random(rotate);
		djwSaysVisible = true;

		setTimeout(() => {
			djwSaysVisible = false;
			showWazzup();
		}, 3000);
	};

	let wazzupVisible = false;
	let wazzupTextColor;
	let wazzupFrameColor;
	let wazzupFrameFill;
	let wazzupScaleX;
	let wazzupScaleY;
	let wazzupSkewX;
	let wazzupSkewY;
	let wazzupRotate;
	let wazzupLeft;
	let wazzupTop;

	let showWazzup = () => {
		wazzupTextColor = random(colors);
		wazzupFrameColor = random(standardColors);
		wazzupFrameFill = random(standardColors);
		wazzupScaleX = random(scaleX);
		wazzupScaleY = random(scaleY);
		wazzupSkewX = random(skewX);
		wazzupSkewY = random(skewY);
		wazzupRotate = random(rotate);
		wazzupLeft = random(left);
		wazzupTop = random(top);
		wazzupVisible = true;

		setTimeout(() => {
			wazzupVisible = false;
		}, 5000);
	};
</script>

<div class="w-screen h-screen flex flex-col items-center justify-center overflow-clip">
	<div class="w-screen flex justify-center text-2xl font-bold grow-0 mb-4 sm:hidden">
		Tap the cat!
	</div>

	<Cat on:click={catClick} />
</div>

{#if djwSaysVisible}
	<div class="text-7xl italic font-bold absolute z-10 p-4 select-none {djwStyles}">DJW says...</div>
{/if}

{#if wazzupVisible}
	<Wazzup
		textColor={wazzupTextColor}
		frameColor={wazzupFrameColor}
		frameFill={wazzupFrameFill}
		scaleX={wazzupScaleX}
		scaleY={wazzupScaleY}
		skewX={wazzupSkewX}
		skewY={wazzupSkewY}
		rotate={wazzupRotate}
		left={wazzupLeft}
		top={wazzupTop}
	/>
{/if}
