<template>
  <nav class="navbar navbar-expand-lg fixed-top bg-white nav-shadow rounded p-3">
    <div class="container">
      <h3 class="navbar-brand fw-bolder m-0 fs-3">Miki.dev</h3>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title border-bottom pb-2 pe-3" id="offcanvasNavbarLabel">Miki.dev</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 fw-bolder">
            <li class="nav-item">
              <a class="nav-link active mx-lg-2" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-2" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-2" href="#">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-2" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
  h3 {
    letter-spacing: 4px;
    transition: all 0.3s;
  }

  h3:hover {
    color: green !important;
    cursor: pointer;
  }

  .nav-shadow {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .navbar-toggler {
    border: none !important;
    font: 1.25rem;
  }

  .navbar-toggler:focus, .btn-close:focus {
    box-shadow: none !important;
    outline: none !important;
  }

  .nav-link {
    color: #666777 !important;
    font-weight: 500 !important;
    position: relative !important;
  }

  .nav-link:hover, .nav-link.active {
    color: #000 !important;
  }

  @media (min-width: 991px){
    .nav-link::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0%;
      height: 2px;
      background-color: green;
      visibility: hidden;
      transition: 0.3s ease-in-out;
    }

    .nav-link:hover::before {
      visibility: visible;
      width: 100%;
    }
  }
</style>
