<script>
  import { getSearchResults, searchResults } from '../stores/search/search'
  import { data } from '../stores/graph/data'
  import { preferences } from '../stores/preferences/preferences'
  import SearchResults from '../components/SearchResults.svelte'
  import Spinner from '../components/Spinner.svelte'
  let searching = false
  let error = false
  const handleChange = async (e) => {
    
    let list = ['lower(c["74"]) like "%.%"']
    let inputs = document
      .querySelectorAll('input')
      .forEach( input => {
      if(input.value.length > 0){
        list.push(`lower(c["${input.id}"]) like lower("%${input.value}%")`)
      }
    })
    if(list.length === 0){
      return;
    }
    
    let query = `select top 10 * from c where ${list.join(' and ')}`

    searching = true
    await getSearchResults(query)
    .then(_ => searching = false)
    .catch(err => {
      searching = false
      error = true
      console.log(err)
    })
  }
  let mypref
  $: mypref = $preferences
</script>

{#each mypref.filter(x=>x.selected) as p}
  <input
    id={p.id}
    placeholder="Type a value to search and hit enter."
    on:change={handleChange} /> - {p.name}<br />
{/each}

{#if mypref.filter(x=>x.selected).length === 0}
  No search fields enabled. Please check preferences.
{/if}

{#if searching}
  <Spinner message={'Getting data...'} />
{/if}

{#if error}
  <code>An error has ocurred while searching.</code>>
{/if}

<SearchResults />
