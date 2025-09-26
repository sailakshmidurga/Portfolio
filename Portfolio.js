const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.getElementById("navMenu");

    menuIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      navMenu.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (navMenu.classList.contains("show") && !navMenu.contains(e.target) && e.target !== menuIcon) {
        navMenu.classList.remove("show");
      }
    });

    document.querySelectorAll("#navMenu a").forEach(link => {
      link.addEventListener("click", () => navMenu.classList.remove("show"));
    });

   
    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("click", () => {
        const modalId = card.getAttribute("data-modal");
        document.getElementById(modalId).style.display = "flex";
      });
    });

    document.querySelectorAll(".close").forEach(btn => {
      btn.addEventListener("click", () => {
        btn.closest(".modal").style.display = "none";
      });
    });

    window.addEventListener("click", e => {
      document.querySelectorAll(".modal").forEach(modal => {
        if (e.target === modal) modal.style.display = "none";
      });
    });