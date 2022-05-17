import { writable, get } from 'svelte/store';
import { data } from '../graph/data'
import { CosmosClient } from '@azure/cosmos'

export const searchResults = writable(null);

export const getSearchResults = async (qry) => {
  
  //get cosmos settings and set query
  const secrets = get(data)
  const endpoint = secrets.cosmosURI
  const key = secrets.cosmosKEY
  const databaseId = secrets.cosmosDatabase
  const containerId = secrets.cosmosContainer

  //create client
  const client = new CosmosClient({ endpoint, key })

  //set db and container
  const database = client.database(databaseId)
  const container = database.container(containerId)
  await container.items
    .query(qry)
    .fetchAll()
    .then(({ resources: items }) => searchResults.set(items))
    .catch((err) => console.log('error', err.message))

}
