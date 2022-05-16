<script>
  export let searchResult
  import DownloadButton from './DownloadButton.svelte'
  import docProps from '../stores/preferences/docProps'
  const propKeyToName = k => docProps.find(x=>x.id == k)?.name
</script>

<div class="zoom">
  {#each Object.keys(searchResult) as key}
  {#if propKeyToName(key)}
  <b>{propKeyToName(key)}</b>: {searchResult[key]}<br />
  {/if}
    
  {/each}
  <DownloadButton {searchResult} />
</div>

<style>
  div {
    display:inline-block;
    font-size:x-small;
    padding: 1rem;
    background-color: #f5f7ff;
    transition: transform .2s; /* Animation */
    margin: 0.25rem;
  }
  div:hover {
    border: 1px solid grey;
    transform: scale(2.0);
}

</style>