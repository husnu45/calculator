new Vue({
  el: "#calculator",
  data: {
    display: "",
    buttons: [
      "7",
      "8",
      "9",
      "/",
      "4",
      "5",
      "6",
      "*",
      "1",
      "2",
      "3",
      "-",
      "0",
      ".",
      "=",
      "+",
    ],
  },
  methods: {
    handleClick(button) {
      if (button === "=") {
        this.display = eval(this.display);
      } else {
        this.display += button;
      }
    },
  },
});
