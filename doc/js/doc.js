function togglePrint(doPrint)
{
  var div = null;
  if (doPrint) {
    if (confirm("This document is optimized for online viewing. Some content might not fit well in a printout. Are you sure you want to print this document?")) {
      div = self.document.getElementById("div-Printable");
      if (div) {
        div.style.width = "600px";
      }
      div = self.document.getElementById("print_button");
      if (div) {
        div.value = "Return document to online display width";
        div.setAttribute('onclick','window.togglePrint(false);');
      }
    }
  }
  else {
    div = self.document.getElementById("div-Printable");
    if (div) {
      div.style.width = "1000px";
    }
    div = self.document.getElementById("print_button");
    if (div) {
      div.value = "Show document at a printable width";
        div.setAttribute('onclick','window.togglePrint(true);');
    }
  }
}
