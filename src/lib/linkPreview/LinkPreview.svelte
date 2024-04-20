<script>
    import "./LinkPreview.css";
    export let url;
    export let proxyUrl;
    export let width = null;
    export let height = null;
    export let className = "";
    export let imageHeight = null;
    export let textAlign = null;
    export let description = "";
    
    async function getMetadata(url2) {
      const data = await fetch(`${proxyUrl}/${url2}`, {
        headers: {
          "origin": document.URL
        }
      }).then((res) => res.text()).then((html) => parseHtml(html));
      return data;
    }
    function parseHtml(html) {
      let data = {
        title: "",
        description: "",
        image: "",
        siteName: "",
        hostname: ""
      };
      var el = document.createElement("html");
      html = html.split("<head>")[1].split("</head>")[0];
      el.innerHTML = html;
      let test = el.querySelector('meta[property="og:title"]');
      data.title = test?.content ?? null;
      test = el.querySelector('meta[property="og:description"]');
      data.description = test?.content ?? null;
      test = el.querySelector('meta[property="og:image"]');
      data.image = test?.content ?? null;
      test = el.querySelector('meta[property="og:site_name"]');
      data.siteName = test?.content ?? null;
      test = el.querySelector('meta[property="og:url"]');
      data.hostname = test?.content ?? null;
      return data;
    }
    function clickHandler(e) {
      window.open(url, "_blank");
    }
    const placeholderImg = "https://i.imgur.com/UeDNBNQ.jpeg";
    $:
      metadata = getMetadata(url);
    </script>
    
    <div
        class={`Container ${className}` + '!h-48 bg-zinc-200 dark:bg-zinc-900 border dark:border-zinc-900 rounded-xl'}
        on:click={clickHandler}>
        {#await metadata then data}
            <div
                class="Image"
                style={`background-image:url(${data.image || placeholderImg});height:${imageHeight}`}/>
            <div class="LowerContainer bg-zinc-200 dark:bg-zinc-900">
                <h3 class="Title">{data.title || ''}</h3>
                <span class="Description Secondary ">{description || ''}</span>
                <!-- <div class="Secondary SiteDetails">
                    {#if data.siteName}
                        <span>{data.siteName} • </span>
                    {/if}
                    <span>{data.hostname || ''}</span>
                </div> -->
            </div>
        {/await}
    </div>

<style>
:root {
	--primary: black;
	--secondary: rgb(100, 100, 100);
}

/* common */
.Container {
	text-align: left;
	display: flex;
	flex-direction: column;
	color: var(--primary);
	transition: 0.3s all ease;
	height: fit-content;
}

.Container:hover {
	background-color: rgb(250, 250, 250) !important;
	cursor: pointer;
}

.Secondary {
	color: var(--secondary);
}

.LowerContainer {
	padding: 10px;
}

.Title {
	margin-top: 0;
	margin-bottom: 10px;
}

.Image {
	width: 100%;
	border-top-left-radius: 7px;
	border-top-right-radius: 7px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	height: 30vh;
}

.SiteDetails {
	margin-top: 10px;
}
</style>