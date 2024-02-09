<script lang="ts">
    import heroMessage from '$lib/assets/linkzone-hero-message.svg'
    import heroArrow from '$lib/assets/LinkZoneHeroArrow.svg'
</script>

<div class="w-screen h-screen bg-white dark:bg-zinc-900 overflow-hidden">
    <div id="dotsTarget" class="absolute inset-2 bg-lightDots bg-dotsSize bg-dotsPosition border border-zinc-200 rounded-3xl dark:bg-darkDots dark:bg-zinc-900 dark:stroke-zinc-900 dark:border-zinc-600">

    </div>
    <div class="absolute left-0 inset-y-0 w-fit h-fit p-4 mt-48 ml-8 bg-zinc-50 border-zinc-700 border-2 rounded-3xl drop-shadow-sm flex flex-col justify-evenly items-center gap-4">
        <img src="" alt="">
        <div class="p-2 flex flex-row gap-2 items-center justify-start">
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-500 relative inline-block">
                <span class="relative text-zinc-800 text-4xl font-bold"> Struggling </span>
              </span>
            <h1 class="relative text-4xl font-bold text-zinc-800"> with sharing links?</h1>
        </div>

        <p class="py-1 px-8 bg-zinc-100 border border-zinc-600 text-zinc-600 text-md font-medium rounded-2xl"> Don’t worry. The solution is only a scroll away! </p>
        
        <svg class="w-6 h-6 stroke-zinc-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    </div>
    
    <img src={heroArrow} alt="Hero Arrow" class="absolute w-40 scale-x-flip rotate-90 top-1/3 left-1/2 -ml-6">

    <div class="absolute right-0 top-1/2 mr-40">
        <img src={heroMessage} alt="Hero Message Bubble">
        
        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 float-right -top-4 left-12">
            <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        </div>
    </div>
    <div class="absolute inset-x-0 bottom-0 mx-auto my-12 flex flex-row gap-8 justify-center items-center">
        <a class="p-4 border bg-zinc-800 text-white border-zinc-200 rounded-full drop-shadow-sm hover:bg-zinc-600 hover:drop-shadow-md" href="/create"> Create new LinkZone </a>
        <a class="p-4 border bg-zinc-800 text-white border-zinc-200 rounded-full drop-shadow-sm hover:bg-zinc-600 hover:drop-shadow-md" href="/connect"> Connect to LinkZone </a>
    </div>
</div>

<style lang="postcss">
    /* @media (prefers-color-scheme: dark) {
        #dotsTarget {
            background-image: url(../lib/assets/dot-pattern-darkV2.svg);
            background-size: 10%;
            background-position: 10% 15%;
        } 
    }

    @media (prefers-color-scheme: dark) {
        #dotsTarget {
            background-image: url(../lib/assets/dot-pattern-dark.svg);
            background-size: 10%;
            background-position: 10% 15%;
        }
    } */
</style>
