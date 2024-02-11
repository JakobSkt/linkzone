<script lang="ts">
    export let url: string
    export let description: string
    export let id: number
    export let links: string[]

    $: urlValue = url

    function removeLink() {
        let newArr = links.filter((link, index) => index !== id)
        links = newArr
    }
</script>

<div class="flex flex-row justify-evenly w-full items-center overflow-hidden px-2 py-4 border border-zinc-400 dark:border-zinc-500 bg-zinc-200 dark:bg-zinc-800 rounded-2xl mx-4">
    <!-- <div id="card" class="">
       <img sr
            src={} alt="link" class="w-28 h-28 rounded-lg" />
    </div> -->
    <div class="flex flex-col w-full px-2">
        <input bind:value={url} name="linkUrl" readonly class="-mt-4 -ml-4 text-lg text-center rounded-br-xl mb-2 w-fit text-zinc-700 dark:text-zinc-300 border-b border-r border-zinc-400 dark:border-zinc-500 bg-zinc-100 dark:bg-zinc-900 cursor-default transition duration-100" id="link_url"/>
        <label for="linkDsc" class="text-xs text-zinc-600 dark:text-zinc-400"> Describe your link</label>
        <textarea bind:value={description} id="linkDsc" rows="2" name="linkDsc" class="block p-2.5 w-full text-sm text-zinc-900 dark:text-zinc-200 bg-zinc-200 dark:bg-zinc-800 rounded-lg border border-zinc-400 dark:border-zinc-500 hover:border-zinc-600 dark:hover:border-zinc-300 focus:ring-blue-500 focus:border-blue-500 placeholder-zinc-500" placeholder="Description..."></textarea>
    </div>

    <svg class="w-6 h-6 stroke-zinc-600 dark:stroke-zinc-500 cursor-pointer hover:stroke-red-500" on:click={removeLink} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
      
</div>

<style lang="postcss">

</style>