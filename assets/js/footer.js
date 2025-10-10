// Generate Footer
var footer = document.createElement("footer");
footer.id = "footer";
footer.className = "footer position-relative dark-background py-4 text-light ";
footer.innerHTML = `  <div class="container">
<!-- Top Row: Left and Right University Info -->
<div class="row justify-content-between align-items-start">
  <!-- Left -->
  <div
    class="col-lg-4 col-12 mb-4 footer-about text-center text-lg-start"
  >
    <a
      href="https://youngqueeralliance.com/" target="_blank" rel="noopener noreferrer" 
      class="logo d-flex align-items-center justify-content-center justify-content-lg-start mb-2"
    >
    <span class="sitename">Young Queer Alliance</span>
  </a>
    <div class="footer-contact pt-2">
      <p>391, Royal Road,</p>
      <p>Rose-Hill (Skylane), Port Louis,</p>
      <p>Mauritius</p>
      <p class="mt-2">
        <strong>Email:</strong> <span><a href="mailto:info@youngqueeralliance.com">info@youngqueeralliance.com</a></span>
      </p>
    </div>
    <div
      class="social-links d-flex justify-content-center justify-content-lg-start mt-3"
    >
      <a href="https://twitter.com/YQA_Mauritius" target="_blank" rel="noopener noreferrer" ><i class="bi bi-twitter-x"></i></a>
      <a href="https://www.facebook.com/youngqueeralliance/" target="_blank" rel="noopener noreferrer" ><i class="bi bi-facebook"></i></a>
      <a href="https://www.instagram.com/youngqueeralliance/" target="_blank" rel="noopener noreferrer" ><i class="bi bi-instagram"></i></a>
    </div>
  </div>

  
  <!-- Center -->
  <div
    class="col-lg-4 col-12 mb-4 footer-about text-center text-lg-center"
  >
  <a
  href="https://middlesex.mu"
  class="logo d-flex align-items-center justify-content-center justify-content-lg-end mb-2"
>
    <span class="sitename">Middlesex University Mauritius</span>
  </a>
    <div class="footer-contact pt-2">
    <p>Coastal Road</p>
    <p>90203, Uniciti, Flic-en-Flac,</p>
    <p>Mauritius</p>
    <p class="mt-2">
      <strong>Phone:</strong> <span>+230 403 6400</span>
    </p>
    </div>
    <div
      class="social-links d-flex justify-content-center justify-content-lg-center mt-3"
    >
      <a href="https://twitter.com/mdx_mtius" target="_blank" rel="noopener noreferrer" ><i class="bi bi-twitter-x"></i></a>
      <a href="https://www.facebook.com/MiddlesexUniversityMauritius/" target="_blank" rel="noopener noreferrer" ><i class="bi bi-facebook"></i></a>
      <a href="https://www.instagram.com/middlesexunimauritius/" target="_blank" rel="noopener noreferrer" ><i class="bi bi-instagram"></i></a>
    </div>
  </div>
  

  <!-- Right -->
  <div
    class="col-lg-4 col-12 mb-4 footer-about text-center text-lg-end"
  >
    <a
      href="https://theotherfoundation.org/" target="_blank" rel="noopener noreferrer" 
      class="logo d-flex align-items-center justify-content-center justify-content-lg-end mb-2"
    >
      <span class="sitename">The Other Foudation</span>
    </a>
    <div class="footer-contact pt-2 text-center text-lg-end">
      <p>36 Bath Avenue,</p>
      <p>Rosebank, 2193, Johannesburg,</p>
      <p>South Africa</p>
      <p class="mt-2">
        <strong>Email:</strong> <span><a href="mailto:admin@theotherfoundation.org">admin@theotherfoundation.org</a></span>
      </p>
    </div>
    <div
      class="social-links d-flex justify-content-center justify-content-lg-end mt-3"
    >
      <a href="https://twitter.com/OtherFoundation" target="_blank" rel="noopener noreferrer" ><i class="bi bi-twitter-x"></i></a>
      <a href="https://www.facebook.com/theotherfoundation/" target="_blank" rel="noopener noreferrer" ><i class="bi bi-facebook"></i></a>
      <a href="https://www.instagram.com/theotherfoundation/" target="_blank" rel="noopener noreferrer" ><i class="bi bi-instagram"></i></a>
    </div>
  </div>
</div>

<!-- Bottom Row: Centered Symposium Name -->
<div class="container copyright text-center mt-4">
  <!-- <div class="row mt-4"> -->
  <div class="col-12 text-center">
    <span class="sitename custom-footer-text">
      LGBTQIA+ Perspectives: Symposium on Equality, Dignity and
      Wellbeing
    </span>
    <!-- </div> -->
  </div>
</div>
</div>
`;
document.body.appendChild(footer);

// --- Add Scroll Top Button and Preloader *after* Footer ---
var scrollTop = document.createElement("a");
scrollTop.href = "#";
scrollTop.id = "scroll-top";
scrollTop.className =
  "scroll-top d-flex align-items-center justify-content-center";
scrollTop.innerHTML = `<i class="bi bi-arrow-up-short"></i>`;

var preloader = document.createElement("div");
preloader.id = "preloader";

document.body.appendChild(scrollTop);
document.body.appendChild(preloader);

// --- Ensure Preloader Fades Out After Load ---
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.transition = "opacity 0.7s ease";
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
      preloader.remove();
    }, 700);
  }
}

// If the page is already loaded (e.g. script runs after load)
if (document.readyState === "complete") {
  hidePreloader();
} else {
  // Otherwise wait for full load (all assets)
  window.addEventListener("load", hidePreloader);
}
