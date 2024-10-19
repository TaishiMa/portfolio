document.addEventListener("DOMContentLoaded", function () {
  var el2 = document.querySelector(".welcomeWords");
  var str = el2.innerHTML.trim();
  let sumstr = "";

  for (let c of str) {
    c = c.replace(" ", "&nbsp;");
    sumstr += `<span class='char'>${c}</span>`;
  }

  el2.innerHTML = sumstr;
  el2.classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", function () {
  const appear = document.querySelectorAll(".appear");
  const cb = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("inview");
        observer.unobserve(entry.target);
      }
    });
  };
  const io = new IntersectionObserver(cb, { rootMargin: "-200px 0px" });
  appear.forEach((element) => {
    io.observe(element);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const portfolioDetail = document.querySelector(".portfolioDetail");
  const scrapingDetail = document.querySelector(".scrapingDetail");
  const analysisDetail = document.querySelector(".analysisDetail");
  const trigger1 = document.querySelector(".portfolioSite");
  const trigger2 = document.querySelector(".scraping");
  const trigger3 = document.querySelector(".analysis");
  const closebuttons = document.querySelectorAll(".closebutton");
  const overlay = document.querySelector(".overlay");

  trigger1.addEventListener("click", function () {
    body.classList.add("clicked");
    portfolioDetail.classList.add("clicked");
    overlay.classList.add("clicked");
  });

  trigger2.addEventListener("click", function () {
    body.classList.add("clicked");
    scrapingDetail.classList.add("clicked");
    overlay.classList.add("clicked");
  });

  trigger3.addEventListener("click", function () {
    body.classList.add("clicked");
    analysisDetail.classList.add("clicked");
    overlay.classList.add("clicked");
  });

  closebuttons.forEach((closebutton) => {
    closebutton.addEventListener("click", function () {
      body.classList.remove("clicked");
      portfolioDetail.classList.remove("clicked");
      scrapingDetail.classList.remove("clicked");
      analysisDetail.classList.remove("clicked");
      overlay.classList.remove("clicked");
    });
  });
});
