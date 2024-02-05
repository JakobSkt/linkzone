<script lang="ts">
    import { goto } from '$app/navigation'
    export let url: String
    export let description: String

    function redirect(target: String) {
        window.location = target
    }
</script>

<div class="bg-zinc-200 p-4 rounded-2xl cursor-pointer" on:click={() => redirect(url)}>                             
    <h1 class="text-md font-bold text-center text-nowrap"> {url} </h1>
    <p> {description}</p>
</div>

<style lang="postcss">

</style>