<template>
  <div class="col-xs-4 col-sm-5 col-md-5 col-lg-5 col-xl-5 m-auto order-sm-2 pt-4 pt-md-0">
    <img src="/portrait.jpg" alt="mickael-photo" class="img-fluid myself-img">
  </div>
</template>

<script>
export default {
  name: 'AvatarProfile',
}
</script>

<style>
  .myself-img {
    -webkit-animation: morph 8s ease-in-out infinite;
    background-image: url('/public/portrait.jpg');
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: 3px solid #2d2e32;
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    position: relative;
    transition: all 1s ease-in-out;
    animation: morph 8s ease-in-out infinite, borderMovement 8s ease-in-out infinite;
  }

  @keyframes borderMovement {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 40% 60% 70% 30%/50% 20% 60% 40%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }
</style>
