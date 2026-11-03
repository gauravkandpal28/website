"use strict";

// Conceptual figures illustrate the topics; they do not depict empirical results.
const figures = {
  entropy: `<svg viewBox="0 0 400 250" role="img" aria-label="Illustration: from a distribution to an information measure"><path d="M28 190H193M28 190V54" stroke="#c3c9d0" stroke-width="1.6" fill="none"/><path d="M34 187C64 186 65 74 105 66S149 185 189 187Z" fill="#e7effa"/><path class="line trace" pathLength="1" d="M34 187C64 186 65 74 105 66S149 185 189 187" fill="none" stroke="#2f6fca" stroke-width="3.5"/><path d="M214 123h39m-7-7 7 7-7 7" stroke="#9aa1ab" stroke-width="2" fill="none"/><rect class="reveal" x="272" y="71" width="94" height="105" rx="8" fill="#eeeafa" stroke="#d7cff1"/><text x="319" y="117" text-anchor="middle" font-size="19" font-weight="600">Burg</text><text x="319" y="144" text-anchor="middle" class="small" font-size="16">entropy</text><text x="106" y="222" text-anchor="middle" class="small" font-size="16">Distribution</text><text x="317" y="222" text-anchor="middle" class="small" font-size="16">Information</text></svg>`,
  directional: `<svg viewBox="0 0 400 250" role="img" aria-label="Illustration of observations on a circle"><circle cx="123" cy="119" r="75" fill="#f5f7fa" stroke="#c3c9d0" stroke-width="2"/><path d="M123 34v170M38 119h170" stroke="#e4e6e9"/><g stroke="#6f56c4" stroke-width="2" opacity=".65"><path class="trace" pathLength="1" d="M123 119 182 73M123 119l70-22M123 119l45-60M123 119 196 134M123 119l10-74"/></g><g fill="#6f56c4"><circle class="pulse reveal" cx="182" cy="73" r="5"/><circle class="pulse reveal" cx="193" cy="97" r="5"/><circle class="pulse reveal" cx="168" cy="59" r="5"/><circle class="pulse reveal" cx="196" cy="134" r="5"/><circle class="pulse reveal" cx="133" cy="45" r="5"/></g><text x="280" y="102" text-anchor="middle" font-size="19" font-weight="600">Directional</text><text x="280" y="130" text-anchor="middle" font-size="19" font-weight="600">data</text><text x="123" y="225" text-anchor="middle" class="small" font-size="16">Circular observations</text><path d="M242 159h79" stroke="#2f6fca" stroke-width="3"/></svg>`,
  exponential: `<svg viewBox="0 0 400 250" role="img" aria-label="Illustrative exponential survival curve"><path d="M40 35V195H360" stroke="#c3c9d0" stroke-width="1.6" fill="none"/><path d="M40 60C84 123 140 160 210 179S310 190 354 193L354 195H40Z" fill="#e5f3ec"/><path class="line trace" pathLength="1" d="M40 60C84 123 140 160 210 179S310 190 354 193" fill="none" stroke="#2e9467" stroke-width="3.5"/><g class="reveal" fill="#d24f38"><circle class="pulse" cx="85" cy="117" r="4.5"/><circle class="pulse" cx="142" cy="155" r="4.5"/><circle class="pulse" cx="213" cy="181" r="4.5"/></g><text x="190" y="48" text-anchor="middle" font-size="19" font-weight="600">Testing exponentiality</text><text x="202" y="226" text-anchor="middle" class="small" font-size="16">Normalized dynamic survival extropy</text></svg>`
};
document.querySelectorAll("[data-figure]").forEach(el => { el.innerHTML = figures[el.dataset.figure] || ""; });
document.querySelectorAll("[data-document]").forEach((el, i) => {
  const accent = ["#2f6fca", "#6f56c4", "#2e9467"][i % 3];
  el.innerHTML = `<svg viewBox="0 0 400 250" aria-hidden="true"><rect class="reveal" x="127" y="24" width="146" height="202" rx="5" fill="#fff" stroke="#c3c9d0" stroke-width="1.5"/><path class="trace" pathLength="1" d="M151 58H249" stroke="${accent}" stroke-width="5" stroke-linecap="round"/><path class="trace" pathLength="1" d="M151 80h98m-98 16h98m-98 16h67m-67 40h98m-98 16h98m-98 16h78" stroke="#c3c9d0" stroke-width="2"/><text x="200" y="139" text-anchor="middle" fill="${accent}" font-size="17" font-weight="600">LaTeX</text></svg>`;
});

document.querySelectorAll("[data-bib]").forEach(button => {
  button.addEventListener("click", () => {
    const block = document.getElementById(button.dataset.bib);
    block.hidden = !block.hidden;
    button.setAttribute("aria-expanded", String(!block.hidden));
  });
});

const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("entered"); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.35 });
  document.documentElement.classList.add("motion-ready");
  document.querySelectorAll(".motion-card").forEach(card => observer.observe(card));
}

const story = document.querySelector(".story");
if (story) {
  const scenes = [
    { name: "The question", title: ["How can data reveal", "a distribution?"], sub: "Statistical inference", kind: "data" },
    { name: "Information", title: ["Measure information", "in distributions"], sub: "Entropy and extropy", kind: "entropy" },
    { name: "Directional data", title: ["Not all observations", "lie on a straight line"], sub: "Linear and directional data", kind: "directional" },
    { name: "Goodness of fit", title: ["Does a distribution", "fit the data?"], sub: "Goodness-of-fit tests", kind: "exponential" },
    { name: "Research", title: ["From mathematical ideas", "to statistical methods"], sub: "Distribution theory and inference", kind: "research" },
    { name: "Published work", title: ["Sharing the work", "with the community"], sub: "Research, teaching, and conferences", kind: "impact" }
  ];
  const stage = document.getElementById("story-stage");
  const progress = story.querySelector(".story-progress");
  const toggle = story.querySelector(".story-toggle");
  const dots = Array.from({length: 16}, (_, i) => `<circle class="pop" cx="${52 + i * 19}" cy="${246 + Math.sin(i * 1.37) * 54}" r="5" fill="${i % 3 === 0 ? "#d24f38" : "#2f6fca"}" style="animation-delay:${i * 0.04}s"/>`).join("");
  scenes.forEach((scene, i) => {
    let drawing;
    if (figures[scene.kind]) drawing = `<g transform="translate(12 165) scale(.94)">${figures[scene.kind].replace(/<svg[^>]*>|<\/svg>/g, "")}</g>`;
    else if (scene.kind === "data") drawing = `<path d="M44 334H356M44 197V334" fill="none" stroke="#c3c9d0" stroke-width="2"/>${dots}<text x="200" y="386" text-anchor="middle" class="caption">Data, uncertainty, and inference</text>`;
    else if (scene.kind === "research") drawing = `<g class="pop"><rect x="38" y="196" width="324" height="58" rx="8" fill="#e7effa"/><text x="200" y="232" text-anchor="middle" class="label">Distribution theory</text><path d="M200 260v24m-6-6 6 6 6-6" fill="none" stroke="#9aa1ab" stroke-width="2"/><rect x="38" y="294" width="324" height="58" rx="8" fill="#eeeafa"/><text x="200" y="330" text-anchor="middle" class="label">Statistical procedures</text><text x="200" y="398" text-anchor="middle" class="caption">IIT Kharagpur</text></g>`;
    else drawing = `<g class="pop"><rect x="36" y="191" width="328" height="74" rx="8" fill="#e7effa"/><text x="62" y="240" class="big">2</text><text x="116" y="235" class="label">journal articles</text><rect x="36" y="280" width="328" height="74" rx="8" fill="#eeeafa"/><text x="62" y="329" class="big">4</text><text x="116" y="314" class="label">conference presentations</text><text x="116" y="337" class="caption">in 2025-26</text><text x="200" y="404" text-anchor="middle" class="caption">Stat &amp; Mathematica Slovaca</text></g>`;
    const slide = document.createElement("div");
    slide.className = "story-slide";
    slide.innerHTML = `<svg viewBox="0 0 400 500" aria-hidden="true"><text x="28" y="43" class="kicker">${scene.name}</text><text x="28" y="82" class="headline">${scene.title[0]}</text><text x="28" y="111" class="headline">${scene.title[1]}</text><text x="28" y="145" class="subline">${scene.sub}</text>${drawing}</svg>`;
    stage.append(slide);
    const button = document.createElement("button");
    button.type = "button";
    button.title = `Scene ${i + 1}: ${scene.name}`;
    button.setAttribute("aria-label", button.title);
    button.innerHTML = "<span><i></i></span>";
    button.addEventListener("click", () => showScene(i));
    progress.append(button);
  });
  let current = 0;
  let paused = reducedMotion.matches;
  let timer;
  let startTime = 0;
  let remaining = 5000;
  const slides = [...stage.children];
  const buttons = [...progress.children];
  function schedule() {
    clearTimeout(timer);
    if (!paused && !document.hidden) {
      startTime = performance.now();
      timer = setTimeout(() => showScene((current + 1) % scenes.length), remaining);
    }
  }
  function showScene(index) {
    current = index;
    remaining = 5000;
    slides.forEach((slide, i) => { slide.classList.toggle("active", i === index); slide.setAttribute("aria-hidden", String(i !== index)); });
    buttons.forEach((button, i) => {
      button.classList.toggle("complete", i < index);
      button.removeAttribute("aria-current");
    });
    // Restart the progress bar even when the selected scene is selected again.
    void progress.offsetWidth;
    buttons[index].setAttribute("aria-current", "step");
    stage.setAttribute("aria-label", `${scenes[index].name}. ${scenes[index].title.join(" ")}. ${scenes[index].sub}.`);
    schedule();
  }
  function updateToggle() {
    story.classList.toggle("paused", paused || document.hidden);
    const label = paused ? "Play animation" : "Pause animation";
    toggle.setAttribute("aria-label", label);
    toggle.title = label;
    toggle.innerHTML = `<svg class="icon" aria-hidden="true"><use href="#icon-${paused ? "play" : "pause"}"/></svg>`;
  }
  toggle.addEventListener("click", () => {
    if (!paused) remaining = Math.max(0, remaining - (performance.now() - startTime));
    paused = !paused;
    updateToggle();
    schedule();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && !paused) remaining = Math.max(0, remaining - (performance.now() - startTime));
    updateToggle();
    schedule();
  });
  reducedMotion.addEventListener("change", () => {
    if (reducedMotion.matches) { paused = true; updateToggle(); schedule(); }
  });
  updateToggle();
  showScene(0);
}

const photoDialog = document.getElementById("photo-dialog");
if (photoDialog && typeof photoDialog.showModal === "function") {
  document.querySelectorAll("[data-gallery]").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    const image = photoDialog.querySelector("img");
    image.src = link.getAttribute("href");
    image.alt = link.querySelector("img")?.alt || link.dataset.caption;
    document.getElementById("photo-caption").textContent = link.dataset.caption;
    photoDialog.showModal();
  }));
  photoDialog.querySelector(".dialog-close").addEventListener("click", () => photoDialog.close());
  photoDialog.addEventListener("click", event => {
    if (event.target !== photoDialog) return;
    const box = photoDialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) photoDialog.close();
  });
}
document.querySelector("[data-print]")?.addEventListener("click", () => window.print());
