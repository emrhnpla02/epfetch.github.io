window.onload = () => {
  const prompts = document.querySelectorAll(".prompt"),
    commandSpan = document.querySelector("#command"),
    command = "epfetch";

  setTimeout(() => {
    let j = 0;
    prompts[0].children[1].classList = "cursor";
    const commandloop = setInterval(() => {
      commandSpan.innerText += command[j++];
      if (j >= command.length) {
        epfetch();
        clearInterval(commandloop);
      }
    }, 200);
  }, 2000);

  const epfetch = () => {
    const items = document.querySelectorAll(".fetchitem"),
      paletteDiv = document.querySelector("#_palette");

    prompts[0].children[1].classList = "";

    let i = 0;
    const loop = setInterval(() => {
      items[i++].style.display = "block";
      if (i >= items.length) clearInterval(loop);
    }, 50);

    setTimeout(() => {
      paletteDiv.style.display = "grid";
      prompts[1].style.display = "block";
      prompts[1].children[1].classList = "cursor blink";
    }, 50 * items.length);
  };
};
