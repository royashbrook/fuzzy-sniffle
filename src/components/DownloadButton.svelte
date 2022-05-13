<script>
  export let searchResult
  import { data } from '../stores/graph/data'
  const secrets = $data
  const storageURI = secrets.storageURI
  const storageSAS = secrets.storageSAS
  const href = `${storageURI}${searchResult.filename}${storageSAS}`
</script>

<style>
  button {
    width: 100%;
  }
</style>

<a target="_blank" {href}>
  <button>{searchResult.filename}</button>
</a>
