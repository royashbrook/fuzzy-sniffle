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
  div {
    width: 12rem;
  }
</style>

<div>
  <a target="_blank" {href}>Download
  </a>
</div>

