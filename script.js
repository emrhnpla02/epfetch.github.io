window.onload = () => {
  const terminals = document.querySelectorAll(".terminal"),
    commandSpan = document.querySelector("#command"),
    command = "epfetch";

  setTimeout(() => {
    let j = 0;
    terminals[0].children[1].classList = "cursor";
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

    terminals[0].children[1].classList = "";

    let i = 0;
    const loop = setInterval(() => {
      items[i++].style.display = "block";
      if (i >= items.length) clearInterval(loop);
    }, 50);

    setTimeout(() => {
      paletteDiv.style.display = "grid";
      terminals[1].style.display = "block";
      terminals[1].children[1].classList = "cursor blink";
    }, 50 * items.length);
  };
};
