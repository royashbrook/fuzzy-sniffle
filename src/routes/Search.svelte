<script>
  import { getSearchResults, searchResults } from '../stores/search/search'
  import matchTypes from '../stores/preferences/matchTypes'
  import { data } from '../stores/graph/data'
  import { preferences } from '../stores/preferences/preferences'
  import SearchResults from '../components/SearchResults.svelte'
  import Spinner from '../components/Spinner.svelte'
  let searching = false
  let error = false
  const handleChange = async (e) => {
    console.table($preferences)

    //set base query
    let sql = ['select top 15']

    //set fields to select
    let fields = ['c["74"]']

    //push any additional show fields to our sql
    $preferences
      .filter((x) => x.show)
      .forEach((x) => fields.push(`c["${x.id}"]`))

    //push our fields to our sql
    sql.push(fields.join(','))

    //push the base from clause
    sql.push('from c where')

    //set base conditions
    let conditions = ['c["74"] <> ""']

    //push conditions defined by user, use params
    let userprefs = $preferences
      .filter((x) => x.search)
      .filter((x) => x.value !== '')
      .map((x) => ({
        id: x.id,
        op: x.match.match('%') ? 'like' : '=',
        val: x.match.replace('=',x.value),
      }))

    
      userprefs.forEach((x) => {
        conditions.push(`c["${x.id}"] ${x.op} @p${x.id}`)
      })

    //push conditions to our sql
    sql.push(conditions.join(' and '))

    //define our parameter values for the cosmos query
    let params = userprefs
      .map((x) => ({
        name: `@p${x.id}`,
        value: x.val
      }))

    //create our query object to pass to cosmos
    let query = {
      query: sql.join(' '),
      parameters: params
    }

    searching = true
    await getSearchResults(query)
      .then((_) => (searching = false))
      .catch((err) => {
        searching = false
        error = true
        console.log(err)
      })
  }

  let mypref
  $: mypref = $preferences.filter((x) => x.search)
</script>

{#each mypref as p}
  <p>
    <b>{p.name}</b>
    <code>{matchTypes.find((x) => x.value === p.match).text}</code>
  </p>
  <input
    id={p.id}
    placeholder="Type a value to search and hit enter."
    on:change={handleChange}
    bind:value={p.value} />
  <br />
{/each}

{#if mypref.length === 0}
  No search fields enabled. Please check preferences.
{/if}

{#if searching}
  <Spinner message={'Getting data...'} />
{/if}

{#if error}
  <code>An error has ocurred while searching.</code>
{/if}

<SearchResults />
