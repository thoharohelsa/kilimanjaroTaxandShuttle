<template>
  <div class="container cards-1 pb-5">
    <h2 class="my-5">Frequently Asked Questions</h2>
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

    <VueFaqAccordion
      :items="faqData"
      :borderColor="'#c4d8dc'"
      :activeColor="'#00bfd8'"
      :fontColor="'#626262'"
      v-else
    />
  </div>
</template>

<script>
import VueFaqAccordion from "./faq/vue-faq-accordion.vue";
import axios from "axios";
export default {
  name: "Faq",
  components: {
    VueFaqAccordion
  },
  data() {
    return {
      faqData: [],
      isLoading: true
    };
  },
  created() {
    axios.get("/data/faq.json").then(response => {
      this.faqData = response.data.data;
      this.isLoading = false;
    });
  }
};
</script>

<style>
/* .faq-wrapper {
  margin: auto !important;
}
.accordion__title-text {
  font-size: 0.875rem;
  text-align: left;
} */
.accordion__title_active .accordion__title-text {
  color: #00bfd8;
}

/* .accordion__value {
  font-size: 0.875rem;
} */
</style>
