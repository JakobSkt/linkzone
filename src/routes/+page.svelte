<script lang="ts">
    import heroMessage from '$lib/assets/linkzone-hero-message.svg'
    import heroArrow from '$lib/assets/linkzone-hero-arrow.svg'
</script>

<div class="w-screen h-screen bg-white overflow-hidden">
    <div class="absolute inset-2 border border-zinc-200 rounded-3xl">

    </div>
    <div class="absolute left-0 inset-y-0 w-fit h-fit p-8 my-auto ml-8 bg-gradient-to-br from-orange-200 to-amber-400 border-zinc-200 border rounded-lg drop-shadow-sm">
        <h1 class="relative text-6xl font-bold ">LinkZone</h1>
        <p > The quickest way to connect a series of links! </p>
    </div>
    <div class="absolute right-0 top-1/2 mr-96">
        <h1 class="text-center text-zinc-600 text-4xl font-black -ml-96 -mb-12 -rotate-12"> Have you ever tried this? </h1>
        <img src={heroArrow} class="m-4 ml-60 rotate-12" alt="Arrow pointing from text to message bubble">
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
    html {
        overflow: hidden;
    }
</style>
