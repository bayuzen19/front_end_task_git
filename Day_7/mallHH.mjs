import { MALL_HH } from './constant.js';

function beliBarang(harga) {
  let diskon = 0;
  let potonganDiskon = '';
  let potonganMember ='';
  
  // apply discount based on the price range
  if (harga >= 1000000) {
    diskon = MALL_HH.mall.toko.transaksi.penjualan.harga.diskon.diskonHarga1000;
    potonganDiskon = `potongan diskon pembelian satu juta: - ${diskon * harga}\n`;
  } else if (harga >= 700000) {
    diskon = MALL_HH.mall.toko.transaksi.penjualan.harga.diskon.diskonHarga700;
    potonganDiskon = `potongan diskon pembelian tujuh ratus ribu: - ${diskon * harga}\n`;
  } else if (harga >= 500000) {
    diskon = MALL_HH.mall.toko.transaksi.penjualan.harga.diskon.diskonHarga500;
    potonganDiskon = `potongan diskon pembelian lima ratus ribu: - ${diskon * harga}\n`;
  }
  
  // calculate subtotal and apply member discount if applicable
  let subtotal = harga - (harga * diskon);
  if (subtotal >= 500000) {
    const diskonMember = MALL_HH.mall.toko.transaksi.penjualan.pembelian.member.diskon;
    potonganMember = `potongan member: - ${subtotal * diskonMember}\n`;
    subtotal = subtotal - (subtotal * diskonMember);
  }

  // calculate tax and total amount to be paid
  const pajak = MALL_HH.mall.toko.transaksi.penjualan.pembelian.pajak;
  const besarPajak = harga * pajak;
  subtotal = subtotal + besarPajak;

  // display the details to the user
  console.log(potonganDiskon + potonganMember + `besar pajak: + ${besarPajak}\njumlah yang harus dibayar:  ${subtotal}`);
}

// execute function call
beliBarang(1500000);
beliBarang(800000);
beliBarang(600000);
beliBarang(500000);
beliBarang(400000);



