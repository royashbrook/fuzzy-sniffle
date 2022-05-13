<script>
import { searchResults } from '../stores/search/search'
import SearchResult from './SearchResult.svelte';
</script>

<h5>Results:</h5>

{#if $searchResults}
    {#if $searchResults.length === 0}
        <h5><code>No search results</code></h5>
    {:else}
      {#each $searchResults as searchResult}
        <SearchResult {searchResult} />
      {/each}
    {/if}
{/if}