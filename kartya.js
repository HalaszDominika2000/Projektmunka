/*CSAK GYAKORLAS NEM A PROJEKTMUNKAHOZ*/
document.addEventListener("DOMContentLoaded", () => { /*addEventListener: kattintásesemény, kattintás funkció*/
    /*A fő <main>-be új article elemet teszünk, amiben a kártyák lesznek*/ /*const: létrehoz, létrehoz egy változót, blokk szintu {}, azonnal kell neki erteket adni, nem ujradekralalhato tehát nem lehet ujra letrehozni es nem lehet az erteket modositani, altalaban listakhoz hasznaljuk*/
    const main = document.querySelector("main"); /*querySelector: hozzáad a mainhez tulajdonságokat*/
    const article = document.createElement("article"); /*createElement: létrehoz egy új elemet*/
    main.insertBefore(article, main.querySelector("footer")); /*insertBefore: egy elemet beszurunk egy másik elem elé, ami elöl van a kodba az elé szurjuk a másik elemet*/
    /*var: fuggveny szintu, egy funkcion belul mukodik csak ugyan azzal a nevvel letrehozhato es mindig a kod elejere ertelmezi, kod vegere rakom akkor is az elejen ertelmezi a vart*/
    /*let: blokk szintu hatokor kozott ertelmezodik{}, nem lehet letrehozni ugyan azzal a nevvel de lehet modositani az erteket*/


    /*Adatok amik a kártyában lesznek*/
    const epizodok = [
        {
            cim: "Első évad",
            kep: "Kepek/1evad.jpg",
            leiras: `1. epizód – The National Anthem (A nemzeti himnusz)
                    Egy brit hercegnőt elrabolnak, és a túszejtő követelése az,
                    hogy a miniszterelnök élő adásban vállaljon el egy megalázó cselekedetet
                    az ország nyilvánossága előtt. Az epizód a média, a közvélemény
                    és a politikai nyomás kapcsolatát vizsgálja – és azt,
                    hogyan hat a modern technológia az emberi erkölcsre.`
        },
        {
            cim: "Második évad",
            kep: "Kepek/2evad.jpg",
            leiras: `1. epizód – Be Right Back (Azonnal jövök)
                    Martha és Ash boldog párkapcsolatban élnek, de Ash egy autóbalesetben meghal.
                    Martha később egy új online szolgáltatás segítségével „visszahozza” 
                    szerelmét – először egy chatprogramon keresztül, majd egy emberi testbe
                    ültetett mesterséges intelligenciaként.
                    A rész az emberi gyász feldolgozását és az MI által teremtett hamis érzelmi
                    kapcsolatokat vizsgálja.`
        },
        {
            cim: "Harmadik évad",
            kep: "Kepek/3evad.jpg",
            leiras: `1. epizód – Nosedive (Zuhanás)
                    Egy világban, ahol mindenki pontszámot kap a viselkedéséért és társas
                    interakcióiért (mint egy valóságos közösségi médiás rangsor),
                    Lacie megpróbálja növelni a saját értékelését, hogy jobb életet élhessen.
                    A rész a külsőségek, az online elismerés hajszolása és a társadalmi
                    megfelelési kényszer kegyetlen szatírája.`
        },
        {
            cim: "Negyedik évad",
            kep: "Kepek/4evad.jpg",
            leiras: `1. epizód – USS Callister
                    Egy zseniális, de magának való programozó saját, Star Trek-szerű
                    videojáték-univerzumot hoz létre, ahol a kollégái digitális másolatait
                    tartja fogva, hogy felettük uralkodhasson.
                    Egy sötét, mégis szatirikus történet a hatalommal való visszaélésről,
                    az egoizmusról és a virtuális világban elnyomott
                    „digitális tudatok” etikájáról.`
        },
        {
            cim: "Ötödik évad",
            kep: "Kepek/5evad.jpg",
            leiras: `2. epizód – Smithereens (Törött tükrök)
                    Egy taxisofőr túszul ejt egy alkalmazottat egy hatalmas közösségi média cégnél,
                    hogy kapcsolatba léphessen annak vezérigazgatójával. 
                    A helyzet egyre feszültebbé válik, miközben kiderül, 
                    hogy a férfi tragikus okból hibáztatja a közösségi médiát.
                    Egy feszült dráma a figyelemelterelés,
                    a telefonfüggőség és a digitális bűntudat témáiról.`
        },
        {
            cim: "Hatodik évad",
            kep: "Kepek/6evad.jpg",
            leiras: `1. epizód – Joan Is Awful (Joan szörnyeteg)
                    Joan, egy átlagos nő, ledöbben, amikor egy új streaming platformon
                    megjelenik egy sorozat, amely valós időben dramatizálja az ő 
                    életét – minden apró hibájával és titkával együtt.
                    Szatirikus történet a médiamanipulációról,
                    az adatvédelmi visszaélésekről és a mesterséges intelligenciával
                    készült tartalmak veszélyeiről.
                    (Salma Hayek is szerepel benne, saját magát alakítva.)`
        },
        {
            cim: "Hetedik évad",
            kep: "Kepek/7evad.jpg",
            leiras: `2. epizód – Little Brother
                    Egy jövőbeli társadalomban a testvérek közötti kapcsolatot is megfigyelő
                    rendszerek irányítják. Egy fiú megpróbálja megmenteni bátyját a kormány
                    mesterséges intelligenciás megfigyelésétől.
                    Egy érzelmes sci-fi a bizalomról és az ellenőrzésről.`
        }
    ];

    /*Bootstrap grid konténer létrehozása*/
    const row = document.createElement("div");
    row.className = "row row-cols-1 row-cols-md-3 g-4"; /*className: hozza adas a row hoz, ez lesz a neve*/
    article.appendChild(row); /*appentChild hozzá ad egy elemet (row) az articlehez*/

    /*Kártyák generálása*/
    epizodok.forEach(epizod => {
        const col = document.createElement("div");
        col.className = "col";

        const card = document.createElement("div");
        card.className = "card h-100 bg-dark text-white";

        const img = document.createElement("img");
        img.src = epizod.kep;
        img.alt = epizod.cim;
        img.className = "card-img-top"; /* Ezzel beállítom hogy a kép a kártya tetején legyen*/

        const body = document.createElement("div");
        body.className = "card-body"; /* A kártya bodyja*/

        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = epizod.cim; /* A kártyák címei h5 nagyságban*/

        const text = document.createElement("p");
        text.className = "card-text";
        text.textContent = epizod.leiras; /* A p leírásért felel a kártyában*/

        /*Görgethető szöveg*/
        text.style.maxHeight = "120px";
        text.style.overflowY = "auto";

        /* Scrollbar stílus JS-ből WebKit böngészőkhöz */
        text.style.scrollbarWidth = "thin"; // Firefox
        text.style.scrollbarColor = "#f01410ff #1f1e1eff"; // Firefox

        // WebKit megoldás (Chrome, Edge, Safari)
        text.style.cssText += `
            &::-webkit-scrollbar { width: 8px; }
            &::-webkit-scrollbar-track { background: #1a1a1a; }
            &::-webkit-scrollbar-thumb { background-color: #000; border-radius: 4px; }
        `;

    

        /*Lábléc*/
        const footer = document.createElement("div");
        footer.className = "card-footer text-muted";
        footer.innerHTML = "<small>Black Mirror Évadok</small>"; /* Itt lesz a lábléc szövege*/

        /*Összeállítás appendChild body-hoz hozzáad egy tulajdonságot*/
        body.appendChild(title);
        body.appendChild(text);
        card.appendChild(img);
        card.appendChild(body);
        card.appendChild(footer);
        col.appendChild(card);
        row.appendChild(col);
    });
});


