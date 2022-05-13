<script>
  import Router from 'svelte-spa-router'
  import routes from './routes.js'
  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'
</script>

<header>
  <Header />
</header>
<main>
  <Router {routes} />
</main>
<footer>
  <Footer />
</footer>
