<script>
  import "$lib/landingpage.css";

  let responses = [
    { id: 1, question: "What are your dietary preferences?", value: "" },
    { id: 2, question: "Do you have any food allergies?", value: "" },
    { id: 3, question: "Any other dietary restrictions?", value: "" },
  ];

  
  function handleSubmit() {
    console.log("User responses:", responses);
  }
</script>

<div class="container">
  <h1>Tell us a little about yourself!</h1>

  <div class="textareas-container">
    {#each responses as response (response.id)}
      <div class="question-container">
        <label for={"response-" + response.id} class="question-label">
          {response.question}
        </label>
        <textarea
          id={"response-" + response.id}
          bind:value={response.value}
          placeholder="uwu baka >w<"
          rows="4"
        ></textarea>
      </div>
    {/each}
  </div>

  <button on:click={handleSubmit}>Submit</button>
</div>
