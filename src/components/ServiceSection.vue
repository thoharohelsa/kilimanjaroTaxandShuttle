<template>
  <div id="services" class="cards-1 position-relative">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>Tax and Shuttle Hiring Services</h2>
          <p class="p-heading p-large">
            Easy to Book. Just View our Offer below, fill in the Form and Send.
            We will answer you promptly! Or You can WhatsApp us
            <a href="tel:+255687369601">+255 687 369 601</a>
          </p>
        </div>
      </div>
      <div v-if="isLoading">
        <div class="loadingio-spinner-spinner-ne9294slqto">
          <div class="ldio-czo61crvhb7">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="row" v-else>
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          v-for="(data, index) in taxiData"
          :key="index"
        >
          <taxi-item :data="data"></taxi-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaxiItem from "./TaxiItem.vue";
import axios from "axios";
export default {
  components: { TaxiItem },
  name: "Service",
  data() {
    return {
      taxiData: [],
      isLoading: true
    };
  },
  created() {
    axios.get("/data/taxi.json").then(response => {
      this.taxiData = response.data.data;
      this.isLoading = false;
    });
  }
};
</script>
