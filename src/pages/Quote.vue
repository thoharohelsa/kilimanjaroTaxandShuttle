<template>
  <div>
    <taxi-quote></taxi-quote>
    <quote-section></quote-section>
  </div>
</template>

<script>
import QuoteSection from "../components/QuoteSection.vue";
import TaxiQuote from "../components/TaxiQuote.vue";
export default {
  name: "App",
  components: {
    QuoteSection,
    TaxiQuote
  }
};
</script>
