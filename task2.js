const bahasaIndonesia = 95;
const bahasaInggris = 90;
const matematika = 70;
const ipa = 70;
const median = (bahasaIndonesia + bahasaInggris + matematika + ipa) / 4;

if ( median >= 90 || median >= 100 ) {
    console.log(`Rata rata = ${median}
    Grade = A`);
  } else if ( median >= 80 || median >= 89 ) {
    console.log(`Rata rata = ${median}
  Grade = B`);
  } else if ( median >= 70 || median >= 79 ) {
    console.log(`Rata rata = ${median}
  Grade = C`);
  } else if ( median >= 60 || median >= 69 ) {
    console.log(`Rata rata = ${median}
  Grade = D`);
  } else if (median >= 0 || median >= 59) {
    console.log(`Rata rata = ${median}
  Grade = E`);
  } else {
    console.log(`Angka tidak sesuai`);
}

