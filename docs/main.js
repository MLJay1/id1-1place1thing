
// javascript für das akkordeon menü
// geht durch ob auf das acc geclickt worden ist

var acc = document.querySelectorAll(".accordion");

acc.forEach(acc => {
    acc.addEventListener("click", function () {
        this.classList.toggle("active");

        //     toggle between hiding and showing the active panel
        const panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

        const parentPanel = this.parentElement.closest(".panel");

        if (parentPanel){
            parentPanel.style.maxHeight = parentPanel.scrollHeight + "px";
        }
    });
});

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//
//     });
// }