<?php
// Ha az űrlap be lett küldve (rendelés)
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["lastname"]) . " " . htmlspecialchars($_POST["firstname"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $address = htmlspecialchars($_POST["zip"]) . " " . htmlspecialchars($_POST["city"]) . ", " . htmlspecialchars($_POST["street"]);

    echo "<div class='order-confirmation'>";
    echo "<h2>Köszönjük a rendelését, $name!</h2>";
    echo "<p>A rendelést elküldtük a következő címre: $address</p>";
    echo "<p>Kapcsolat: $email | $phone</p>";
    echo "</div>";
}
?>

<!DOCTYPE html>
<html lang="hu">

<head>
    <meta charset="UTF-8">
    <title>Black Mirror Webshop</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1>🕶️ Black Mirror Webshop</h1>
        <div class="filters">
            <input type="text" id="searchName" placeholder="Keresés név alapján...">
            <select id="filterPrice">
                <option value="all">Összes ár</option>
                <option value="low">0 - 10 000 Ft</option>
                <option value="mid">10 000 - 30 000 Ft</option>
                <option value="high">30 000 Ft felett</option>
            </select>
        </div>
        <div id="cart">
            🛒 <span id="cartCount">0</span> db | Összesen: <span id="cartTotal">0</span> Ft
        </div>
    </header>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active text-white" aria-current="page" href="evadok.html"><i class="bi bi-house" style="font-size:18px"></i> Főoldal</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="evadok.html"><i class="bi bi-camera-reels" style="font-size:18px"></i> Évadok</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Benkő Lili oldala</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Somodóczki Mónika oldala</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="evadokjsgyak.html"><i class="bi bi-camera-video" style="font-size:18px"></i> Évadok js-sel gyak</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="filmszerkesztok.html"><i class="bi bi-pen" style="font-size:18px"></i> Film szerkesztők</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="index.php"><i class="bi bi-pen" style="font-size:18px"></i> Black Mirror Webáruház</a>
                    </li>
                    <!--<li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>-->
                </ul>
            </div>
        </div>
    </nav>
    <main>
        <section id="product-list" class="product-grid">
            <!-- Termékek JavaScriptből kerülnek ide -->
        </section>

        <section id="order-section">
            <h2>🧾 Rendelés leadása</h2>
            <form method="POST" action="">
                <input type="text" name="lastname" placeholder="Vezetéknév" required>
                <input type="text" name="firstname" placeholder="Keresztnév" required>
                <input type="tel" name="phone" placeholder="Telefonszám" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="text" name="zip" placeholder="Irányítószám" required>
                <input type="text" name="city" placeholder="Település" required>
                <input type="text" name="street" placeholder="Utca, házszám" required>
                <button type="submit">Rendelés elküldése</button>
            </form>
        </section>
    </main>

    <script src="adatbekero.js"></script>
</body>

</html>