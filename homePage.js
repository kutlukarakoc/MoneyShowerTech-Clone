const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    loop: true,
  },
  breakpoints: {
    1200: { slidesPerView: 6, slidesPerGroup: 1 },
    1000: { slidesPerView: 5, slidesPerGroup: 1 },
    800: { slidesPerView: 4, slidesPerGroup: 1 },
    600: { slidesPerView: 2, slidesPerGroup: 1 }
  }
});


const email = document.getElementById("mail");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  if (email.value !== "") {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email.value.match(mailFormat)) {
      alert("Lütfen uygun bir e-posta adresi giriniz.");
      email.value = "";
      email.focus();
      return;
    }
    else {
      alert("Form başarı ile gönderilmiştir.");
    }
  }
})