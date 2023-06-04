(function (doc, win) {
  let fn = () => {
    let docEl = doc.documentElement,
      clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = 100 * (clientWidth / 1920) + "px";
  };
  if (!doc.addEventListener) return;
  win.addEventListener("resize", fn);
  doc.addEventListener("DOMContentLoaded", fn);
})(document, window);

// add back button click event
const back = document.getElementById("back");
if (back) {
  back.addEventListener("click", function() {
    history.back();
  });
}
