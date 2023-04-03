<template>
  <div class="error-box blue-grey lighten-5">
    <div class="py-12">
      <div class="text-center">
        <h1 class="error-title error--text">404</h1>
        <h3 class="text-uppercase error-subtitle">PAGE NOT FOUND !</h3>
        <p class="text-grey-darken-1 mt-4 mb-4">
          You seem to be trying to find his way home
        </p>
        <v-btn color="secondary" href="/">Go to Home</v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-box {
  height: 100%;
  width: 100%;
  position: fixed;
  background-repeat: no-repeat;
  /* background: url("@/assets/images/404.jpg"); */
  background-size: cover;
}
.error-title {
  font-size: 210px;
  font-weight: 900;
  text-shadow: 4px 4px 0 #fff, 6px 6px 0 #343a40;
  line-height: 210px;
}

@media (max-width: 991px) {
  .error-title {
    font-size: 120px;
    line-height: 120px;
  }
}

@media (max-width: 767px) {
  .error-title {
    font-size: 40px;
    line-height: 40px;
  }
}
</style>
