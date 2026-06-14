const buyButtons =
document.querySelectorAll(".buy-btn");

buyButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Produk berhasil dimasukkan ke keranjang!"
        );

    });

});