<template>
  <div class="px-3">
    <header id="header" class="header-content header">
      <div class="container col-lg-8">
        <router-link class="btn-solid-lg page-scroll" to="/">Home</router-link>
        <a
          class="btn-solid-lg page-scroll"
          href="https://wa.link/xkm54x"
          target="_blank"
          >WhatsApp</a
        >
        <a
          class="btn-solid-lg page-scroll"
          href="mailto:kilimanjaroairporttaxi@gmail.com"
          >E-mail</a
        >
        <a
          class="btn-solid-lg page-scroll"
          href="https://safari-trek-beach.com/our-tours/"
          target="_blank"
          >Tours & Safari</a
        >
      </div>
    </header>

    <div class="card my-4 w-100" :title="data.name">
      <img
        class="card-image mx-auto"
        width="150"
        :src="data.image"
        alt="alternative"
      />
      <div class="card-body">
        <h4 class="card-title">{{ data.name }}</h4>
        <p>
          From / To <br />
          <strong>{{ data.fromTo }}</strong>
        </p>
        <ul class="list-unstyled li-space-lg">
          <li class="media">
            <i class="fas fa-check"></i>
            <div class="ben">Passengers {{ data.passengers }}</div>
          </li>
          <li class="media">
            <i class="fas fa-check"></i>
            <div class="ben">Luggage/Bags Up to {{ data.luggage }}</div>
          </li>
          <li class="media">
            <i class="fas fa-check"></i>
            <div class="ben">No hidden Cost</div>
          </li>
        </ul>
        <p class="h5 mt-4">
          <strong>{{ data.price }} USD</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TaxiQuote",
  data() {
    return {
      data: {}
    };
  },
  computed: {
    ...mapGetters({ serviceData: "serviceData" })
  },
  created() {
    this.data = this.serviceData;
  },
  methods: {
    goHome() {
      this.$router.push({
        name: "Home Page"
      });
      // let routeData = this.$router.resolve({
      //   name: "Quote",
      //   params: { id: this.data.name }
      // });
      // window.open(routeData.href, "_blank");
    }
  }
};
</script>

<style scoped>
.card {
  max-width: 400px;
  margin: auto;
  text-align: center;
}
</style>
