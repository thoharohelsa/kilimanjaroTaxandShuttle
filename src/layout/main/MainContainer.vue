<template>
  <div id="app">
    <div>
      <router-view />
    </div>
    <Copyright />
  </div>
</template>

<script>
import Copyright from "../../components/Copyright";
export default {
  name: "App",
  components: {
    Copyright
  }
};
</script>
