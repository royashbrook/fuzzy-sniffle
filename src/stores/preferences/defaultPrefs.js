import docProps from './docProps';
import docTypes from './docTypes';

const s = (a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0

export default {
  upperCase: true,
  props: docProps.sort((a, b) => s(a,b)),
  docs: docTypes.sort((a, b) => s(a,b)),
}

