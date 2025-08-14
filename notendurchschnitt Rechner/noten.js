window.onload = () => {
  const anzahl = document.getElementById("anzahl");
  const div = document.getElementById("container");
  const button = document.getElementById("button");
  const p = document.getElementById("p");

  anzahl.addEventListener("input", () => {
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }

    for (i = 1; i <= anzahl.value; i++) {
      const label1 = document.createElement("label");
      const label2 = document.createElement("label");
      const input = document.createElement("input");
      const note = document.createElement("input");
      note.type = "number";
      note.min = "1";
      note.name = "hans";
      input.setAttribute = ("type", "text");
      label1.innerHTML = "Fach: ";
      label2.innerHTML = "Note: ";

      div.appendChild(label1);
      div.appendChild(input);
      div.appendChild(label2);
      div.appendChild(note);
      div.appendChild(document.createElement("br"));
    }
  });
  button.addEventListener("click", () => {
    const noten = document.getElementsByName("hans");
    console.log(noten);
    var erg = 0;
    for (var i = 0; i < noten.length; i++) {
      var z = parseInt(noten[i].value);
      erg += z;
      console.log(erg);
    }
    var durchschnitt = erg / noten.length;
    p.innerHTML = durchschnitt;
  });
};
