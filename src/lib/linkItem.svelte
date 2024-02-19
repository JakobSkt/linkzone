<script lang="ts">
    import { goto } from '$app/navigation'
    import LinkDetail from '$lib/linkDetail.svelte'
	import Layout from '../routes/+layout.svelte';

    export let url: string
    export let id: number
    export let description: string
    export let detail: boolean = false
    export let bannerColors: string[]
    export let gradientColors: string[]
    
    function handleDetail(event) {
        if(event.target.tagName == 'svg') {
            console.log('svg!')
            detail = false
        } else if(!detail) {
            detail = !detail
            console.log('card!')
        }
    }

    function qckRedirect(target: string) {
        window.open(target, '_blank')
    }

</script>
<div id="linkCard" class:active={detail} class="{detail ? 'row-span-2' : 'row-span-1'} bg-zinc-200 dark:bg-zinc-600 p-4 rounded-2xl cursor-pointer drop-shadow m-2 overflow-hidden" on:click={handleDetail}>                             
    <h1 on:click={() => qckRedirect(url)} class="text-md font-bold text-zinc-100 text-nowrap overflow-hidden p-2 -mt-4 -mx-4 rounded-t-2xl drop-shadow cursor-alias" style="  background-image: linear-gradient(to right, {bannerColors[id]} , {gradientColors[id]})"> {url} </h1>
    <p class="mt-2 mx-auto dark:text-zinc-200"> {description}</p>
    <div class="flex flex-row items-center justify-evenly">
        <button on:click={() => qckRedirect(url)} class="p-2 bg-zinc-800 text-zinc-100 w-2/3 rounded-3xl my-2 hover:bg-zinc-700"> Go to site! </button>
        <svg on:click={handleDetail} class="stroke-zinc-800 w-10 h-10 hover:stroke-zinc-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    </div>
</div>


<style lang="postcss">
   #linkCard {
        max-height: 100px;
        transition: all 0.2s ease-in-out;
    }

    #linkCard.active {
        max-height: 250px;
    } 
</style>