<template>
  <section class="faq" ref="rootEl">
    <div class="faq-wrapper">
      <transition name="accordion-fade-slide" mode="out-in">
        <div v-if="showAccordion" class="accordion">
          <div
            class="accordion__item"
            v-for="(item, i) in categoryItems"
            :key="`accordion-item-${i}`"
          >
            <div :class="generateQuestionClasses(i)" @click="makeActive(i)">
              <p
                class="accordion__title-text"
                v-html="item[questionProperty]"
                :id="
                  striphtml(item[questionProperty])
                    .replace(/[^a-zA-Z ]/g, '')
                    .replace(/\s+/g, '-')
                "
              ></p>
              <button :class="generateButtonClasses(i)"></button>
            </div>
            <collapse-transition>
              <div v-if="i === activeQuestionIndex">
                <slot v-bind:item="item">
                  <p class="accordion__value" v-html="item[answerProperty]"></p>
                </slot>
              </div>
            </collapse-transition>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import { CollapseTransition } from "vue2-transitions";

export default {
  name: "VueFaqAccordion",

  components: {
    CollapseTransition
  },

  data() {
    return {
      activeQuestionIndex: null,
      showAccordion: true
    };
  },

  props: {
    /**
     * Array of items
     * Object style {questionProperty: string, answerProperty: string, tabName: string}
     * You can change object keys names using other props (questionProperty, answerProperty, tabName)
     */
    items: {
      type: Array,
      required: true
    },
    /**
     * Key name of object in items array for specifying title of question
     */
    questionProperty: {
      type: String,
      default: "title"
    },
    /**
     * Key name of object in items array for specifying content text of open question
     */
    answerProperty: {
      type: String,
      default: "value"
    },

    /**
     * Color for hover and active tab/question
     * possible values: 'red', '#F00', 'rgb(255, 0, 0)'
     */
    activeColor: {
      type: String,
      default: "#D50000"
    },
    /**
     * Color for borders
     */
    borderColor: {
      type: String,
      default: "#9E9E9E"
    },
    /**
     * Color for fonts
     */
    fontColor: {
      type: String,
      default: "#000000"
    }
  },

  computed: {
    faqId: function() {
      var id = this.$route.params.faq;
      if (id == undefined) return "";
      return id.slice(0, id.length);
    },
    categoryItems() {
      return this.items;
    }
  },

  methods: {
    makeActive(itemIndex) {
      this.activeQuestionIndex =
        this.activeQuestionIndex === itemIndex ? null : itemIndex;

      if (this.activeQuestionIndex == null) {
        this.$router
          .replace({
            name: "Home Page"
          })
          .catch(() => {});
      } else {
        var paramStr = this.striphtml(this.categoryItems[itemIndex].title)
          .replace(/[^a-zA-Z ]/g, "")
          .replace(/\s+/g, "-");
        this.$router
          .replace({
            name: "Home Page1",
            params: {
              faq: paramStr
            }
          })
          .catch(() => {});
      }
    },
    striphtml(value) {
      var div = document.createElement("div");
      div.innerHTML = value;
      var text = div.textContent || div.innerText || "";
      return text;
    },
    generateButtonClasses(buttonIndex) {
      return [
        "accordion__toggle-button",
        this.activeQuestionIndex === buttonIndex
          ? "accordion__toggle-button_active"
          : null
      ];
    },
    generateQuestionClasses(questionIndex) {
      return [
        "accordion__title",
        this.activeQuestionIndex === questionIndex
          ? "accordion__title_active"
          : null
      ];
    }
  },

  mounted() {
    this.$refs.rootEl.style.setProperty("--active-color", this.activeColor);
    this.$refs.rootEl.style.setProperty("--border-color", this.borderColor);
    this.$refs.rootEl.style.setProperty("--font-color", this.fontColor);
    setTimeout(() => {
      this.$scrollTo(document.getElementById(this.faqId), 500, { offset: -40 });
      this.categoryItems.forEach((item, index) => {
        if (
          this.striphtml(item.title)
            .replace(/[^a-zA-Z ]/g, "")
            .replace(/\s+/g, "-") == this.faqId
        ) {
          this.activeQuestionIndex = index;
        }
      });
    }, 500);
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
button {
  border: none;
  background: none;
  outline: none;
}
.faq {
  width: 100%;
  padding: 0 10px;
}
.faq-wrapper {
  max-width: 825px;
  margin: auto;
}

.faq__title {
  text-align: center;
  margin-bottom: 25px;
}
.faq__nav {
  display: flex;
  justify-content: space-between;
  border: 2px solid var(--border-color);
  border-radius: 5px;
}
.faq__nav-item {
  height: 60px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid var(--border-color);
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
  text-align: center;
  user-select: none;
  color: var(--font-color);
}
.faq__nav-item_active {
  color: var(--active-color);
}
.faq__nav-item:hover {
  color: var(--active-color);
}
.faq__nav-item:last-child {
  border-right: none;
}
.faq__accordion {
  min-height: 250px;
}
.accordion-fade-slide-enter-active,
.accordion-fade-slide-leave-active {
  transition: all 0.3s;
}
.accordion-fade-slide-enter {
  transform: translateY(-25px);
  opacity: 0;
}
.accordion-fade-slide-leave-to {
  transform: translateY(25px);
  opacity: 0;
}
.accordion {
  border: 2px solid var(--border-color);
  border-radius: 5px;
  margin-top: 15px;
}
.accordion__item {
  border-bottom: 2px solid var(--border-color);
}
.accordion__item:last-child {
  border-bottom: none;
}
.accordion__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  cursor: pointer;
  transition: all 0.3s;
  color: var(--font-color);
}
.accordion__title_active {
  color: var(--active-color);
}
.accordion__title:hover {
  color: var(--active-color);
}
.accordion__title:hover .accordion__toggle-button::before,
.accordion__title:hover .accordion__toggle-button::after {
  background: var(--active-color);
}
.accordion__title-text {
  margin-right: 10px;
  font-size: 0.875rem;
  text-align: left;
}
.accordion__value {
  padding: 0 25px 25px 25px;
  text-align: left;
  color: var(--font-color);
  font-size: 0.875rem;
}

.accordion__toggle-button {
  position: relative;
  width: 16px;
  height: 16px;
  transition: all 0.3s;
  transform-origin: 50% 50%;
  padding-left: 16px;
  cursor: pointer;
}
.accordion__toggle-button::before,
.accordion__toggle-button::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  transition: all 0.3s;
  background: black;
}
.accordion__toggle-button::before {
  transform: rotate(90deg);
}
.accordion__toggle-button_active {
  transform: rotate(45deg);
}
.accordion__toggle-button_active::before,
.accordion__toggle-button_active::after {
  background: var(--active-color);
}
</style>
