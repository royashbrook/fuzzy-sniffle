<script>
  window['dbg'] = window.location.href.includes('?debug')
  window['dbg'] && console.log('\n---debug messaging enabled---\n\n')
  import Content from './Content.svelte'
  import Spinner from './components/Spinner.svelte'
  import { getAuth, accessToken } from './stores/auth/auth'
  import { getData, data } from './stores/graph/data'
</script>

{#await getAuth()}
  <Spinner message={'Logging in...'} />
{:then _}
  {#await getData()}
    <Spinner message={'Getting secrets...'} />
  {:then _}
    <Content />
  {/await}
{/await}
