(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  const blue = () => (header.style.color = "blue");
  document.querySelector("body").addEventListener("click", blue);
})();
