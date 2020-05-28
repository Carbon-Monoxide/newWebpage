function changeContent(revealElementId, hideElementId, unactiveElementId, activeElementId) {
  let revealing = $(`#${revealElementId}`) [0];
  let hiding = $(`#${hideElementId}`) [0];
  let unactiveNav = $(`#${unactiveElementId}`) [0];
  let activeNav = $(`#${activeElementId}`) [0];


  hiding.classList = `invisible`;
  revealing.classList = `visible`;

  unactiveNav.classList = '';
  activeNav.classList = 'active'
}

function startVanta() {
  VANTA.NET({
    el: "#vanta",
    mouseControls: true,
    touchControls: false,
    minHeight: 0,
    minWidth: 0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x3fb3ff,
    backgroundColor: 0xe041f,
  });

//   let vantaCanvas = $("#vanta canvas") [0];
  let vantaCanvas = document.querySelector("#vanta canvas");
  console.log(vantaCanvas);
  vantaCanvas.style.height = "100%";
  vantaCanvas.style.width = "100%";
}

function loadPage() {
  startVanta();
  $("#information").load("projects.html");
}

$(document).ready(function () {
  loadPage();
});

function loadCovidProject (content) {
  $(`#${content}`).load("/covid-19-project/public/index.html");

}