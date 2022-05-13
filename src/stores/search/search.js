import { writable, get } from 'svelte/store';
import { data } from '../graph/data'
import { CosmosClient } from '@azure/cosmos'

export const searchResults = writable(null);

export const getSearchResults = async (searchString) => {

  //empty search results
  searchResults.set(null);

  //get cosmos settings and set query
  const secrets = get(data)
  const connectionString = secrets.cosmosConnection
  const endpoint = connectionString.match(/AccountEndpoint=([^;]*);/)[1]
  const key = connectionString.match(/AccountKey=([^;]*);/)[1]
  const databaseId = secrets.cosmosDatabase
  const containerId = secrets.cosmosContainer
  const qry = searchString
    //secrets.cosmosQuery
  // {
  //   query: "select top 10 * from c where c['72'] in ('4', '6', '33', '5') and c['70'] like '2018%' and c['74'] <> '' and @p1 = @p1",
  //   parameters: [
  //     {
  //       name: "@p1",
  //       value: `%${searchString}%`
  //     }
  //   ]
  // };

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