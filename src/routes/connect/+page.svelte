<script lang="ts">
    import { goto } from '$app/navigation'
    let code: string = ''
    let codeError: boolean = false

    function handleCode() {
        if(code == '' || code == undefined) codeError = true

        goto(`/connect/${code}`)
    }
</script>

<div class="w-screen h-screen bg-white dark:bg-zinc-900">
    <div class="absolute inset-2 bg-lightDots dark:bg-darkDots bg-dotsSize bg-dotsPosition border border-zinc-200 dark:border-zinc-600 rounded-3xl"></div>
    
    <div class="absolute left-1/2 top-1/2 p-10 md:p-12 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-800">
        <h1 class="text-4xl font-bold text-zinc-900 dark:text-zinc-100 text-center lg:text-left"> Connect to LinkZone </h1>
        <div class="flex flex-nowrap flex-col mt-2 lg:flex-row md:gap-2 text-center items-center">
            <p class="text-lg font-medium text-zinc-600 dark:text-zinc-300"> Create your own LinkZone on the </p>
            <div class="flex flex-nowrap flex-row items-center gap-1">
                <a class="group text-lg flex flex-row items-center gap-1 text-zinc-800 dark:text-zinc-400  hover:text-zinc-950 hover:stroke-zinc-950 dark:hover:text-zinc-400 dark:hover:stroke-zinc-400" href="/create"> create 
                    <svg class="w-4 h-4 stroke-zinc-800 dark:stroke-zinc-400 group-hover:stroke-zinc-950 dark:group-hover:stroke-zinc-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </a>   
            <p class="text-lg font-medium text-zinc-600 dark:text-zinc-300"> page </p>
            </div>
        </div>
        
        <div class="flex flex-col gap-4 p-4">
            <div class="flex flex-col">
                <label class="text-xs text-zinc-500" for="code"> LinkZone Code </label>
                <input bind:value={code} class="p-2 bg-zinc-200 dark:text-zinc-200 dark:bg-zinc-900 rounded-md border border-zinc-400 hover:border-zinc-700 dark:border-zinc-500 dark:hover:border-zinc-300 placeholder-zinc-700 dark:placeholder-zinc-200 transition duration-100" type="text" name="code" id="code" placeholder="Input code..">
                {#if codeError}
                    <div class="flex flex-row items-center justify-start gap-1 stroke-orange-400 text-orange-400">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg> 
                        <p class="text-xs"> Please input a valid code </p>
                    </div>
                {/if}
            </div>

            <button on:click={handleCode} class="p-2 bg-orange-500 hover:bg-orange-400 text-white rounded-2xl hover:drop-shadow-md dark:text-zinc-50 dark:bg-pink-600  dark:hover:bg-pink-500" type="submit"> Connect! </button>
        </div>
    </div>
</div>

<style lang="postcss">

</style>
