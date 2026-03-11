# Projekt Specifikáció - Reflex Tesztelő Játék

## Projekt leírás
A projekt egy webes alapú reflex tesztelő játék, amely a felhasználók reakcióidejét és szem-kéz koordinációját teszi próbára. A játékosoknak vizuális ingerekre (például felvillanó színekre vagy formákra) kell a lehető leggyorsabban reagálniuk a megfelelő billentyűk lenyomásával. A célközönség bárki, aki szeretné tesztelni vagy fejleszteni a reflexeit, legyen szó gamerekről, diákokról vagy kikapcsolódni vágyókról. Az alkalmazás méri a reakcióidőt (milliszekundumban), és a regisztrált felhasználók eredményeit egy globális ranglistán tárolja.

## Funkcionális követelmények

* **Felhasználókezelés (Autentikáció):**
  * Regisztráció (e-mail, jelszó, felhasználónév).
  * Bejelentkezés és kijelentkezés.

* **Játékmenet (Gameplay):**
  * Játék indítása (visszaszámlálással).
  * Billentyűzet-események (keydown) figyelése és feldolgozása.
  * Reakcióidő mérése (milliszekundum pontossággal) és pontszámítás (hibás gombnyomásért büntetés).
  * Játék vége (Game Over) képernyő megjelenítése az elért eredménnyel.

* **Adatkezelés és Ranglista:**
  * A bejelentkezett felhasználók elért eredményeinek automatikus mentése az adatbázisba.
  * Globális ranglista (Leaderboard) lekérdezése és megjelenítése (Top 10 játékos).
  * (Opcionális) Személyes statisztikák/eddigi legjobb eredmények megtekintése.

## Nem-funkcionális követelmények

* **Technológiai döntések:**
  * **Frontend:** HTML5, CSS3, JavaScript (opcionálisan React.js a komponensalapú felépítéshez).
  * **Backend és Autentikáció:** Firebase Authentication (a biztonságos bejelentkezéshez és regisztrációhoz).
  * **Adatbázis:** Firebase Cloud Firestore (NoSQL) a felhasználói profilok, pontszámok és statisztikák valós idejű tárolására.

* **Teljesítmény (Performance):**
  * Mivel reflexjátékról van szó, a frontendnek minimális késleltetéssel (latency) kell érzékelnie a gombnyomásokat. Az animációknak 60 FPS-sel kell futniuk a zavartalan élmény érdekében.
  * Gyors oldalbetöltés és aszinkron adatkommunikáció a ranglista valós idejű frissítésekor.

* **UX-elvárások:**
  * Jól látható, kontrasztos vizuális visszajelzések (pl. a képernyő egyértelműen zöldre vált, amikor nyomni kell).
  * Reszponzív layout, hogy bár asztali gépre (billentyűzetre) van tervezve a játék, az információs oldalak és a ranglista mobiltelefonon is olvashatók és esztétikusak maradjanak.

## Felhasználói szerepkörök
A rendszerben két fő interakciós mód (szerepkör) különíthető el:
1. **Látogató (Vendég):** Nem regisztrált, vagy be nem jelentkezett felhasználó. Megtekintheti a főoldalt, elolvashatja a játékszabályokat, és láthatja a globális ranglistát. Magával a játékkal nem játszhat (vagy ha igen, az eredménye nem kerül mentésre).
2. **Játékos (Regisztrált felhasználó):** Teljes hozzáféréssel rendelkezik. Bejelentkezés után elindíthatja a reflex tesztet, az elért eredményei rögzítésre kerülnek az adatbázisban, felkerülhet a ranglistára, és megtekintheti a saját profilját/eredményeit.

## Képernyő-lista / sitemap
Az alkalmazás az alábbi főbb oldalakból (nézetekből) épül fel:
* **Főoldal (`/`)**: Üdvözlő szöveg, rövid leírás a játékról, és hívószó (Call to Action) a játék indításához vagy bejelentkezéshez.
* **Autentikáció (`/login`, `/register`)**: Bejelentkezési és regisztrációs űrlapok.
* **Játéktér (`/game`)**: Maga a játék felülete (visszaszámláló, felvillanó ingerek, aktuális pontszám mutatása). Ideális esetben zavaró UI elemektől mentes fókuszált nézet.
* **Ranglista (`/leaderboard`)**: Táblázatos formában megjeleníti a legjobb játékosokat és azok reakcióidejét/pontszámát.
* **Profil (`/profile`)**: A bejelentkezett felhasználó adatai és korábbi játékainak statisztikája (pl. átlagos reakcióidő, legjobb eredmény).
