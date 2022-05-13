//https://docs.microsoft.com/en-us/graph/api/resources/driveitem?view=graph-rest-1.0
const URI = 'https://graph.microsoft.com/v1.0/drives'
const drive = 'b!cgsRbRgvX0-zTS5CPVyZGFVQzkkRmOxIpWJfTr6WB9muzopQ456cSLr_cHWuNw72'
const item = '012AUK3FLNKPHCWRFXBFAJH6NC3FCNOSUW'
const sel = '$select=name,lastModifiedDateTime,content.downloadUrl'
export const graphContentEndpoint =
    `${URI}/${drive}/items/${item}/children?${sel}`