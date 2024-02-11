<script lang="ts">
    import { fly } from 'svelte/transition'
    import { superForm} from 'sveltekit-superforms/client'
    import type { PageData } from './$types'
    import LinkRow from '$lib/linkRow.svelte'

    let links: string[] = []
    let linkToAdd = ''
    let customName = false
    let nameAvailable = false

    $: {
        // if(customName && $message == undefined || $message == '') {
        //     window.alert('Please check the availability of the custom name')
        // }
    }
    export let data: PageData
    const { form, errors, enhance, message } = superForm(data.codeForm, {
        resetForm: false
    })
    const {
        form: zoneForm,
        errors: zoneErrors,
        enhance: zoneEnhance,
        message: zoneMessage
    } = superForm(data.zoneForm, {
        resetForm: true
    })

    async function addLink(e: KeyboardEvent) {
        if(e.key === "Enter") {
            $zoneForm.linkUrl = [...$zoneForm.linkUrl, linkToAdd]
            linkToAdd = ''
        }  
    }

    $: console.log($message)
    
</script>

<div class="w-screen h-dvh bg-white dark:bg-zinc-900">
    <div class="absolute bg-lightDots dark:bg-darkDots bg-dotsSize bg-dotsPosition dark:bg-zinc-900 inset-2 rounded-3xl border-2 border-zinc-200 dark:border-zinc-600">

        <div class="absolute inset-2 h-fit  w-fit mx-auto p-2 rounded-2xl">
            <div class="flex flex-row gap-4 items-center justify-center">
                <a href="/">
                    <svg class="w-12 h-12 stroke-zinc-600 dark:stroke-zinc-300 cursor-pointer border border-zinc-200 dark:border-zinc-700 p-2 rounded-2xl hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-transparent dark:hover:border-zinc-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </a>
                <a href="/connect">
                    <svg class="w-12 h-12 stroke-zinc-600 dark:stroke-zinc-300 cursor-pointer border border-zinc-200 dark:border-zinc-700 p-2 rounded-2xl hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-transparent dark:hover:border-zinc-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>    
                </a>
   
                <div class="flex flex-row gap-4 py-2 px-4 justify-center rounded-3xl drop-shadow-sm border dark:border-zinc-500 dark:text-zinc-200">
                    <h1 class="relative text-3xl font-medium text-center"> Create a new LinkZone </h1>
                </div>
            </div>
            
      </div>

        <div class="mt-28 mx-auto w-2/3 justify-center items-center p-8 border dark:border-zinc-500 dark:bg-zinc-800 bg-zinc-50 rounded-3xl">
            <div class="flex flex-row gap-4">
                <div class="p-6 dark:bg-zinc-900 text-center m-auto border border-zinc-200 dark:border-zinc-500 rounded-lg">
                    <p class="text-xl text-zinc-600 dark:text-zinc-200"> {$zoneForm.linkUrl.length} </p>
                </div>
                <div class="m-auto flex-auto">
                    <label for="links_add" class="text-sm text-zinc-600 dark:text-zinc-400">Add links </label>
                    <input on:keydown={() => addLink(event)} bind:value={linkToAdd} type="text" class="p-4 w-full dark:bg-zinc-900 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-500 rounded-lg drop-shadow-sm hover:border-zinc-400 dark:hover:border-zinc-300" placeholder="Input link" name="links_add">
                </div>
            </div>

            <form action="?/checkCode" method="post" use:enhance class="flex flex-col p-4 mt-4 border border-zinc-200 dark:border-zinc-500 rounded-2xl">
                <div class="flex flex-row gap-4">
                    <input type="checkbox" name="customCodeb" bind:checked={customName} class="w-6 h-6 appearance-none border border-zinc-200 rounded-md checked:bg-green-500">
                    <label class="dark:text-zinc-200" for="customCodeb"> Provide custom Zone name </label>
                </div>
                {#if customName}
                    <div transition:fly={{y: -20, duration: 200}} class="flex flex-row gap-2 mt-2 p-2 items-center justify-evenly">
                        <div class="flex flex-col w-3/4">
                            <input required name="customCode" bind:value={$form.customCode} type="text" class="p-2 bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-200 border-2 border-zinc-200 dark:border-zinc-500 dark:placeholder-zinc-200 drop-shadow rounded-xl" placeholder="Enter custom zone name.."/>
                            {#if $message}
                                <label class="text-xs {$message == 'Available!' ? 'text-green-600' : 'text-red-600'} text-center mt-2" for="customCode"> {$message} </label>
                            {/if}
                        </div>
                        
                        <button class="md:p-2 bg-orange-500 dark:bg-pink-600 dark:hover:bg-pink-400 text-white drop-shadow-sm rounded-xl hover:bg-orange-400 hover:drop-shadow-md" type="submit"> Check availability! </button>
                    </div>
                {/if}
            </form>

            <form action="?/createZone" method="post" use:zoneEnhance class="flex flex-col mx-auto my-8 gap-8 p-8 bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-500 rounded-2xl">
                <div class="max-h-60">
                    <label for="linkzone_intro" class="block mb-2 text-sm text-zinc-600 dark:text-zinc-200"> Introduce your LinkZone </label>
                    <textarea required bind:value={$zoneForm.linkzone_intro} id="linkzone_intro" name="linkzone_intro" rows="4" maxlength="512" class="block p-2.5 w-full text-md text-zinc-900 dark:text-zinc-200 bg-zinc-50 dark:bg-zinc-800 rounded-lg border border-zinc-300 dark:border-zinc-400 hover:border-zinc-500 dark:hover:border-zinc-200  focus:ring-blue-500 focus:border-blue-500" placeholder="Introduction..."></textarea>
                    {#if $zoneMessage}
                    <div class="flex flex-row items-center justify-start gap-1 stroke-orange-400 text-orange-400">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg> 
                        <p> {$zoneMessage} </p>
                    </div>
                    {/if}
                </div>

                {#if customName && $message == 'Available!'}
                    <input type="hidden" name="linkzone_customCode" value={$form.customCode}/>
                {/if}
                <div class="flex flex-col items-center justify-evenly gap-4"> 
                    {#each $zoneForm.linkUrl as link, id}
                        <LinkRow url={$zoneForm.linkUrl[id]} id={id} bind:links={$zoneForm.linkUrl} description={$zoneForm.link_dsc}/>
                    {/each}

                    <button type="submit" class="py-2 w-2/3 mx-auto text-lg bg-orange-500 dark:bg-pink-600 text-white rounded-full drop-shadow-sm hover:bg-orange-400 dark:hover:bg-pink-500 hover:drop-shadow-md"> Create  LinkZone! </button>
                </div>
            </form>
    
        </div>
    </div>
   
    
</div>



<style lang="postcss">

</style>
