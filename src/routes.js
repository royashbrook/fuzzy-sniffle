// Components
import Search from './routes/Search.svelte'
import Preferences from './routes/Preferences.svelte'

// Export the route definition object
export default {
    '/preferences': Preferences,
    '*': Search,
}