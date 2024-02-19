<script lang="ts">
    import { goto } from '$app/navigation'
    import { draw } from 'svelte/transition'
    import { quintIn, quintInOut, quadIn, quadInOut, quadOut, quintOut } from 'svelte/easing'
    export let data

    let status = data.status
    let code = data.code

    let copied = false

    // $: console.log(status, code)
    function copyCode() {
        navigator.clipboard.writeText(code)
        copied = true

        setTimeout(() => {
            copied = false
        }, 2000)
    }
</script>

<div class="w-screen h-screen bg-white dark:bg-zinc-900">
    <div class="absolute inset-2 bg-lightDots dark:bg-darkDots bg-dotsSize bg-dotsPosition border border-zinc-200 dark:border-zinc-600 rounded-3xl"></div>
    
{#if status == 'success'} 
    <div class="absolute left-1/2 top-1/2 p-10 md:p-12 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-800">
        <h1 class="text-4xl font-bold text-green-600 lg:text-left"> Success! </h1>
        <div class="flex flex-nowrap flex-col md:gap-2 items-start">
            <p class="text-lg font-medium text-zinc-600 dark:text-zinc-300"> Grab your LinkZone-code and get sharing! </p>
            <div class="flex flex-nowrap flex-row items-center gap-1">
                <a class="group text-md flex flex-row items-center gap-1 text-zinc-500 hover:text-zinc-950 hover:stroke-zinc-950 dark:hover:text-zinc-400 dark:hover:stroke-zinc-400" href="/connect/{code}" target="_blank"> Visit your LinkZone page 
                    <svg class="w-4 h-4 stroke-zinc-500 group-hover:stroke-zinc-950 dark:group-hover:stroke-zinc-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </a>   
            </div>
        </div>
        
        <div class="flex flex-col gap-4 p-4">
            <div class="flex flex-col">
                <label class="text-xs text-zinc-500" for="code"> Click to copy your zone code </label>
                <div class="relative group" on:click={copyCode}>
                    <p class="p-2 cursor-pointer bg-zinc-200 dark:bg-zinc-950 dark:text-zinc-200 rounded-md border border-zinc-300 dark:border-zinc-600 group-hover:border-zinc-400 transition duration-100"> {code} </p>
                    
                    <div class="absolute inset-y-0 m-auto right-0 bg-zinc-300 dark:bg-zinc-700 items-center flex rounded-r-md cursor-pointer border-t border-r border-b border-zinc-300 dark:border-zinc-600 group-hover:border-zinc-400 transition duration-100">
                        {#if copied}
                            <svg class="relative w-6 stroke-emerald-500 mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                                <path in:draw={{ duration: 500, easing: quintInOut}} stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        {:else}
                            <svg class="relative w-6 stroke-zinc-400 dark:stroke-zinc-500 mx-2 group-hover:stroke-zinc-600 dark:group-hover:stroke-zinc-300 transition duration-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                                <path in:draw={{ duration: 500, easing: quadIn}} stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                            </svg>
                        {/if}
                    </div>
                      
                </div>
                  
            </div>

            <!-- <button on:click={handleCode} class="p-2 bg-orange-500 hover:bg-orange-400 text-white rounded-2xl hover:drop-shadow-md dark:text-zinc-50 dark:bg-pink-600  dark:hover:bg-pink-500" type="submit"> Connect! </button> -->
        </div>
    </div>
{:else}
<div class="absolute left-1/2 top-1/2 p-10 md:p-12 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-800">
    <h1 class="text-4xl font-bold text-zinc-800 dark:text-zinc-100 text-center lg:text-left"> Something went wrong.. </h1>
    <div class="flex flex-nowrap flex-col md:gap-2 items-start justify-start lg:items-center">
        <p class="text-lg font-medium text-zinc-600 dark:text-zinc-300"> We're very sorry about this! </p>
        <div class="flex flex-nowrap flex-row items-center gap-1">
            <a class="group text-lg flex flex-row items-center gap-1 text-zinc-800 dark:text-zinc-400  hover:text-zinc-950 hover:stroke-zinc-950 dark:hover:text-zinc-400 dark:hover:stroke-zinc-400" href="/create"> Return to the create 
                <svg class="w-4 h-4 stroke-zinc-800 dark:stroke-zinc-400 group-hover:stroke-zinc-950 dark:group-hover:stroke-zinc-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                page
            </a>   
        </div>
    </div>
    
    
</div>
{/if}

</div>

    
    
<style lang="postcss">

</style>
