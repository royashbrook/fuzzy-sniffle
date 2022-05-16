import { writable, get } from 'svelte/store';
import { preferences } from '../preferences/preferences'
export const query = writable(null);

export const buildQuery = async (vals) => {

}

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