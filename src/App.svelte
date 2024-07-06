<script>
  import Skills from './lib/Skills.svelte';
  import Header from './lib/Header.svelte';
  import Projects from './lib/Projects.svelte';
  import Footer from './lib/Footer.svelte';
</script>

<style> 
@import './css/main.css';
:global(*) {
  margin: 0;
}

</style>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Portfolio</title>

<Header />

<body>
<Projects />
<Skills />
<Footer />
</body>