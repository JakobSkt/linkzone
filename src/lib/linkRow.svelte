<script lang="ts">
    export let url: String
    export let id: Number
    export let links: string[]

    $: console.log(id)

    function removeLink(id: number) {
        console.log('removing link at index ' + id)
        let newArr = links.splice(id, 1)
        links = newArr
    }
</script>

<div class="flex flex-row justify-between items-center my-2">
    <!-- <div id="card" class="">
       <img sr
            src={} alt="link" class="w-28 h-28 rounded-lg" />
    </div> -->
    <div class="flex flex-col w-3/4">
        <div class="flex flex-row items-center gap-2">
            <input class="text-xl p-2 rounded-2xl w-full" id="link_url" name="link_url" bind:value={url}/>
            <svg class="w-4 h-4 stroke-zinc-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>              
        </div>
        <label for="linkDsc" class="text-xs text-zinc-600"> Describe your link</label>
        <textarea id="link_dsc" rows="2" name="link_dsc" class="block p-2.5 w-full text-sm text-zinc-900 bg-zinc-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Description..."></textarea>
    </div>

    <svg class="w-6 h-6 stroke-zinc-600 cursor-pointer hover:stroke-red-500" on:click={() => removeLink(id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
      
</div>

<style lang="postcss">

</style>