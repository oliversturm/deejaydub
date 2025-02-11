<script>
    import StraightLine from '$lib/components/StraightLine.svelte';
    let rise = 1;
    let run = 1;
    let yIntercept = 0;

    // Display variables
    let displayRise = 1;
    let displayRun = 1;
    let fractionIsNegative = false;

    // Find the greatest common divisor
    function gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    // Calculate display values and fraction sign
    $: {
        // Convert rise and run to integers by multiplying by 10
        const scale = 10;
        const scaledRise = Math.round(rise * scale);
        const scaledRun = Math.round(run * scale);
        
        // Find GCD to simplify the fraction
        const divisor = gcd(scaledRise, scaledRun);
        
        // Set display values
        displayRise = Math.abs(scaledRise / divisor);
        displayRun = Math.abs(scaledRun / divisor);
        
        // Determine if the fraction should be negative
        fractionIsNegative = (rise < 0 && run > 0) || (rise > 0 && run < 0);
    }
</script>

<div class="p-4 max-w-3xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Straight Lines</h1>
    
    <div class="flex gap-8 my-4 items-center">
        <div class="flex flex-col items-center gap-1 relative">
            <label class="flex flex-col gap-2">
                <span class="text-red-600 font-semibold">Rise:</span>
                <input 
                    type="number" 
                    bind:value={rise} 
                    step="0.1"
                    class="p-2 border border-red-200 rounded-md w-[100px] focus:border-red-400 focus:ring-1 focus:ring-red-400 outline-none"
                >
            </label>
            
            <div class="w-full h-0.5 bg-gray-800 my-1"></div>
            
            <label class="flex flex-col gap-2">
                <span class="text-green-600 font-semibold">Run:</span>
                <input 
                    type="number" 
                    bind:value={run} 
                    step="0.1"
                    class="p-2 border border-green-200 rounded-md w-[100px] focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none"
                >
            </label>
        </div>
        
        <label class="flex flex-col gap-2">
            <span class="text-blue-600 font-semibold">Y-Intercept:</span>
            <input 
                type="number" 
                bind:value={yIntercept} 
                step="0.1"
                class="p-2 border border-blue-200 rounded-md w-[100px] focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none"
            >
        </label>
    </div>

    <div class="text-4xl italic font-serif text-center flex items-center justify-center gap-2">
        y = {fractionIsNegative ? '-' : ''}
        <div class="inline-flex flex-col items-center">
            <div class="px-2 text-red-600">{displayRise}</div>
            <div class="w-full h-0.5 bg-current mt-1"></div>
            <div class="px-2 text-green-600">{displayRun}</div>
        </div>
        x <span class="text-blue-600">{yIntercept >= 0 ? '+' : '-'} {Math.abs(yIntercept)}</span>
    </div>
    
    <StraightLine {rise} {run} {yIntercept} />
</div>
