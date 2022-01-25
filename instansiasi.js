var makanan = {
    namadepan : " pecel",
    namabelakang : "lele",

    tampilkan :function () {
        console.log(`nama ${this.namadepan} ${this.namabelakang}`);

    }
}

console.log(makanan.namadepan);
makanan.tampilkan()