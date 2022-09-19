<template>
  <div class="card mt-3 w-100" :title="data.name">
    <img class="card-image" :src="data.image" alt="alternative" />
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
      <button class="form-control-submit-button my-3" @click="quotePage">
        Select
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Taxi",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    quotePage() {
      this.$store.dispatch("saveServiceData", this.data);
      this.$router.push({
        name: "Quote",
        params: { id: this.data.name }
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
  border-width: 2px !important;
}
.card:hover {
  border: 2px solid #00bfd9 !important;
  -webkit-box-shadow: 0px 0px 15px -3px rgba(0, 191, 217, 0.51);
  box-shadow: 0px 0px 15px -3px rgba(0, 191, 217, 0.51);
}
/* .selected {
  border: 2px solid #00bfd9 !important;
  -webkit-box-shadow: 0px 0px 15px -3px rgba(0, 191, 217, 0.51);
  box-shadow: 0px 0px 15px -3px rgba(0, 191, 217, 0.51);
} */
/* .check-mark {
  position: absolute;
  top: 15px;
  right: 15px;
  color: #00bfd9;
} */
button:focus {
  outline: none;
}
</style>
