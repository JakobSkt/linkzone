<script lang=ts>
      import { onMount } from 'svelte';
      import LinkItem from '$lib/linkItem.svelte'
      import LinkDetail from '$lib/linkDetail.svelte'

      export let data
      let hslDefault = 25
      let bannerColors: string[] = []
      let gradientColors: string[] = []

      let links = data.zoneLinks
      let detail = false

      let page: HTMLDivElement
      let inner: HTMLDivElement
      let height: number = 100
      //$: console.log(data)

      onMount(() => {
            console.log('mounted')
            let rows = Math.round(links.length/2)
            console.log(rows)
            let incrementHeight = 7
            if(rows > 2) {
                  page.style.height = `${height+(incrementHeight*rows*1.4)}vh`
                  inner.style.height = `${height+(incrementHeight*rows*1.4)-2}vh`
                  console.log('page height', page.style.height)
            }
            

            
      
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
<div class="w-screen h-screen bg-white dark:bg-zinc-900">
      <div class="absolute inset-2 bg-lightDots dark:bg-darkDots bg-dotsSize bg-dotsPosition border border-zinc-200 dark:border-zinc-600 rounded-3xl"></div>

      <div class="absolute bg-zinc-50 dark:bg-zinc-800 left-1/2 top-1/2 p-12 -translate-x-1/2 -translate-y-1/2 border border-zinc-200 dark:border-zinc-400 rounded-2xl">
            <h1 class="text-4xl font-bold dark:text-zinc-200"> No zone found! </h1>
            <p class="text-lg font-medium dark:text-zinc-200"> Try inputting the code again on the <a class="text-lg font-bold dark:text-zinc-400" data-sveltekit-reload href="/connect"> connect </a> page</p>
      </div>
</div>


{:else if data.status == 201}
<div bind:this={page} class="w-screen h-screen bg-white dark:bg-zinc-900">
      <div bind:this={inner} class="absolute inset-2 border border-zinc-200 dark:border-zinc-500 bg-lightDots dark:bg-darkDots bg-dotsSize bg-dotsPosition rounded-3xl">
            
            <div class="absolute inset-2 h-fit">
                  <div class="flex flex-row gap-4 items-center justify-center">
                        <a href="/">
                              <svg class="w-12 h-fit bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-700 stroke-zinc-600 dark:stroke-zinc-400 hover:stroke-zinc-700 dark:hover:stroke-zinc-400 cursor-pointer border p-2 rounded-2xl border-zinc-300 hover:border-zinc-600 dark:border-zinc-400 dark:hover:border-zinc-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                              </svg>
                        </a>
                        <a href="/create">
                              <svg class="w-12 h-12 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-700 stroke-zinc-600 dark:stroke-zinc-400 hover:stroke-zinc-700 dark:hover:stroke-zinc-400 cursor-pointer border p-2 rounded-2xl border-zinc-300 hover:border-zinc-600 dark:border-zinc-400 dark:hover:border-zinc-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                              </svg> 
                        </a>
                         
                        <div class="flex flex-row gap-4 py-2 px-4 justify-center bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-400 border rounded-3xl drop-shadow-sm">
                              <h1 class="relative text-3xl font-medium text-center dark:text-zinc-200">Connected to LinkZone: </h1>
                              <h1 class="relative text-3xl font-bold text-center dark:text-zinc-200"> {data.inputCode} </h1>
                        </div>
                  </div>
                  
            </div>
            
            <div class="mt-28 text-center p-12 rounded-2xl flex flex-col gap-4 ">
                  <small class="text-zinc-600 dark:text-zinc-300 font-bold m-auto"> Introduction </small>
                  {#if data.zone[0].intro != null}
                        <p class="text-medium text-md text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 py-4 px-8 rounded-xl border border-zinc-300 dark:border-zinc-600 -mt-4 w-2/3 mx-auto"> {data.zone[0].intro} </p>
                  {:else}
                        <p class="text-medium text-md text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 py-4 px-8 rounded-xl border border-zinc-300 dark:border-zinc-600 -mt-4 w-2/3 mx-auto code"> No introduction for this zone </p>
                  {/if}
            </div>
            
            <div class="mx-8 text-center bg-zinc-50 dark:bg-zinc-800 drop-shadow-md border border-zinc-300 dark:border-zinc-600 p-4 rounded-2xl ">
                  <small class="absolute top-0 left-0 py-1 px-8 font-bold text-md text-zinc-600 dark:text-zinc-300"> Links </small>
                  <div class="grid grid-cols-2 gap-4 mt-2">
                        {#each links as linkItem, id}  
                              <LinkItem url={linkItem.url} description={linkItem.description} id={linkItem.id}/>
                        {/each}
                  </div>
            </div>
      </div>
</div>
{/if}



<style lang="postcss">

</style>