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
    
    function handleDetail() {
        detail = !detail
        console.log('detail switched')
    }

    function qckRedirect(target: string) {
        window.open(target, '_blank')
    }

</script>
<div id="linkCard" class:active={detail} class="bg-zinc-200 p-4 rounded-2xl cursor-pointer drop-shadow m-2 overflow-hidden" on:click={handleDetail}>                             
    <h1 on:click={() => qckRedirect(url)} class="text-md font-bold text-zinc-100 text-nowrap overflow-hidden p-2 -mt-4 -mx-4 rounded-t-2xl drop-shadow" style="  background-image: linear-gradient(to right, {bannerColors[id]} , {gradientColors[id]})"> {url} </h1>
    <p class="mt-2 mx-auto"> {description}</p>
    <button on:click={() => qckRedirect(url)} class="p-2 bg-zinc-800 text-zinc-100 rounded-3xl my-2 w-2/3 mx-auto hover:bg-zinc-700"> Go to site! </button>
</div>


<style lang="postcss">
    #linkCard {
        max-height: 100px;
        transition: all 0.25s ease-in-out;
    }

    #linkCard.active {
        max-height: 250px;
    } 
</style>