<script>
  import { preferences, resetPreferences, setPreference } from '../stores/preferences/preferences'
  import matchTypes from '../stores/preferences/matchTypes'
  import docTypes from '../stores/preferences/docTypes'

</script>

<p>These options change which fields you can search by, what kind of match is used for those fields, and which document types you return in your searches. You can hit the <code>Reset Preferences</code> button to reset to a base/default. Settings will be saved in your browser so you will not have to reset them every time you search.</p>
<p>Please note that all searches are case-sensitive and regardless of whether or not a field is set to 'Show' it will only appear in the search results if it has data in it. Blank values will be omitted from the output.</p>
<button on:click={resetPreferences}>Reset Preferences</button>

{#if $preferences}
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Field Name</th>
      <th>Search</th>
      <th>Match</th>
      <th>Show</th>
    </tr>
  </thead>
  <tbody>
    {#each $preferences as r}
      <tr>
        <td>{r.id}</td>
        <td>{r.name}</td>
        <td style="text-align:center;">
          <input type="checkbox" bind:checked={r.search} on:click={()=>setPreference(r.id,"search",!r.search)} />
        </td>
        <td>
          <select style="width:100%;" bind:value={r.match}>
            {#each matchTypes as m}
            <option value={m.value} selected>{m.text}</option>
            {/each}
          </select>
        </td>
        <td style="text-align:center;"><input type="checkbox" bind:checked={r.show} on:click={()=>setPreference(r.id,"show",!r.show)} /></td>
      </tr>
    {/each}
  </tbody>
</table>
{/if}
