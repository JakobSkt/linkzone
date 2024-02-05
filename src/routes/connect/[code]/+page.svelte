<script lang=ts>
      import LinkDetail from '$lib/linkDetail.svelte';
      import LinkItem from '$lib/linkItem.svelte';
      export let data

      let links = data.zoneLinks
      let detail = false
      // $: console.log(data)
</script>

{#if data.status == 404}
<div class="absolute p-12 m-auto place-self-center border border-zinc-200 rounded-2xl">
      <h1 class="text-4xl font-bold"> No zone found! </h1>
      <p class="text-lg font-medium"> Try inputting the code again on the <a class="text-lg font-bold" href="/connect"> connect </a> page</p>
</div>
{:else if data.status == 201}
<div class="w-screen h-screen bg-white">
      <div class="absolute inset-2 border border-zinc-200 rounded-3xl">
            <div class="absolute inset-2 h-fit py-2 bg-gradient-to-br from-teal-100 to-teal-400 border-zinc-200 border rounded-3xl drop-shadow-sm">
                  <div class="flex flex-row gap-4 justify-center">
                        <h1 class="relative text-3xl font-medium text-center">Connected to LinkZone: </h1>
                        <h1 class="relative text-3xl font-bold text-center"> {data.inputCode} </h1>
                  </div>
            </div>

            <div class="mt-28 mx-20 text-center drop-shadow-md  p-12 rounded-2xl ">
                  <p class=""> {data.zone[0].intro} </p>
            </div>
            <div class="mt-8 text-center bg-zinc-50 drop-shadow-md border border-zinc-200 p-8 rounded-2xl ">
                  <div class="grid grid-cols-2 gap-4">
                        {#each links as linkItem}
                              
                              <LinkItem url={linkItem.url} description={linkItem.description} />
                        {/each}
                  </div>
            </div>
      </div>
</div>
{/if}



<style lang="postcss">

</style>