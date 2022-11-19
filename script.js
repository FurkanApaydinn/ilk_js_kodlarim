let js = "harika";
if (js === "harika") alert("JS harika bir dil");
else alert("JS harika bir dil değil");
console.log(40 + 8 + 23 - 10);
// console.log("Murat");
console.log(23);
let isim = "samet";
console.log(isim);
console.log(isim);
console.log(isim);
// 1. değişken tanımlamalarda _ ve $ işareti kullanılabilir.
// 2. Değişkenler rakamla başlamaz örneğin 3adi gibi.
// let $function olarak tanımlanabilir.
// Değişken isimleri büyük harfle başlayamaz.
// Değiken adları anlamlı olması gerekiyor.
let ilkisim = "mühendis";
let mevcutisim = "Öğretmen";
console.log(ilkisim);
console.log(mevcutisim);

// Örnek challange
// let ülke = "Türkiye";
let kıta = "Asya";
// let nüfus = 6000000;
// console.log(ülke);
console.log(kıta);
// console.log(nüfus);
let jseglenceli = true;
// typeof değişken türünü tarayıcada göstermeye yarar.
console.log(typeof true);
// console.log(typeof ülke);
// console.log(typeof nüfus);

// Örnek challange2
let adaMı = true;
let dil = "İngilizce";
let nüfus = 6000000;
let ülke = "Türkiye";
console.log(adaMı);
console.log(typeof dil);
console.log(typeof nüfus);
console.log(typeof ülke);
// Örnek Challange -- Boy - kilo hesaplama
const boymurat = 1.75;
const boyengin = 1.82;
const ağırlıkmurat = 70;
const ağırlıkengin = 80;
console.log(
  "Murat'ın boyu " + boymurat,
  "ve kilosu " +
    ağırlıkmurat +
    " " +
    "Engin'in boyu " +
    boyengin +
    " " +
    "ve kilosu " +
    ağırlıkengin
);
const vücutkitleendeksimurat = ağırlıkmurat / boymurat ** 2;
console.log("Muratın vücut kitle endeksi : " + vücutkitleendeksimurat);
const vücutkitleendeksiengin = ağırlıkengin / boyengin ** 2;
console.log("Enginin vücut kitle endeksi : " + vücutkitleendeksiengin);
const büyükmü = vücutkitleendeksimurat > vücutkitleendeksiengin;
console.log(büyükmü);
