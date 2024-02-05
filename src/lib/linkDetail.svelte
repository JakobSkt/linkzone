<script lang="ts">
    export let url: String
    export let description: String
    export let imgSrc: String
</script>

<div class=" inset-0 p-8 m-auto bg-zinc-50 border border-zinc-200 rounded-3xl">
    <img src={imgSrc} alt="Image Thumbnail" class="overflow-hidden" />
    <h1 class="font-lg font-bold"> {url} </h1>
    <p class="font-lg font-medium"> {description} </p>
</div>

<style>

</style>