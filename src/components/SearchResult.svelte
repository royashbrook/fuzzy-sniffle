<script>
  export let searchResult
  import DownloadButton from './DownloadButton.svelte'
  import { fade } from 'svelte/transition';
  import { docProps } from '../stores/preferences/preferences'
  const propKeyToName = k => docProps.find(x=>x.id == k)?.name
</script>

<div transition:fade>
  {#each Object.keys(searchResult) as key}
  {#if propKeyToName(key)}
  <b>{propKeyToName(key)}</b>: {searchResult[key]}<br />
  {/if}
    
  {/each}
  <!-- <pre>{JSON.stringify(searchResult, null, 2)}</pre> -->
  <DownloadButton {searchResult} />
</div>

<style>
  div {
    display:inline-block;
    font-size:xx-small;
    margin:0.25rem;
  }
  pre {
    width:10rem;
    height:10rem;
  }
</style>