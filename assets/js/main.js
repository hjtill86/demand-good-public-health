/* =========================================================
   DemandGoodQA — Global JS
   Handles mobile nav toggle + FAQ accordion behavior
   ========================================================= */
(function () {
  "use strict";

  // Mobile nav toggle
  var navToggle = document.querySelector("[data-nav-toggle]");
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
      var expanded = document.body.classList.contains("nav-open");
      navToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  }

  // FAQ / generic accordion
  var triggers = document.querySelectorAll(".accordion-trigger");
  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var item = trigger.closest(".accordion-item");
      var panel = item.querySelector(".accordion-panel");
      var isOpen = item.getAttribute("data-open") === "true";

      // Close all other items in the same accordion group
      var group = item.closest("[data-accordion-group]");
      if (group) {
        group.querySelectorAll(".accordion-item").forEach(function (other) {
          if (other !== item) {
            other.setAttribute("data-open", "false");
            other.querySelector(".accordion-panel").style.maxHeight = null;
            other.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
          }
        });
      }

      if (isOpen) {
        item.setAttribute("data-open", "false");
        panel.style.maxHeight = null;
        trigger.setAttribute("aria-expanded", "false");
      } else {
        item.setAttribute("data-open", "true");
        panel.style.maxHeight = panel.scrollHeight + "px";
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });

  // Set current year in footer
  var yearEl = document.querySelector("[data-current-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
