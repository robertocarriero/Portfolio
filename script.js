//document.addEventListener("DOMContentLoaded", () => {
    // Loader
    //const loader = document.getElementById("loader");
  //  setTimeout(() => {
    //    loader.style.display = "none";
    //}, 2000);

   /* document.addEventListener("DOMContentLoaded", () => {
        const loader = document.getElementById("loader");
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
                document.body.classList.remove("loading"); // Mostrar la página después del loader
            }, 20);
        },2900);
    });*/
    
    document.addEventListener("DOMContentLoaded", () => {
        const loader = document.getElementById("loader");
        const body = document.body;
    
        // Asegurar que el loader aparezca con la imagen de fondo desde el principio
        loader.style.opacity = "1";
        loader.style.transition = "opacity 2.5s ease-in-out";
        
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
                body.classList.remove("loading"); // Mostrar la página después del loader
            }, 1000); // Pequeño retraso para suavizar la transición
        }, 2000); // Mantener el loader visible un poco más antes de desvanecerlo
    });
    // Toggle modo oscuro/claro
    const toggleMode = document.getElementById("toggleMode");
    const body = document.body;

    // Guardar preferencia en localStorage
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        toggleMode.textContent = "🔳";
    } else {
        body.classList.remove("light-mode");
        toggleMode.textContent = "🔲";
    }

    toggleMode.addEventListener("click", () => {
        body.classList.toggle("light-mode");
        const theme = body.classList.contains("light-mode") ? "light" : "dark";
        localStorage.setItem("theme", theme);
        toggleMode.textContent = theme === "light" ? "🔲" : "🔳";
    });

    // Animaciones suaves
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);
    sections.forEach((section) => observer.observe(section));

    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("contactForm");
        const modal = document.getElementById("modal");
        const closeModal = document.getElementById("closeModal");
    
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Evita la redirección
    
            // Envía el formulario con FormSubmit
            fetch(form.action, {
                method: "POST",
                body: new FormData(form),
            })
            .then(() => {
                // Muestra el modal
                modal.style.display = "flex";
                form.reset(); // Limpia el formulario después de enviarlo
            })
            .catch(error => console.error("Error al enviar el formulario:", error));
        });
    
        // Cierra el modal al hacer clic en el botón
        closeModal.addEventListener("click", function () {
            modal.style.display = "none";
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const backToTop = document.getElementById("backToTop");
    
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTop.classList.add("visible");
            } else {
                backToTop.classList.remove("visible");
            }
        });
    
        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });
    
    

