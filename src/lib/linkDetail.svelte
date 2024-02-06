<script lang="ts">
    import { goto } from '$app/navigation'
    export let url: String
    export let description: String

    function redirect(target: String) {
        window.location = target
    }
</script>
<!-- <div class="absolute w-screen h-screen">
    <div class="absolute top-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2 bg-red-400 p-2">
        <div class="bg-zinc-200 p-4 rounded-2xl cursor-pointer drop-shadow-lg" on:click={() => redirect(url)}>                             
            <h1 class="text-md font-bold text-zinc-100 text-nowrap overflow-hidden p-2 -mt-4 -mx-4 bg-zinc-700 rounded-t-2xl drop-shadow"> {url} </h1>
        </div>
    </div>
</div> -->
<div class="absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border bg-zinc-200 border-zinc-200 rounded-2xl z-50">
    <h1 class="text-md font-bold text-zinc-100 text-nowrap overflow-hidden p-2 -mt-4 -mx-4 bg-zinc-700 rounded-t-2xl drop-shadow"> {url} </h1>
    <div class="">
        <p class="mt-2 mx-auto "> {description}</p>

    </div>
</div>

<style lang="postcss">

</style>