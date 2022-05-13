<script>
  export let searchResult
  import { data } from '../stores/graph/data'
  const secrets = $data
  const storageURI = secrets.storageURI
  const storageSAS = secrets.storageSAS
  const f = searchResult['74']
  const fileName = [f.substring(0, 3), f.substring(3, 6), f].join('/')
  //todo: update config to include container
  const href = `${storageURI}${fileName}${storageSAS}`
</script>

<style>
  button {
    width: 100%;
  }
</style>

<a target="_blank" {href}>
  <button>{f}</button>
</a>
