// ABSCHLUSSTEST A1 K2
document.querySelector(".abgeben-k1-a3-1").addEventListener("click", () => {
  let fta1_k3_ex1_1 = document.querySelector(".fta1-k3-ex1-1").value;
  let fta1_k3_ex1_2 = document.querySelector(".fta1-k3-ex1-2").value;
  let fta1_k3_ex1_3 = document.querySelector(".fta1-k3-ex1-3").value;
  let fta1_k3_ex1_4 = document.querySelector(".fta1-k3-ex1-4").value;
  let fta1_k3_ex1_5 = document.querySelector(".fta1-k3-ex1-5").value;
  let fta1_k3_ex1_6 = document.querySelector(".fta1-k3-ex1-6").value;

  if (
    fta1_k3_ex1_1 === "mache" &&
    fta1_k3_ex1_2 === "siehst" &&
    fta1_k3_ex1_3 === "spielt" &&
    fta1_k3_ex1_4 === "fahren" &&
    fta1_k3_ex1_5 === "lernt" &&
    fta1_k3_ex1_6 === "spricht"
  ) {
    document.querySelector(".fta1-k3-ex1-1").style.backgroundColor = "#94d82d";
    document.querySelector(".fta1-k3-ex1-2").style.backgroundColor = "#94d82d";
  } else if (fta1_k3_ex1_1 != "mache" && fta1_k3_ex1_2 === "siehst") {
    document.querySelector(".fta1-k3-ex1-1").style.backgroundColor = "#e03131";
    document.querySelector(".fta1-k3-ex1-2").style.backgroundColor = "#94d82d";
  } else if (fta1_k3_ex1_1 === "mache" && fta1_k3_ex1_2 != "siehst") {
    document.querySelector(".fta1-k3-ex1-1").style.backgroundColor = "#94d82d";
    document.querySelector(".fta1-k3-ex1-2").style.backgroundColor = "#e03131";
  } else {
    document.querySelector(".fta1-k3-ex1-1").style.backgroundColor = "#e03131";
    document.querySelector(".fta1-k3-ex1-2").style.backgroundColor = "#e03131";
  }
});
