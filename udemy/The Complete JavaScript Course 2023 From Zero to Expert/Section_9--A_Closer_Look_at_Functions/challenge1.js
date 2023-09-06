const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer: function () {
    const t = Number(
      prompt(`${this.question}\n${this.options.join("\n")}]\nwrite your answer`)
    );

    if (t < this.answers.length && t >= 0) {
      this.answers[t] += 1;
    }

    this.displayResults();
    //this.displayResults("string");
  },
  displayResults: function (type = (a = "array")) {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`poll result are${this.answers.join(",")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
