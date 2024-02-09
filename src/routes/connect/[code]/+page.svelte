<script lang=ts>
      import { onMount } from 'svelte';
      import LinkItem from '$lib/linkItem.svelte'
      import LinkDetail from '$lib/linkDetail.svelte'

      export let data
      let hslDefault = 25
      let bannerColors: string[] = []
      let gradientColors: string[] = []

      let links = data.zoneLinksDebug
      let detail = false
      $: console.log(data)

      onMount(() => {
        console.log('mounted')
      
      for (let i = 0; i < links.length; i++) {
            let random = Math.random() * (300 - 20) + 20;
            const bannerColor = `hsl(${random}, 45%, 45%)`
            const gradient = random + hslDefault
            const gradientColor = `hsl(${gradient}, 45%, 45%)`

            bannerColors = [...bannerColors, bannerColor]
            gradientColors = [...gradientColors, gradientColor]
        }
        
    })
</script>

{#if data.status == 404}
<div class="absolute left-1/2 top-1/2 p-12 -translate-x-1/2 -translate-y-1/2 border border-zinc-200 rounded-2xl">
      <h1 class="text-4xl font-bold"> No zone found! </h1>
      <p class="text-lg font-medium"> Try inputting the code again on the <a class="text-lg font-bold" href="/connect"> connect </a> page</p>
</div>
{:else if data.status == 201}
<div class="w-screen h-screen bg-white">
      <div class="absolute inset-2 border border-zinc-200 rounded-3xl">
            
            <div class="absolute inset-2 h-fit">
                  <div class="flex flex-row gap-4 items-center justify-center">
                        <a href="/">
                              <svg class="w-12 h-12 stroke-zinc-600 cursor-pointer border border-zinc-200 p-2 rounded-2xl hover:border-zinc-800 hover:bg-zinc-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                              </svg>
                        </a>
                        <a href="/create">
                              <svg class="w-12 h-12 stroke-zinc-600 cursor-pointer border border-zinc-200 p-2 rounded-2xl hover:border-zinc-800 hover:bg-zinc-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                              </svg> 
                        </a>
                         
                        <div class="flex flex-row gap-4 py-2 px-4 justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 border-zinc-200 border rounded-3xl drop-shadow-sm">
                              <h1 class="relative text-3xl font-medium text-center">Connected to LinkZone: </h1>
                              <h1 class="relative text-3xl font-bold text-center"> {data.inputCode} </h1>
                        </div>
                  </div>
                  
            </div>
            
            <div class="mt-28 mx-20 text-center drop-shadow-md p-12 rounded-2xl ">
                  <small class="absolute top-0 inset-x-0 text-zinc-400 font-bold m-auto"> Introduction </small>
                  <p class="text-medium text-md text-zinc-800 -mt-6"> {data.zoneDebug[0].intro} </p>
            </div>
            <div class="mt-8 mx-8 text-center bg-zinc-50 drop-shadow-md border border-zinc-200 p-8 rounded-2xl ">
                  <small class="absolute top-0 left-0 py-1 px-2 text-xs text-zinc-400 font-medium"> Click on a card to expand it! Click the header for quick access!</small>
                  <div class="grid grid-cols-2 gap-4">
                        {#each links as linkItem, id}  
                              <LinkItem url={linkItem.url} id={id} description={linkItem.description} bannerColors={bannerColors} gradientColors={gradientColors}/>
                        {/each}
                  </div>
            </div>
      </div>
</div>
{/if}



<style lang="postcss">

</style>