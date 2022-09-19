<template>
  <div>
    <router-view></router-view>
    <a href="https://wa.link/xkm54x" class="float" target="_blank">
      <i class="fab fa-whatsapp my-float"></i>
    </a>
  </div>
</template>

<style>
@import "assets/css/bootstrap.css";
@import "assets/css/styles.css";
@import "assets/css/fontawesome-all.css";
.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}
.my-float {
  margin-top: 16px;
}
@media (max-width: 500px) {
  .float {
    bottom: 20px;
    right: 20px;
  }
}
</style>
