<script>
  import { getSearchResults, searchResults } from '../stores/search/search'
  import SearchResults from '../components/SearchResults.svelte'
  import Spinner from '../components/Spinner.svelte'
  let searching = false
  const handleChange = async (e) => {
    searching = true
    await getSearchResults(e.srcElement.value)
    searching = false
  }
</script>

<h4>Document Search:</h4>
<input
  placeholder="Type a value to search and hit enter."
  on:change={handleChange} />

{#if searching}
<Spinner message={'Getting data...'} />
{/if}

<SearchResults />
