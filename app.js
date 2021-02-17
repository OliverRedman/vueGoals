const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
      counter: 0,
      tog: true,
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
    delet(index) {
      if (index.target.classList.contains("linethrough")) {
        this.goals.splice(index, 1);
        this.counter--;
      } else {
        index.target.classList.add("linethrough");
      }
    },
    toggle() {
      this.tog = !this.tog;
    },
  },
  computed: {
    buttonCaption() {
      return this.tog ? "Hide" : "Show";
    },
  },
}).mount("#app");
