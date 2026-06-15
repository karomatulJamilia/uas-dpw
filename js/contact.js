// const form =
// document.getElementById("contactForm");

// form.addEventListener("submit", function(e){

//     e.preventDefault();

//     alert(
//         "Pesan berhasil dikirim! Terima kasih telah menghubungi PalmWaste Hub."
//     );

//     form.reset();

// });

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    alert(
        "Pesan berhasil dikirim!\n\n" +
        "Nama: " + nama + "\n" +
        "Email: " + email + "\n" +
        "Pesan: " + pesan
    );

    form.reset();

});