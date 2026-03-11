# Adatmodell - Reflex Tesztelő Játék (Firebase Cloud Firestore - NoSQL)

## Entitások (Gyűjtemények és Dokumentumok)

### 1. users (Felhasználók gyűjteménye)
A rendszert használó regisztrált játékosok adatait tárolja. *(A jelszavakat a Firebase Authentication külön kezeli, így az adatbázisba nem kerülnek be).*
* `documentId` (String, Automatikus Firebase UID): A felhasználó egyedi azonosítója.
* `username` (String): A játékos megjelenített neve (egyedi).
* `email` (String): A játékos e-mail címe (egyedi).
* `role_id` (String, Referencia): A felhasználó jogosultsági szintjét jelölő dokumentum azonosítója a `roles` gyűjteményből.
* `achievements` (Array of Strings): A megszerzett kitűzők azonosítóinak listája (tömbje).
* `created_at` (Timestamp): A regisztráció pontos ideje.

### 2. roles (Szerepkörök gyűjteménye)
A jogosultsági szinteket határozza meg (pl. Admin, Játékos).
* `documentId` (String, Automatikus): A szerepkör egyedi azonosítója.
* `name` (String): A szerepkör neve (pl. "admin", "player").
* `description` (String): A szerepkör rövid leírása.

### 3. game_modes (Játékmódok gyűjteménye)
A különböző reflex teszt típusokat tárolja (pl. színfelismerés, betűleütés).
* `documentId` (String, Automatikus): A játékmód egyedi azonosítója.
* `name` (String): A játékmód megnevezése.
* `difficulty` (String): Nehézségi szint (pl. easy, hard).
* `time_limit_sec` (Number): A játékmód időkorlátja másodpercben (ha van).

### 4. match_results (Játék Eredmények gyűjteménye)
A lejátszott meccsek konkrét eredményeit és statisztikáit rögzíti.
* `documentId` (String, Automatikus): A meccs egyedi azonosítója.
* `user_id` (String, Referencia): Melyik felhasználó játszotta (UID).
* `game_mode_id` (String, Referencia): Melyik játékmódban született az eredmény.
* `score` (Number): Elért pontszám.
* `reaction_time_ms` (Number): Az átlagos reakcióidő milliszekundumban.
* `played_at` (Timestamp): A meccs lejátszásának pontos ideje.

### 5. achievements (Kitűzők gyűjteménye)
A játékosok által megszerezhető virtuális jelvények (pl. "Villámkezű", "Első 100 pont").
* `documentId` (String, Automatikus): A kitűző egyedi azonosítója.
* `title` (String): A kitűző neve.
* `requirement_desc` (String): Mit kell tenni a megszerzéséhez.
* `icon_url` (String): A kitűzőhöz tartozó kép elérési útja.

*(Megjegyzés a fejlesztéshez: A Firebase NoSQL felépítése miatt az 1. és az 5. entitás összekötéséhez nincs szükség külön kapcsolótáblára. A felhasználó megszerzett kitűzőit egyszerűen a `users` dokumentum `achievements` tömbjében tároljuk).*

---

## Kapcsolatok az entitások között

* **Role (1) – (N) User**: Egy a többhöz (1:N) kapcsolat. Egy szerepkörhöz (pl. játékos) több felhasználó is tartozhat, de egy felhasználónak pontosan egy fő szerepköre van. Ezt a `users` dokumentumokban lévő `role_id` referenciával oldjuk meg.
* **User (1) – (N) MatchResult**: Egy a többhöz (1:N) kapcsolat. Egy felhasználó több meccset is lejátszhat, de egy adott eredmény pontosan egy felhasználóhoz tartozik. A `match_results` dokumentumok tartalmazzák a `user_id` referenciát.
* **GameMode (1) – (N) MatchResult**: Egy a többhöz (1:N) kapcsolat. Egy adott játékmódban több eredmény is születhet, de egy konkrét eredmény csak egy játékmódhoz tartozik. A `match_results` dokumentumok tartalmazzák a `game_mode_id` referenciát.

* **User (N) – (M) Achievement**: Több a többhöz (N:M) kapcsolat. Egy felhasználó több kitűzőt is megszerezhet, és egy adott kitűzőt több felhasználó is birtokolhat. Hagyományos kapcsolótábla helyett ezt úgy valósítjuk meg, hogy a `users` dokumentumban lévő `achievements` tömbben (Array) felsoroljuk a megszerzett kitűzők azonosítóit.
