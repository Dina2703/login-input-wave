const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    // split each inner letter into an array of letters
    .split("")
    // map each letter to create an element wrapped in 'span' tags
    .map(
      (letter, index) =>
        `<span style='transition-delay: ${index * 50}ms'>${letter}</span>`
    )
    //then we're turning it back into a string
    .join("");
});
