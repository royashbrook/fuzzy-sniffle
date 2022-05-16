// Components
import Home from './routes/Home.svelte'
import Preferences from './routes/Preferences.svelte'
import NotFound from './routes/NotFound.svelte'

// Export the route definition object
export default {
    '/': Home,
    '/preferences': Preferences,
    '*': NotFound,
}