/*CSAK GYAKORLAS NEM A PROJEKTMUNKAHOZ*/

document.addEventListener("DOMContentLoaded", () => {
    /*A fő <main>-be új article elemet teszünk, amiben a kártyák lesznek*/
    const main = document.querySelector("main");
    const article = document.createElement("article");
    main.insertBefore(article, main.querySelector("footer"));

    /*Adatok amik a kártyában lesznek*/
    const epizodok = [
        {
            cim: "Szemtükör",
            kep: "Kepek/Szemtukor.jpg",
            leiras: `A tanárnő Amanda és a munkás Mike egy boldog pár, akik szeretnének
            gyereket vállalni. Amandánál egy nap gyógyíthatatlan agydaganatot diagnosztizálnak,
            ám felmerül egy megoldás: a Rivermind nevű cég ingyen elvégezteti a műtétet,
            cserébe a nő fejébe szintetikus anyag kerül. Amanda önkéntelenül reklámokat kezd
            bemondani, a tanári állása is veszélybe kerül...`
        },
        {
            cim: "Fehér karácsony",
            kep: "Kepek/Feherkaracsony.jpg",
            leiras: `Két férfi egy távoli helyen meséli el egymásnak múltját, miközben
            egy sötét titok kerül napvilágra. Az epizód három külön történetet fűz össze
            egy meglepő, nyomasztó befejezéssel.`
        },
        {
            cim: "Nosedive – Szabadesés",
            kep: "Kepek/Szabadeses.jpg",
            leiras: `Egy világban, ahol mindenki csillagokkal értékel mindenkit,
            egy nő élete összeomlik, amikor a tökéletes pontszámért folytatott harcban
            elveszíti a kapcsolatot a valósággal.`
        },
        {
            cim: "USS Callister",
            kep: "Kepek/USSCallister.jpg",
            leiras: `Egy zseniális, de elnyomott programozó a saját
            űrhajós videojáték-univerzumába zárja kollégáit. Az epizód a hatalomról és
            a virtuális valóság veszélyeiről szól.`
        }
    ];

    /*Bootstrap grid konténer létrehozása*/
    const row = document.createElement("div");
    row.className = "row row-cols-1 row-cols-md-3 g-4";
    article.appendChild(row);

    /*Kártyák generálása*/
    epizodok.forEach(epizod => {
        const col = document.createElement("div");
        col.className = "col";

        const card = document.createElement("div");
        card.className = "card h-100 bg-dark text-white";

        const img = document.createElement("img");
        img.src = epizod.kep;
        img.alt = epizod.cim;
        img.className = "card-img-top";

        const body = document.createElement("div");
        body.className = "card-body";

        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = epizod.cim;

        const text = document.createElement("p");
        text.className = "card-text";
        text.textContent = epizod.leiras;

        /*Görgethető szöveg*/
        text.style.maxHeight = "120px";
        text.style.overflowY = "auto";

        /*Lábléc*/
        const footer = document.createElement("div");
        footer.className = "card-footer text-muted";
        footer.innerHTML = "<small>Black Mirror epizód</small>";

        /*Összeállítás*/
        body.appendChild(title);
        body.appendChild(text);
        card.appendChild(img);
        card.appendChild(body);
        card.appendChild(footer);
        col.appendChild(card);
        row.appendChild(col);
    });
});
