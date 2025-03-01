<script>
  import Header from "$lib/header.svelte";
</script>

<Header title="hi" />

<main>
  <slot />
</main>

<style>
  main {
    margin-top: 2rem; 
    padding: 1rem;
  }
</style>
