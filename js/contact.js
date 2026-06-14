const form =
document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Pesan berhasil dikirim! Terima kasih telah menghubungi PalmWaste Hub."
    );

    form.reset();

});