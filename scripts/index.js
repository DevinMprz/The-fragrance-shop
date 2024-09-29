const { createApp, ref } = Vue;

const app = Vue.createApp({
  setup() {
    const message = Vue.ref("Hello Vue!");

    return {
      message,
    };
  },
});
app.mount("#app");
