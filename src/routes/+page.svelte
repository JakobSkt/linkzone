<script lang="ts">
    import { goto } from '$app/navigation'
    import heroMessage from '$lib/assets/linkzone-hero-message.svg'
    import heroArrow from '$lib/assets/LinkZoneHeroArrow.svg'
</script>

<div class="w-screen h-fit bg-white dark:bg-zinc-900 overflow-hidden">
    <div class="h-screen w-screen">
        <div id="dotsTarget" class="h-full m-4 bg-lightDots bg-dotsSize bg-dotsPosition border-l border-r border-t border-zinc-200 rounded-t-3xl dark:bg-darkDots dark:bg-zinc-900 dark:stroke-zinc-900 dark:border-zinc-600"></div>
    </div>
    <div class="h-screen w-screen">
        
        <div class="group absolute mt-96 ml-40 w-68 cursor-pointer">
            <button on:click={() => goto('/create')} class="absolute py-2 px-4 rounded-2xl border-2 border-zinc-300 dark:border-zinc-500 bg-zinc-800 dark:bg-zinc-100 z-50">
                <p class="font-bold text-lg text-zinc-100 dark:text-zinc-800"> Supercharge my linksharing! </p>
            </button>
    
            <div class="absolute right-0 py-2 pl-8 pr-2 rounded-2xl border-2 border-zinc-300 bg-zinc-700 dark:border-zinc-500 dark:bg-zinc-700 z-40 group-hover:-mr-10 transition-all duration-150">
                <svg class="w-7 h-7 stroke-orange-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
            </div>
        </div>
        
        <div id="dotsTarget" class="h-full mx-4 bg-lightDots bg-dotsSize bg-dotsPosition border-x border-zinc-200 dark:bg-darkDots dark:bg-zinc-900 dark:stroke-zinc-900 dark:border-zinc-600"></div>
        
        
    </div>
    <div class="h-screen">
        <div id="dotsTarget" class="h-1/3 mx-4 -mb-4 bg-lightDots bg-dotsSize bg-dotsPosition border-l border-r border-b border-zinc-200 rounded-b-3xl dark:bg-darkDots dark:bg-zinc-900 dark:stroke-zinc-900 dark:border-zinc-600"></div>
    </div>

    
    <div class="absolute left-0 inset-y-0 w-fit h-fit top-1/3 ml-10 xl:ml-32 flex flex-col items-start gap-4">
        <div class="flex flex-col justify-evenly items-center gap-4 p-4 bg-zinc-50 border-zinc-700 border-2 rounded-3xl drop-shadow-sm">
            <div class="p-2 flex flex-row gap-2 items-center justify-start">
                <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-500 dark:before:bg-pink-600 relative inline-block">
                    <span class="relative text-zinc-800 text-5xl font-bold"> Struggling </span>
                </span>
                <h1 class="relative text-5xl font-bold text-zinc-800"> with sharing links?</h1>
            </div>
    
            <p class="py-1 px-8 bg-zinc-100 border border-zinc-600 text-zinc-600 text-md font-medium rounded-2xl"> Don’t worry. The solution is only a scroll away! </p>
            
            <svg class="w-6 h-6 stroke-zinc-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </div>
        <div class="flex flex-row items-center gap-2 bg-zinc-100 dark:bg-zinc-800 border border-zinc-400 py-2 px-4 rounded-2xl">
            <p class="text-xs text-zinc-700 dark:text-zinc-300"> Quick access for the pros </p>

            <a href="/connect">
                <svg class="w-4 h-4 stroke-zinc-700 dark:stroke-zinc-300 hover:stroke-zinc-950 dark:hover:stroke-zinc-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
            </a>
            
            <a href="/create">
                <svg class="w-4 h-4 stroke-zinc-700 dark:stroke-zinc-300 hover:stroke-zinc-950 dark:hover:stroke-zinc-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </a>
            
        </div>
    </div>
    
    <div class="absolute flex flex-col justify-center items-center top-1/4 left-2/3 -ml-12 xl:top-0 xl:mt-48 xl:ml-60 xl:left-1/2">
        <p class="py-2 px-4 text-md font-medium rounded-2xl text-zinc-500 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-700 border border-zinc-400 dark:border-zinc-200"> I know you have sent a message like this 👀 </p>

        <img src={heroArrow} alt="Hero Arrow" class="-mt-4  w-40 scale-y-flip -rotate-45 xl:mt-0">
    </div>

    <div class="absolute right-0 top-1/2 xl:mr-40 mr-20">
        <img src={heroMessage} alt="Hero Message Bubble">
        
        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 float-right -top-4 left-12">
            <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        </div>
    </div>
</div>

<style lang="postcss">
</style>
