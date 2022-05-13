//https://docs.microsoft.com/en-us/graph/api/resources/driveitem?view=graph-rest-1.0
const URI = 'https://graph.microsoft.com/v1.0/drives'
const drive = 'b!2Tl8A9ahDkyiUMF1725FAHKChU6-EMFCuWGNtEdO28gIyrbfpKIMQJqcbyIVlWgD'
const item = '01W7LCS7U5LWDREX6F3FCKBHJ6J5224ZAX'
const sel = '$select=name,lastModifiedDateTime,content.downloadUrl'
export const graphContentEndpoint =
    `${URI}/${drive}/items/${item}/children?${sel}`