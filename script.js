// Get references to HTML elements
const adviceId = document.getElementById("advice-id");      
const adviceTxt = document.getElementById("advice-text");  
const adviceBtn = document.getElementById("generate-btn"); 

const url = "https://api.adviceslip.com/advice";            // API endpoint for advice retrieval

// Function to generate advice
async function adviceGenerator() {
  const response = await fetch(url);          // Send a GET request to the API endpoint
  const { slip: {id, advice} } = await response.json();  // Extract the advice ID and text from the response

  // Update the HTML elements with the new advice
  adviceId.innerText = id;
  adviceTxt.innerText = advice;
}

adviceGenerator();  // Generate advice on page load

adviceBtn.addEventListener("click", adviceGenerator);  // Add event listener to the button, so it generates new advice on click
