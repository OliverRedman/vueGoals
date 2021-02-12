const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
      counter: 0,
    };
  },
  methods: {
    addGoal() {
      if (app.enteredValue.length > 0) {
        this.goals.push(this.enteredValue);
        this.enteredValue = "";
      } else alert("goal must be atleast 1 character in length");
      this.counter++;
    },
    delet(e) {
      if (e.target.classList.contains("linethrough")) {
        e.target.parentNode.removeChild(e.target);
        this.counter--;
      } else {
        e.target.classList.add("linethrough");
      }
    },
  },
}).mount("#app");
