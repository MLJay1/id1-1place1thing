// javaScript für das akkordeon

document.querySelectorAll(".accordion").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        btn.nextElementSibling.classList.toggle("open");
    });
});