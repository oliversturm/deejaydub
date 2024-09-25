<script>
	import Wazzup from '$lib/Wazzup.svelte';
	import Button from '$lib/Button.svelte';
	import {
		colors,
		bgColors,
		top,
		left,
		rotate,
		standardColors,
		scaleX,
		scaleY,
		skewX,
		skewY
	} from '$lib/styles.js';
	import ArraySelector from '$lib/ArraySelector.svelte';

	let djwSaysVisible = true;
	let djwColor = colors[0];
	let djwBgColor = bgColors[1];
	$: djwColors = `${djwColor} ${djwBgColor}`;
	let djwTop = top[3];
	let djwLeft = left[0];
	let djwRotate = rotate[0];

	$: djwStyles = `${djwTop} ${djwLeft} ${djwRotate} ${djwColors}`;

	let wazzupVisible = true;
	let wazzupTextColor = colors[0];
	let wazzupFrameColor = standardColors[0];
	let wazzupFrameFill = standardColors[1];
	let wazzupScaleX = scaleX[0];
	let wazzupScaleY = scaleY[0];
	let wazzupSkewX = skewX[0];
	let wazzupSkewY = skewY[0];
	let wazzupRotate = rotate[0];
	let wazzupLeft = left[2];
	let wazzupTop = top[1];
</script>

<div class="rounded border border-gray-400 p-4 m-4">
	<div class="rounded p-2 bg-amber-50 mb-2 flex flex-col">
		<div class="font-bold mb-2">DJW says...</div>
		<div class="flex flex-row">
			<div class="flex flex-row gap-1 flex-wrap">
				<ArraySelector caption="Fg Color" array={colors} bind:selectedValue={djwColor} />
				<ArraySelector caption="Bg Color" array={bgColors} bind:selectedValue={djwBgColor} />
				<ArraySelector caption="Top" array={top} bind:selectedValue={djwTop} />
				<ArraySelector caption="Left" array={left} bind:selectedValue={djwLeft} />
				<ArraySelector caption="Rotate" array={rotate} bind:selectedValue={djwRotate} />
			</div>
			<div class="flex flex-col ml-auto gap-1">
				<Button
					kind="good"
					enabled={!djwSaysVisible}
					on:click={() => {
						djwSaysVisible = true;
					}}>Show</Button
				>
				<Button
					kind="bad"
					enabled={djwSaysVisible}
					on:click={() => {
						djwSaysVisible = false;
					}}>Hide</Button
				>
			</div>
		</div>
	</div>
	<div class="rounded p-2 bg-blue-50">
		<div class="font-bold mb-2">Wazzup</div>
		<div class="flex flex-row">
			<div class="flex flex-row gap-1 flex-wrap">
				<ArraySelector caption="Text Color" array={colors} bind:selectedValue={wazzupTextColor} />
				<ArraySelector
					caption="Frame Color"
					array={standardColors}
					bind:selectedValue={wazzupFrameColor}
				/>
				<ArraySelector
					caption="Frame Fill"
					array={standardColors}
					bind:selectedValue={wazzupFrameFill}
				/>
				<ArraySelector caption="Scale X" array={scaleX} bind:selectedValue={wazzupScaleX} />
				<ArraySelector caption="Scale Y" array={scaleY} bind:selectedValue={wazzupScaleY} />
				<ArraySelector caption="Skew X" array={skewX} bind:selectedValue={wazzupSkewX} />
				<ArraySelector caption="Skew Y" array={skewY} bind:selectedValue={wazzupSkewY} />
				<ArraySelector caption="Rotate" array={rotate} bind:selectedValue={wazzupRotate} />
				<ArraySelector caption="Left" array={left} bind:selectedValue={wazzupLeft} />
				<ArraySelector caption="Top" array={top} bind:selectedValue={wazzupTop} />
			</div>
			<div class="flex flex-col ml-auto gap-1">
				<Button
					kind="good"
					enabled={!wazzupVisible}
					on:click={() => {
						wazzupVisible = true;
					}}>Show</Button
				>
				<Button
					kind="bad"
					enabled={wazzupVisible}
					on:click={() => {
						wazzupVisible = false;
					}}>Hide</Button
				>
			</div>
		</div>
	</div>
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
