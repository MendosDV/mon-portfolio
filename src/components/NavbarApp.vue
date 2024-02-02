<template>
  <nav class="navbar navbar-expand-lg fixed-top bg-white nav-shadow py-3">
    <div class="container">
      <h3 class="logo navbar-brand fw-bolder m-0 fs-3">Miki.dev</h3>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title pb-2 pe-3" id="offcanvasNavbarLabel">Miki.dev</h5>
          <button type="button" class="btn-close" @click="toggleOffcanvas" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 fw-bolder">
            <li class="nav-item">
              <a class="nav-link active mx-lg-2" @click="toggleOffcanvas" aria-current="page" href="#banner">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-2" @click="toggleOffcanvas" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-2" @click="toggleOffcanvas" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-lg-2"  @click="toggleOffcanvas" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleOffcanvas() {
      const offcanvas = document.getElementById('offcanvasNavbar');
      offcanvas.classList.toggle('show');
    }
  }
}
</script>

<style>
  .logo {
    letter-spacing: 2px;
    transition: all 0.3s;
    margin: 0 -.25rem;
    padding: 0 .25rem;
    transition: color .5s ease-in-out, box-shadow .5s ease-in-out;
  }

  .logo:hover {
    box-shadow: inset 300px 0 0 0 #446DF6;
    color: white !important;
    cursor: pointer;
  }

  .offcanvas-title {
    border-bottom: 1px solid #CCF281;
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
      background-color: #CCF281;
      visibility: hidden;
      transition: 0.3s ease-in-out;
    }

    .nav-link:hover::before {
      visibility: visible;
      width: 100%;
    }
  }
</style>
