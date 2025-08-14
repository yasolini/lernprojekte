window.onload = () => {
  const form = document.getElementById("formular");
  const hautptdiv = document.getElementById("hauptdiv");
  let liste = new Map();

  form.onsubmit = (event) => {
    event.preventDefault();

    const suche = document.getElementById("suche");
    const inhalt = document.getElementById("text");

    const kategorie = suche.value;
    const neueWerte = inhalt.value.split(",");
    var aktuelleWerte = [];

    if (liste.has(kategorie)) {
      aktuelleWerte = liste.get(kategorie);
      neueWerte.forEach((wert) => {
        aktuelleWerte.push({ value: wert, count: 0 });
      });
      liste.set(kategorie, aktuelleWerte);
      console.log(liste);
    } else {
      aktuelleWerte = neueWerte.map((wert) => ({ value: wert, count: 0 }));
      liste.set(suche.value, aktuelleWerte);
      console.log(liste);
    }
    suche.value = "";
    inhalt.value = "";

    aktualisiereAnzeige();
  };

  function aktualisiereAnzeige() {
    hautptdiv.innerHTML = "";

    liste.forEach((werte, kategorie) => {
      const div = document.createElement("div");
      div.innerHTML = kategorie + ":" + "<br>";

      werte.forEach((wertObj) => {
        const wertDiv = document.createElement("div");
        const plus = document.createElement("button");
        plus.innerHTML = "+";
        plus.addEventListener("click", () => {
          wertObj.count = wertObj.count + 1;
          aktualisiereAnzeige();
        });

        const minus = document.createElement("button");
        minus.innerHTML = "-";
        minus.addEventListener("click", () => {
          wertObj.count = Math.max(0, wertObj.count - 1);
          aktualisiereAnzeige();
        });

        const p = document.createElement("p");
        p.innerHTML = wertObj.value + ": " + wertObj.count;

        wertDiv.appendChild(plus);
        wertDiv.appendChild(p);
        wertDiv.appendChild(minus);

        div.appendChild(wertDiv);
      });

      hautptdiv.appendChild(div);
    });
  }
};
