<script>
    export let rise = 1;
    export let run = 1;
    export let yIntercept = 0;
    
    // SVG viewport dimensions
    const width = 400;
    const height = 400;
    
    // Calculate gradient from rise and run
    $: gradient = run !== 0 ? rise / run : Infinity;

    $: y = x => gradient * x + yIntercept;

    // Declare all coordinates at component scope
    const x1 = -10;
    const x2 = 10;
    let y1 = 0;
    let y2 = 0;
    let svgX1 = 0;
    let svgY1 = 0;
    let svgX2 = 0;
    let svgY2 = 0;

    // Transform coordinates to SVG viewport
    const transformX = x => (x + 10) * (width / 20);  // Scale from [-10,10] to [0,width]
    const transformY = y => height - ((y + 10) * (height / 20));  // Scale from [-10,10] to [height,0]
    
    // Calculate points for the line
    $: {
        if (run === 0) {
            // Vertical line case
            y1 = -10;
            y2 = 10;
        } else {
            y1 = y(x1);
            y2 = y(x2);
        }
        
        // Update SVG coordinates
        svgX1 = transformX(x1);
        svgY1 = transformY(y1);
        svgX2 = transformX(x2);
        svgY2 = transformY(y2);
    }
</script>

<div class="flex justify-center items-center m-4">
    <svg 
        {width} 
        {height} 
        class="bg-gray-50 border border-gray-200"
    >
        <!-- Grid lines -->
        <g>
            <!-- Vertical grid lines -->
            {#each Array(21) as _, i}
                <line 
                    x1={i * (width / 20)} 
                    y1="0" 
                    x2={i * (width / 20)} 
                    y2={height} 
                    class="stroke-gray-200"
                    stroke-width="1"
                />
            {/each}
            <!-- Horizontal grid lines -->
            {#each Array(21) as _, i}
                <line 
                    x1="0" 
                    y1={i * (height / 20)} 
                    x2={width} 
                    y2={i * (height / 20)} 
                    class="stroke-gray-200"
                    stroke-width="1"
                />
            {/each}
            
            <!-- X and Y axes -->
            <line 
                x1="0" 
                y1={height/2} 
                x2={width} 
                y2={height/2} 
                class="stroke-gray-400"
                stroke-width="2"
            />
            <line 
                x1={width/2} 
                y1="0" 
                x2={width/2} 
                y2={height} 
                class="stroke-gray-400"
                stroke-width="2"
            />
        </g>
        
        <!-- The straight line -->
        <line 
            x1={svgX1} 
            y1={svgY1} 
            x2={svgX2} 
            y2={svgY2} 
            class="stroke-violet-600"
            stroke-width="2.5"
        />
    </svg>
</div>
