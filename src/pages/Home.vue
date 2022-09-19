<template>
  <div>
    <hero-banner></hero-banner>
    <service-section></service-section>
    <testimonial></testimonial>
    <faq></faq>
    <contact-section></contact-section>
  </div>
</template>

<script>
import HeroBanner from "../components/HeroBanner.vue";
import ServiceSection from "../components/ServiceSection.vue";

const Testimonial = () => import("../components/Testimonial.vue");
const ContactSection = () => import("../components/ContactSection.vue");
const Faq = () => import("../components/Faq.vue");

// import QuoteSection from "./components/QuoteSection.vue";
// import Testimonial from "./components/Testimonial.vue";
// import ContactSection from "./components/ContactSection.vue";
// import Faq from "./components/Faq.vue";
// import Copyright from "./components/Copyright.vue";

export default {
  name: "App",
  components: {
    HeroBanner,
    ServiceSection,
    Testimonial,
    ContactSection,
    Faq
  }
};
</script>
