<script>
  export let searchResult
  import DownloadButton from './DownloadButton.svelte'
  import docProps from '../stores/preferences/docProps'
  import docTypes from '../stores/preferences/docTypes'
  const propKeyToName = (k) => docProps.find((x) => x.id == k)?.name
  const typeKeyToName = (k) => docTypes.find((x) => x.id == k)?.name
</script>

<style>
  div {
    display: inline-block;
    font-size: x-small;
    padding: 1rem;
    transition: transform 0.2s; /* Animation */
    margin: 0.25rem;
    border-radius: 0.25rem;
    border: 1px solid lightslategray;
  }
  div:hover {
    border: 1px solid grey;
    background-color: #f5f7ff;
    transform: scale(1.75);
  }
  p.head, p.foot {
    text-align: center;
  }
  p.body{
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
</style>

<div class="zoom">
  <p class="head">
    <b>{typeKeyToName(searchResult['72'])}</b>
  </p>
  <p class="body">
    {#each Object.keys(searchResult) as key}
      {#if propKeyToName(key)}
        <b>{propKeyToName(key)}</b>
        : {searchResult[key]}
        <br />
      {/if}
    {/each}
  </p>
  <p class="foot">
    <DownloadButton {searchResult} />
  </p>
  
</div>
