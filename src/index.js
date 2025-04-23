function displayPoem(response) {
    console.log("Poem generated");
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "90t5c432bd27bfcd6607442a413e83oe";

    let prompt = `User instructions: Generate any poem about ${instructionsInput.value}`;
    let context = `You are a poem generator and you are really good at generating interesting and captivating poems.
Your mission is to generate a short poem with 4 lines using basic HTML. Separate each line with <br />.
Make sure to follow the user instructions. Do not include a title. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and not at the beginning.`;


    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    document.querySelector("#poem").innerHTML = `<div class="generating">⌛Generating your intresting poem about ${instructionsInput.value}</div>`;

    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);


    axios
        .get(apiURL)
        .then(displayPoem)
        .catch(function (error) {
            console.error("API error:", error);
            document.querySelector("#poem").innerHTML =
                "Oops! Something went wrong. Please try again.";
        });


}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
