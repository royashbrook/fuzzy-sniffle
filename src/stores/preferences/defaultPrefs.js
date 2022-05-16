import docProps from './docProps';
import docTypes from './docTypes';

export default docProps
  // .filter(x =>
  //   !["25", "27", "69", "71", "72", "73"].includes(x.id)
  // )
  .sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);

