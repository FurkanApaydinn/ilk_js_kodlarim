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

let numOne=3
let numTwo=3

console.log(numOne==numTwo)

let js = "javascript"
let py="Python"
console.log(js==py)// eşit olmadıkları için false dönecek

let lightOn=true
let lightOff=false
console.log(lightOff==lightOn)

let nums=[// dizeler her zaman 0 dan başlar
    1,2,3,"furkan" 
]
nums[0]//1
nums[1]//2
nums[2]//3
nums[3]="Apaydın" // dizede yer alan 3üncü elemanı apaydın olarak değiştiriyorum.
console.log(nums)

let nums1=[1,2,3]
let nums2=[1,2,3]
console.log(nums1==nums2) // eşit olmalarına rağmen non-primitive(ilkel olmayan veri türü) olduğu için false döndürecek.
// console.log(math.round(5.49))// 5 e yuvarlar
console.log(Math.round(5.5))// 6 ya yuvarlar
console.log(Math.ceil(5.01)) // 6 ya yuvarlar tavana(yukarı) yuvarla
console.log(Math.ceil(5.95)) // 6 ya yuvarlar tavana(yukarı) yuvarla
console.log(Math.floor(5.99)) // tabana(aşağı) yuvarlar sonuç 5 
console.log(Math.min(5,3,1,-5,-20))// liste içerisinde en küçük sayıyı bulur.
console.log(Math.max(5,3,1,-5,-20))// liste içerisinde en büyük sayıyı bulur.
const num1=Math.random()// 0 ile 1 arasında rastgele bir sayı oluştur. 
console.log(num1)
Math.floor(Math.random*11) // 0 ile 10 arasında rastgele sayı oluştur.

let name ='Furkan'
let surName='Apaydın'
let fullName= name + surName//furkan apaydın

console.log(`${name} ${surName}`) // furkan apaydın 

//string methods uzunluk
let ad ="furkanapaydin"
console.log(ad.length) // 6 uzunluk sayısını gösterir
'furkan'.toUpperCase() // tüm harfleri büyük yapar
'furkan'.toLocaleLowerCase() // tüm harfleri küçük yapar
ad.substring(2,5) // rka 2. indexten başla ve kaç uzunluk alacağını belirtiyoruz.
let string="javascript"
console.log(string.substring(0,4))//java
console.lincog(string.substring(4,10)) // script

console.log(string.includes("java")) // true // string içerisinde java var ise true döndürür. yok ise false döndürür

console.log(string.includes("fur"))//false 
// let str ="Merhaba Furkan, nasılsın furkan"
// str.replaceAll("furkan","Apaydın")// replace sadece 1 kelimeyi değiştirir. ReplecaAll ise tüm kelimeleri değiştirir.
// let str1="30 days of javascript" 
// console.log(str.indexOf("d"))//3 belirttiğin değerin kelime içerisinde yer sayısını bulur.

// ------------------2.gün challange-----------
let challange="30 Days Of JavaScript"
console.log(challange)
console.log(challange.length)
console.log(challange.toUpperCase())
console.log(challange.toLowerCase())
console.log(challange.substring(2))
console.log(challange.includes("Script"))
console.log(challange.split(""))
console.log(challange.replaceAll("JavaScript","Python"))
console.log(challange.match(/a/gi))
