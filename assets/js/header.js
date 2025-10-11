// Generate Header
var header = document.createElement("header");
header.id = "header";
header.className = "header d-flex align-items-center fixed-top ";
header.innerHTML = `
<div
class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between"
>
<a href="index.html" class="logo d-flex align-items-center">
  <!-- Uncomment the line below if you also wish to use an image logo -->
<img src="assets/img/android-chrome-512x512.png" alt="" class="img-fluid">

  <!-- <h1 class="sitename">LGBTQIA+ Perspectives</h1> -->
</a>

<nav id="navmenu" class="navmenu">
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="abstract.html">Call for Abstracts</a></li>
    <li><a href="register.html">Register</a></li>
    <!-- li><a href="venue.html">Venue</a></li -->
    </ul>
    <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
</nav>
</div>`;
document.body.insertBefore(header, document.body.firstChild);
