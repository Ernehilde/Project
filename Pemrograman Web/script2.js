const tap1 = document.querySelector(".tap1");
const tap2 = document.querySelector(".tap2");
const tap3 = document.querySelector(".tap3");
const tap4 = document.querySelector(".tap4");
const slider = document.querySelector(".slider");


tap1.addEventListener("click", () => {
  tap1.classList.add("checked");
  tap1.classList.remove("unchecked");
  tap2.classList.remove("checked");
  tap3.classList.remove("checked");
  tap4.classList.remove("checked");
  if (tap1.classList.contains("checked")) {
    slider.style.width = "140px";
    slider.style.transform = "translateX(0)";
  } else {
    slider.style.transform = "translateX(0)";
  }
})

tap2.addEventListener("click", () => {
  tap2.classList.add("checked");
  tap1.classList.add("unchecked");
  tap1.classList.remove("checked");
  tap3.classList.remove("checked");
  tap4.classList.remove("checked");
  if (tap2.classList.contains("checked")) {
    tap3.style.color="#fff";
    slider.style.width = "140px";
    slider.style.transform = "translateX(148px)";
  } else {
    slider.style.transform = "translateX(0)";
  }
});

tap3.addEventListener("click", () => {
    tap3.classList.add("checked");
    tap1.classList.add("unchecked");
    tap1.classList.remove("checked");
    tap2.classList.remove("checked");
    tap4.classList.remove("checked");
    if (tap3.classList.contains("checked")) {
        slider.style.width = "160px";
      slider.style.transform = "translateX(304px)";
    } else {
      slider.style.transform = "translateX(0)";
    }
  });

  tap4.addEventListener("click", () => {
    tap4.classList.add("checked");
    tap1.classList.add("unchecked");
    tap1.classList.remove("checked");
    tap2.classList.remove("checked");
    tap3.classList.remove("checked");
    if (tap4.classList.contains("checked")) {
        slider.style.width = "180px";
      slider.style.transform = "translateX(484px)";
    }  else {
        slider.style.transform = "translateX(0)";
      }
  });
