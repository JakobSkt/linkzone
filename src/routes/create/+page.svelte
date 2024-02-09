<script lang="ts">
    import { fly } from 'svelte/transition'
    import { superForm} from 'sveltekit-superforms/client'
    import type { PageData } from './$types'
    import LinkRow from '$lib/linkRow.svelte'

    let links: string[] = []
    let linkToAdd = ''
    let customName = false

    // $: console.log(links)
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

<div class="w-screen h-dvh bg-white">
    <div class="absolute inset-2 border border-zinc-200 rounded-3xl">

        <div class="absolute inset-2 h-fit">
            <div class="flex flex-row gap-4 items-center justify-center">
                <a href="/">
                    <svg class="w-12 h-12 stroke-zinc-600 cursor-pointer border border-zinc-200 p-2 rounded-2xl hover:border-zinc-800 hover:bg-zinc-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </a>
                <a href="/connect">
                    <svg class="w-12 h-12 stroke-zinc-600 cursor-pointer border border-zinc-200 p-2 rounded-2xl hover:border-zinc-800 hover:bg-zinc-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>    
                </a>
   
                <div class="flex flex-row gap-4 py-2 px-4 justify-center bg-gradient-to-br from-orange-200 to-amber-500 rounded-3xl drop-shadow-sm">
                    <h1 class="relative text-3xl font-medium text-center"> Create a now LinkZone </h1>
                </div>
            </div>
            
      </div>

        <div class="mt-28 mx-auto w-2/3 justify-center items-center">

            <div class="flex flex-row gap-4">
                <div class="p-6 text-center m-auto border border-zinc-200 rounded-lg">
                    <p class="text-xl text-zinc-600"> {$zoneForm.linkUrl.length} </p>
                </div>
                <div class="m-auto flex-auto">
                    <label for="links_add" class="text-sm text-zinc-600">Add links </label>
                    <input on:keydown={() => addLink(event)} bind:value={linkToAdd} type="text" class="p-4 w-full border border-zinc-200 rounded-lg drop-shadow-sm hover:border-zinc-400" placeholder="Input link" name="links_add">
                </div>
            </div>

            <form action="?/checkCode" method="post" use:enhance class="flex flex-col p-4 mt-4 border border-zinc-200 rounded-2xl">
                <div class="flex flex-row gap-4">
                    <input type="checkbox" name="customCodeb" bind:checked={customName} class="w-6 h-6 appearance-none border border-zinc-200 rounded-md checked:bg-green-500">
                    <label for="customCodeb"> Provide custom Zone name </label>
                </div>
                {#if customName}
                    <div transition:fly={{y: -20, duration: 200}} class="flex flex-row gap-2 mt-2 p-2 items-center justify-evenly">
                        <div class="flex flex-col w-3/4">
                            <input required name="customCode" bind:value={$form.customCode} type="text" class="p-2 bg-zinc-100 border-2 border-zinc-200 drop-shadow rounded-xl" placeholder="Enter custom zone name.."/>
                            {#if $message}
                                <label class="text-xs {$message == 'Available!' ? 'text-green-600' : 'text-red-600'} text-center mt-2" for="customCode"> {$message} </label>
                            {/if}
                        </div>
                        
                        <button class="p-2 bg-zinc-600 text-white drop-shadow-sm rounded-xl hover:bg-zinc-800 hover:drop-shadow-md" type="submit"> Check availability! </button>
                    </div>
                {/if}
            </form>

            <form action="?/createZone" method="post" use:zoneEnhance class="flex flex-col mx-auto my-8 gap-8 p-8 border border-zinc-200 rounded-2xl">
                <div class="max-h-60">
                    <label for="linkzone_intro" class="block mb-2 text-sm text-zinc-600 "> Introduce your LinkZone </label>
                    <textarea required bind:value={$zoneForm.linkzone_intro} id="linkzone_intro" name="linkzone_intro" rows="4" maxlength="512" class="block p-2.5 w-full text-md text-zinc-900 bg-zinc-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Introduction..."></textarea>
                </div>

                <div id="link drawer" class="grid grid-rows-1 grid-cols-3">
                {#each $zoneForm.linkUrl as link, id}
                    <LinkRow url={$zoneForm.linkUrl[id]} id={id} bind:links={$zoneForm.linkUrl} description={$zoneForm.link_dsc}/>
                {/each}
                </div>

                <button type="submit" class="p-4 border bg-zinc-800 text-white border-zinc-200 rounded-full drop-shadow-sm hover:bg-zinc-600 hover:drop-shadow-md"> Create  LinkZone </button>

            </form>
    
        </div>
    </div>
   
    
</div>



<style lang="postcss">

</style>
