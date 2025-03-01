<script>
    import "$lib/landingpage.css";
    let userInput = "";
        function handleSubmit() {
        console.log("User input:", userInput);
  }
</script>
<div class="container">
  <h1>Tell us about your dietary preferences, and anything else that we might need to</h1>
  <textarea bind:value={userInput} placeholder="E.g.,, vegetarian, high protein, no dairy, etc."></textarea>
  <button on:click={handleSubmit}>Submit</button>
</div>