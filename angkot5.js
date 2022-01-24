var jumlahmobil=10;
var angkotberoprasi=6;

for ( var jumlah = 1; jumlah <= jumlahmobil; jumlah++){
    if (jumlah <= 6 ) {
        console.log('Angkot No. ' + jumlah+ ' beroprasi dengan baik.');
    } else if (jumlah ==8 || jumlah ==10){
        console.log('Angkot No. ' + jumlah + ' sedang lembur.');
    }
     else {
        console.log(`Angkot No. ${jumlah} sedang tida beroprasi.`);
    }
}
    