<template>
  <div id="request" class="form-1">
    <div class="container">
      <h2 class="text-center">
        Fill The Following Form To Request an Airport Pickup
      </h2>

      <div class="row">
        <div class="col-lg-12">
          <form id="requestForm" name="requestForm" @submit.prevent="delay">
            <div class="form-group">
              <input
                v-model="email"
                type="email"
                class="form-control-input"
                id="remail"
                required
              />
              <label class="label-control" for="remail">Email</label>
              <div class="help-block with-errors"></div>
            </div>

            <div class="form-group">
              <input
                v-model="date"
                type="date"
                class="form-control-input"
                id="rpickdate"
                required
              />
              <label class="label-control" for="rpickdate">Pick up Date</label>
              <div class="help-block with-errors"></div>
            </div>
            <div class="form-group">
              <input
                v-model="time"
                type="time"
                class="form-control-input"
                id="rpicktime"
                required
              />
              <label class="label-control" for="rpicktime">Pick up time</label>
              <div class="help-block with-errors"></div>
            </div>
            <div class="form-group">
              <input
                v-model="pickUp"
                type="text"
                class="form-control-input"
                id="rpicklocation"
                required
              />
              <label class="label-control" for="rpicklocation"
                >Pick up location</label
              >
              <div class="help-block with-errors"></div>
            </div>
            <div class="form-group">
              <input
                v-model="dropOff"
                type="text"
                class="form-control-input"
                id="rdroplocation"
                required
              />
              <label class="label-control" for="rdroplocation"
                >Drop-off location</label
              >
              <div class="help-block with-errors"></div>
            </div>

            <div class="col-lg-4 center-center">
              <div class="form-group">
                <input
                  type="submit"
                  class="form-control-submit-button"
                  value="REQUEST A QUOTE"
                  :disabled="disabled"
                />
                <div id="message"></div>
              </div>
            </div>
            <div class="col-lg-4 center-center">
              <div class="form-group">
                <div v-if="success">Quote successfully Sent!</div>
              </div>
            </div>
            <!-- <div class="form-message">
              <div id="rmsgSubmit" class="h3 text-center hidden"></div>
            </div> -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "Quote",
  data() {
    return {
      email: "",
      time: "",
      date: "",
      dropOff: "",
      pickUp: "",

      disabled: false,
      timeout: null,
      success: false
    };
  },
  computed: {
    ...mapGetters({ storeData: "serviceData" })
  },
  methods: {
    delay() {
      this.disabled = true;
      this.timeout = setTimeout(() => {
        this.disabled = false;
      }, 5000);
      this.submit();
    },
    beforeDestroy() {
      clearTimeout(this.timeout);
    },
    submit() {
      // const submitData = {
      //   remail: this.email,
      //   rpicktime: this.time,
      //   rpickdate: this.date,
      //   rpicklocation: this.pickUp,
      //   rdroplocation: this.dropOff,
      //   rtypeCar: this.storeData.name
      // };
      // console.log("tag", submitData);

      const formData = new FormData();
      formData.append("remail", this.email);
      formData.append("rpicktime", this.time);
      formData.append("rpickdate", this.date);
      formData.append("rpicklocation", this.pickUp);
      formData.append("rdroplocation", this.dropOff);
      formData.append("rtypeCar", this.storeData.name);

      axios.post("/quote.php", formData).then(res => {
        console.log("res", res);
        this.success = true;
      });
    }
  }
};
</script>

<style scoped>
form {
  max-width: 800px;
  margin: 30px auto !important;
}
.form-control-input,
.form-control-select {
  width: 100%;
}
input[type="date"]::-webkit-calendar-picker-indicator,
input[type="time"]::-webkit-calendar-picker-indicator {
  background: transparent;
  bottom: 0;
  color: transparent;
  cursor: pointer;
  height: auto;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
}
</style>
