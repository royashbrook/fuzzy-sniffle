<script>
  import { getSearchResults, searchResults } from '../stores/search/search'
  import SearchResults from '../components/SearchResults.svelte'
  const handleChange = async (e) => {
    await getSearchResults(e.srcElement.value)
  }
</script>

<h4>Document Search:</h4>
<input
  placeholder="Type a value to search and hit enter."
  on:change={handleChange} />

<SearchResults />
