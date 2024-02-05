<script lang="ts">
    import { fly } from 'svelte/transition'
    import { superForm} from 'sveltekit-superforms/client'
    import type { PageData } from './$types'
    import LinkRow from '$lib/linkRow.svelte'

    let links: string[] = []
    let linkToAdd = ''
    let customName = true
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
        // console.log(e.key)
        if(e.key === "Enter") {
            // let response = await getLinkInfo(linkToAdd);
            // if (response === undefined) {
            //     return
            // } else {
            //     const linkBody = {
            //         title: response.body.title,
            //         image: response.body.image,
            //         description: response.body.description,
            //         url: linkToAdd
            //     }
            //     console.log(linkBody)

            //     links = [...links, linkBody]
            //     linkToAdd = ''
            // }
            links = [...links, linkToAdd]
            linkToAdd = ''
        }  
    }
    
</script>

<div class="w-screen h-dvh bg-white">
    <div class="absolute inset-2 border border-zinc-200 rounded-3xl">
        <div class="absolute inset-2 h-fit py-2 bg-gradient-to-br from-orange-200 to-amber-500 border-zinc-200 border rounded-3xl drop-shadow-sm">
            <h1 class="relative text-4xl font-medium text-center">Create a new LinkZone</h1>
        </div>

        <div class="mt-28 mx-auto w-2/3 justify-center items-center">

            <div class="flex flex-row gap-4">
                <div class="p-6 text-center m-auto border border-zinc-200 rounded-lg">
                    <p class="text-xl text-zinc-600"> {links.length} </p>
                </div>
                <div class="m-auto flex-auto">
                    <label for="links_add" class="text-sm text-zinc-600">Add links </label>
                    <input on:keydown={() => addLink(event)} bind:value={linkToAdd} type="text" class="p-4 w-full border border-zinc-200 rounded-lg drop-shadow-sm hover:border-zinc-400" placeholder="Input link" name="links_add">
                </div>
            </div>

            <form action="?/checkCode" method="post" use:enhance class="flex flex-col p-4 mt-4 border border-zinc-200 rounded-2xl">
                <div class="flex flex-row gap-4">
                    <input type="checkbox" name="customCodeb" bind:checked={$form.customCodeb} class="w-6 h-6 appearance-none border border-zinc-200 rounded-md checked:bg-green-500">
                    <label for="customCodeb"> Provide custom Zone name (if available)</label>
                </div>
                {#if customName}
                    <div transition:fly={{y: -20, duration: 200}} class="flex flex-row gap-2 mt-2 p-2 items-center justify-evenly">
                        {#if $message}<h3>{$message}</h3>{/if}
                        {#if $message}
                        <div class="flex flex-col">
                            <input name="customCode" bind:value={$form.customCode} type="text" class="p-2 w-full bg-zinc-100 border-2 border-red-600 drop-shadow rounded-xl" placeholder="Enter custom zone name.."/>
                            <label class="text-xs text-zinc-300 w-full text-center" for="customCode"> Not available </label>
                        </div>
                        {:else if $message == undefined}
                            <input required name="customCode" type="text" class="p-2 w-full bg-zinc-100 drop-shadow rounded-xl" placeholder="Enter custom zone name.."/>
                        {:else}
                        <div class="flex flex-col">
                            <input required name="customCode" type="text" class="p-2 w-full bg-zinc-100 border-2 border-green-600 drop-shadow rounded-xl" placeholder="Enter custom zone name.."/>
                            <label class="text-xs text-zinc-300 w-full text-center" for="customCode"> Available! </label>
                        </div>
                        {/if}
                            <button class="p-2 bg-zinc-600 text-white drop-shadow-sm rounded-xl hover:bg-zinc-800 hover:drop-shadow-md" type="submit"> Check! </button>
                    </div>
                {/if}
            </form>

            <form action="?/createZone" method="post" use:zoneEnhance class="flex flex-col mx-auto my-8 gap-8 p-8 border border-zinc-200 rounded-2xl">
                <p> {form?.message} </p>
                <div class="max-h-60">
                    <label for="linkzone_intro" class="block mb-2 text-sm text-zinc-600 "> Introduce your LinkZone </label>
                    <textarea required id="linkzone_intro" name="linkzone_intro" rows="4" class="block p-2.5 w-full text-md text-zinc-900 bg-zinc-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Introduction..."></textarea>
                </div>

                <div id="link drawer" class="grid grid-rows-2">
                {#each links as link, id}
                    <LinkRow url={link} id={id} bind:links={links} />
                {/each}
                </div>

                <button type="submit" class="p-4 border bg-zinc-800 text-white border-zinc-200 rounded-full drop-shadow-sm hover:bg-zinc-600 hover:drop-shadow-md"> Create  LinkZone </button>

            </form>
    
        </div>
    </div>
   
    
</div>



<style lang="postcss">

</style>
