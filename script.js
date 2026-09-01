/* =========================================
   KYAKALA TOURS & TRAVEL
   WEBSITE JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const menu = document.getElementById("mobileMenu");

    if (menu) {
        menu.classList.toggle("active");
    }

}


/* =========================================
   SLIDER CONTROLS
========================================= */

function moveSlider(sliderId, direction) {

    const slider = document.getElementById(sliderId);

    if (!slider) return;

    const amount = window.innerWidth <= 600 ? 300 : 370;

    slider.scrollBy({
        left: amount * direction,
        behavior: "smooth"
    });

}


/* =========================================
   AUTOMATIC JUMIA-STYLE SLIDERS
========================================= */

function startAutoSlider(sliderId) {

    const slider = document.getElementById(sliderId);

    if (!slider) return;

    setInterval(function () {

        const maximumScroll =
            slider.scrollWidth - slider.clientWidth;

        if (slider.scrollLeft >= maximumScroll - 10) {

            slider.scrollTo({
                left: 0,
                behavior: "smooth"
            });

        } else {

            const amount =
                window.innerWidth <= 600 ? 300 : 370;

            slider.scrollBy({
                left: amount,
                behavior: "smooth"
            });

        }

    }, 4500);

}


startAutoSlider("destinationSlider");
startAutoSlider("tourSlider");
startAutoSlider("packageSlider");


/* =========================================
   WHATSAPP NUMBER
========================================= */

const whatsappNumber = "256709635282";


/* =========================================
   BOOKING FORM → WHATSAPP
========================================= */

const bookingForm =
    document.querySelector(".booking-form");


if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const formData =
            new FormData(bookingForm);


        const name =
            formData.get("name") || "";

        const phone =
            formData.get("phone") || "";

        const email =
            formData.get("email") || "";

        const destination =
            formData.get("destination") || "";

        const date =
            formData.get("date") || "";

        const travelers =
            formData.get("travelers") || "";

        const message =
            formData.get("message") || "";


        const whatsappMessage =
`Hello Kyakala Tours & Travel 👋

I would like to plan a trip to Uganda.

Name: ${name}

My Phone / WhatsApp: ${phone}

Email: ${email}

Destination: ${destination}

Travel Date: ${date || "Not specified"}

Number of Travelers: ${travelers || "Not specified"}

Trip Details:
${message || "I would like more information about this trip."}

Please get back to me with more details and pricing.

Thank you.
Kyakala Tours & Travel`;


        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        window.open(
            whatsappURL,
            "_blank"
        );

    });

}


/* =========================================
   FLOATING WHATSAPP BUTTON
========================================= */

const whatsappButton =
    document.getElementById("whatsappButton");


if (whatsappButton) {

    const quickMessage =
        "Hello Kyakala Tours & Travel 👋 I would like to know more about your tours and travel packages.";

    whatsappButton.href =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(quickMessage);

    whatsappButton.target = "_blank";

    whatsappButton.rel = "noopener";

}


/* =========================================
   BACK TO TOP BUTTON
========================================= */

const topButton =
    document.getElementById("topButton");


window.addEventListener("scroll", function () {

    if (!topButton) return;

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


if (topButton) {

    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener("click", function (event) {

    const menu =
        document.getElementById("mobileMenu");

    const menuButton =
        document.querySelector(".menu-button");


    if (!menu || !menu.classList.contains("active")) {
        return;
    }


    if (
        !menu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {

        menu.classList.remove("active");

    }

});


/* =========================================
   CLOSE MENU WITH ESCAPE KEY
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        const menu =
            document.getElementById("mobileMenu");

        if (menu) {
            menu.classList.remove("active");
        }

    }

});


/* =========================================
   CURRENT YEAR
========================================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}
