<template>
  <div class="d-flex justify-content-center align-items-center mb-5">
    <div class="w-75 d-flex justify-content-center gap-5 row align-items-center ">
      <div class="col-md-5">
        <img src="https://a.cdn-hotels.com/gdcs/production175/d204/32b38e20-cb15-11e8-a1a9-0242ac110002.jpg" alt="Miki" class="rounded img-fluid">
      </div>
      <div class="col-md-5">
        <h5 class="blue-color bolder">What about me ?</h5>
        <h4 class="mb-4">Located in Montréal and ready to work! 👨‍💻</h4>
        <p class="small-text">Currently, I undertake freelance missions and work on personal projects using technologies I enjoy, such as Ruby on Rails, Node.js, React.js, and Vue.js. I am also actively seeking my first professional experience in a company, so don't hesitate to reach out!</p>
        <a href="/website-cv.pdf" download="Mickael RISS CV" class="btn blue-background-color d-flex gap-3 align-items-center text-white">
          Download CV
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutApp'
}
</script>

<style lang="scss" scoped>
  .small-text {
    font-size: 12px;
  }

  .btn {
    transition: all 0.3s;
    width: 44%;
  }
  .btn:hover {
    transform: scale(1.02);
    background-color: #CCF281 !important;
    color: #446DF6 !important;
  }

  .btn:active {
    border: none;
  }

  @media (max-width: 375px) {
    .btn {
      font-size: 0.8rem;

      width: 75%;
    }
  }

  @media (max-width: 768px) {
    .btn {
      font-size: 0.8rem;
      width: 60%;
    }
  }
</style>
