<h1>Document Search</h1>
<nav>
  <a href="#/">Home</a>
  <a href="#/Preferences">Preferences</a>
</nav>

<script>
  //debug stuff can go here
  import { data } from '../stores/graph/data'
  import { preferences } from '../stores/preferences/preferences'
  $: console.log($data)
  $: console.log($preferences)
</script>