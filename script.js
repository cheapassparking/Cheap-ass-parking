/* ============================================================
   Cheap Ass Parking — script
   ============================================================ */

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

/* ---- Mobile menu ---- */
const toggle = document.getElementById("menuToggle");
const links = document.querySelector(".nav__links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("nav__links--open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      links.classList.remove("nav__links--open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* ---- Popular spots (sample data — replace with live inventory) ---- */
const SPOTS = [
  { city: "Galveston, TX",   sub: "Cruise port",     tag: "Cruise",   from: "$6/day",  save: "Save 48%" },
  { city: "Orlando, FL",     sub: "MCO Airport",     tag: "Airport",  from: "$8/day",  save: "Save 41%" },
  { city: "Houston, TX",     sub: "Stadium District", tag: "Event",   from: "$12/day", save: "Save 55%" },
  { city: "Las Vegas, NV",   sub: "The Strip",       tag: "Downtown", from: "$11/day", save: "Save 37%" },
  { city: "Seattle, WA",     sub: "SEA Airport",     tag: "Airport",  from: "$9/day",  save: "Save 44%" },
  { city: "Miami, FL",       sub: "PortMiami",       tag: "Cruise",   from: "$7/day",  save: "Save 50%" },
  { city: "Chicago, IL",     sub: "The Loop",        tag: "Downtown", from: "$14/day", save: "Save 33%" },
  { city: "Nashville, TN",   sub: "Downtown / venues", tag: "Event",  from: "$10/day", save: "Save 46%" },
];

const grid = document.getElementById("spotGrid");
if (grid) {
  grid.innerHTML = SPOTS.map((s) => `
    <a class="spot" href="#search" data-tag="${s.tag.toLowerCase()}">
      <div class="spot__top"><span class="spot__tag">${s.tag}</span></div>
      <div class="spot__body">
        <h3 class="spot__city">${s.city}</h3>
        <p class="spot__sub">${s.sub}</p>
        <div class="spot__price">
          <span><span class="spot__from">from </span><span class="spot__amt">${s.from}</span></span>
          <span class="spot__save">${s.save}</span>
        </div>
      </div>
    </a>
  `).join("");
}

/* ---- Search form ----
   No backend yet: this validates input and gives a clear next step.
   Wire this up to your booking/search API when it's ready.            */
const form = document.getElementById("searchForm");
const note = document.getElementById("searchNote");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const dest = form.destination.value.trim();
    const type = form.ptype.value;

    if (!dest) {
      note.textContent = "Tell us where you're headed and we'll find the cheap spots.";
      form.destination.focus();
      return;
    }

    const label = form.ptype.options[form.ptype.selectedIndex].text.toLowerCase();
    note.textContent = `Searching ${label} parking near "${dest}"… live booking is launching soon — scroll down for sample rates.`;

    // Smooth-scroll to the sample spots so the click does something useful.
    const spots = document.getElementById("spots");
    if (spots) spots.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
