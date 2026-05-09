const App = {
  data() {
    return {
      kmh: null,
      ms: null,
    };
  },

  methods: {
    round(value) {
      return Math.round(value * 100) / 100;
    },

    convertFromKmh() {
      this.ms = this.kmh ? this.round(this.kmh / 3.6) : null;
    },

    convertFromMs() {
      this.kmh = this.ms ? this.round(this.ms * 3.6) : null;
    }
  }
};

Vue.createApp(App).mount("#app");