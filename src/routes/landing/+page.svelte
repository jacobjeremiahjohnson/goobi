<script>
  import "$lib/landingpage.css";
  export let title = "Landing Page";
  let responses = [
    { id: 1, question: "What are your dietary preferences?", value: "" },
    { id: 2, question: "Do you have any food allergies?", value: "" },
    { id: 3, question: "Any other dietary restrictions?", value: "" },
  ];

  let confirmationData = null; // store the confirmation data
  let isSubmitted = false; // toggle between form and confirmation screen

  // for now i simulate API call and response
  async function handleSubmit() {
    console.log("User responses:", responses);
    
    // call Gemini API (this is fake for now)
    const simulatedApiResponse = await mockGeminiApiCall(responses);
    
    
    confirmationData = simulatedApiResponse;
    isSubmitted = true; // screen for confirmation.
  }

  // this is just something fake for now.
  async function mockGeminiApiCall(responses) {
    return {
      dietaryPreferences: "Vegetarian",
      foodAllergies: "Gluten-Free",
      otherRestrictions: "No Dairy",
    };
  }

  async function finalizeSubmission() {
    console.log("Final submission to API:", responses);
    // also fake here
    alert("tee hee bakaaa");
  }
</script>

<div class="container">
  <h1>Tell us a little about yourself!</h1>

  {#if !isSubmitted}
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
  {:else}
    <div class="confirmation-container">
      <h2>Did we get that right?</h2>
      <p><strong>Dietary Preferences:</strong> {confirmationData.dietaryPreferences}</p>
      <p><strong>Food Allergies:</strong> {confirmationData.foodAllergies}</p>
      <p><strong>Other Restrictions:</strong> {confirmationData.otherRestrictions}</p>

      <div>
        <button on:click={() => isSubmitted = false}>Edit Responses</button>
        <button on:click={finalizeSubmission}>Confirm & Submit</button>
      </div>
    </div>
  {/if}
</div>
