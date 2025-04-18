function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
        strings: "No matter how the skies my be",
        autoStart: true,
        delay: 1,
        cursor: "",
    });

}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);