<script lang="ts">
    import { goto } from '$app/navigation'
    import LinkDetail from '$lib/linkDetail.svelte'
	import Layout from '../routes/+layout.svelte';
    import LinkPreview from '$lib/linkPreview/LinkPreview.svelte';

    export let url: string
    export let id: number
    export let description: string
    export let detail: boolean = false

    let siteName = url.split(".")[0].split("://")[1]
    
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
<div id="linkCard" on:click={() => qckRedirect(url)} class="bg-white dark:bg-zinc-900 hover:bg-zinc-50 hover:dark:bg-zinc-800 p-4 border border-zinc-200 dark:border-zinc-600 hover:border-zinc-400 hover:dark:border-zinc-400 rounded-2xl cursor-pointer drop-shadow-sm hover:drop-shadow-md transition h-full overflow-hidden flex flex-col items-start justify-center" on:click={handleDetail}>                             
    <p class="font-medium text-left break-words text-zinc-700 dark:text-zinc-200"> {description}</p>
    <span class="text-xs text-left text-zinc-400 dark:text-zinc-600 mt-2"> {siteName.charAt(0).toUpperCase() + siteName.slice(1)} • {url} </span>
</div>


<style lang="postcss">
</style>