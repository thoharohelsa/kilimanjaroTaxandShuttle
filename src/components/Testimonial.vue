<template>
  <!-- Testimonials -->
  <div class="slider-2">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>Testimonials</h2>
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
          <div class="swiper-container" v-else>
            <swiper ref="tSwiper" :options="swiperOption">
              <swiper-slide
                v-for="(item, index) in testiData"
                :key="index + 'slider'"
                class="px-1 px-md-2"
              >
                <div class="card">
                  <img class="card-image" :src="item.image" alt="alternative" />
                  <div class="card-body">
                    <p class="testimonial-text">
                      {{ item.content }}
                    </p>
                    <p class="testimonial-author">{{ item.author }}</p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div slot="button-prev" class="swiper-button-prev" @click="prev()" />
          <div slot="button-next" class="swiper-button-next" @click="next()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.min.css";
import axios from "axios";

export default {
  name: "Testimonial",
  components: { Swiper, SwiperSlide },
  directives: { swiper: directive },
  data() {
    return {
      testiData: [],
      isLoading: true,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  created() {
    axios.get("/data/testimonial.json").then(response => {
      this.testiData = response.data.data;
      this.isLoading = false;
    });
  },
  async json() {},
  methods: {
    prev() {
      this.$refs.tSwiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.tSwiper.$swiper.slideNext();
    }
  }
};
</script>

<style>
.swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after,
.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after {
  color: #626262;
}
</style>
