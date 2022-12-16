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

// challange JS reduce
// 1
const letters = ['h', 'e', 'l', 'l', 'o']
const greeting=letters.reduce((birleştirme,greeting)=>{
  return birleştirme + greeting;
});
console.log(greeting)

// 2 
const numbers = [ 100, 3, 4, 1, 2];
const total = numbers.reduce((çarpma,numbers)=>{
  return çarpma * numbers
});

// Aşağıdaki satırda console.log: 2400 olmalıdır
console.log(total); 
// prompt("Bir sayı giriniz:", "Sayı pozitif bir sayı olmalıdır!") // ikinci değer promptbox içerisinde gösterilir.
// let sayi = prompt("bir sayı giriniz :")
// let result = sayi * 2
// console.log(result)
// let silme = confirm("Doğan Kurtuluş yaşlı mı ?")

// console.log(silme?"Doğan Kutuluş yaşlı  😒":"Olsun Doğan Kurtuluş gene yaşlı 😂😂")
const date = new Date()
let year = date.getFullYear(),
 month = date.getMonth(),
 day = date.getDate(),
 hour = date.getHours(),
 dayName = date.getDay(),
 minute = date.getMinutes(),
 second=date.getSeconds()

//challange 1
function checkAge(data) {
 if (data === { age: 18 }) {
  console.log("you are an adult");
 } else if (data == { age: 18 }) {
  console.log("you are still an adult");
 } else {
  console.log("hımm. you don't have an age I guess");
 }
}
checkAge({ age: 18 })//hımm. you don't have an age I guess

//challange 2
var num = 8;
var num = 10;
console.log(num)
// challange 3 (for) 
const firstNamesArray = ['Violet', 'Charlie', 'Veruca', 'Mike', 'Augustus'];
const lastNamesArray = ['Beauregarde', 'Bucket', 'Salt', 'Teavee', 'Gloop'];

for (let i = 0; i<firstNamesArray.length;i++){
  console.log(`${firstNamesArray[i]} ${lastNamesArray[i]}`)
}

// for (let i = 0; i< firstNamesArray.length; i++){
// firstNamesArray[i] += " " + lastNamesArray[i]
// }

// firstNamesArray.reverse();
// console.log(firstNamesArray)


 let months=["ocak","şubat","mart","nisan","mayıs","haziran","temmuz","ağustos","Eylül","ekim","kasım","aralık"]
console.log(months.length)
let days = ["pazar", "pazartesi", "salı", "çarşamba", "perşembe", "cuma", "cumartesi"]
let humanReadableDate = `${day} ${months[month]} ${year},${days[dayName]},${hour}:${minute}:${second}`
console.log(humanReadableDate)

// 3.Gün Challange
let firstName = "Furkan",
 lastName = "Apaydın",
 country = "Türkiye",
 city = "İstanbul",
 Year = 1992
console.log(typeof(firstName),typeof(lastName),typeof(country),typeof(city),typeof(year))
 
console.log("10" == 10)//true
console.log(parseInt(9.8)) // 9
// doğruluk değeri sağlayan 3 JavaScript ifadesi;
console.log("Furkan" == "Furkan")// true
console.log("Apaydın" == "Apaydın")// true
console.log("Aydın" == "Aydın")//true
// Yanlış değer sağlayan 3 JavaScript ifadesi;
console.log("Furkan" == "apaydın")// false
console.log("10" === 10)// false
console.log("Aydın" == 20)//false
// Not : == 2 eşittirde veri içeriklerimne bakıyor. === 3 eşittirde veri türlerine bakıyor.
console.log(4 > 3) // true
console.log(4 >= 3) //true
console.log(4 < 3) // false
console.log(4 == 4) // true
console.log(4 === 4) // true
console.log(4 != 4
)// false
console.log(4 !== 4
)// false
console.log(4 != '4'
)// false
console.log(4 == '4'
)// veri içeriklerinde 4 olduğu için true
console.log(4 === '4')// veri modellerinde string ve integer olduğu için false

let python = ["p","y","t","h","o","n"]
console.log(python.length)
let Jargonun = ["J","a","r","g","o","n","u","n"]
console.log(Jargonun.length)
console.log(python == Jargonun) // false

// true and false
console.log(4 > 3 && 10 < 12) // true & true = true
console.log(4 > 3 && 10 > 12) // true & false = false
console.log(4 > 3 || 10 < 12) // true || true = true
console.log(4 > 3 || 10 > 12)  // true || false = true
console.log(!(4 > 3)) // false
console.log(!(4 < 3)) // true
console.log(!(false)) // true
console.log(!(4 > 3 && 10 < 12)) // true & true değilse false 
console.log(!(4 > 3 && 10 > 12)) // true & false değilse true
console.log(!(4 === '4')) // false değilse true

// challange 4-- 5-15 sayılarını console.log yapacak bir while döngüsü yazın. Bir değişken i tanımladığınızdan emin olun (let anahtar sözcüğünü kullanın) ve bunu while döngüsünden önce başlatın.
let i = 5
while (i <= 15) {
 console.log(i)
 i++
}


// Challange 5-- Aynısını yapacak bir for döngüsü yazın.
for (x = 5; x <= 15; x++){
 console.log(x)

}

// Challange 6-- 1. alıştırmadakiyle aynı while döngüsünü yazın ancak 15'ten 5'e kadar olan sayıları geriye doğru yazdıracak şekilde yazın. Bunun için artırma operatörü yerine azaltma operatörünü kullanmanız gerekecektir. Sonsuz bir döngü oluşturmamak için koşulunuzu değiştirirken çok dikkatli olmalısınız!

let y = 15
while (y <= 5) {
 console.log(y)
 y--
}


//Challange 7-- Aynısını for döngüsü için yapın 15'ten 5'e geriye doğru yazdırılacak şekilde değiştirin. Yine durumunuza dikkat edin ve sonsuz bir döngüden kaçının.

for (z = 15; z <= 5; z--){
 console.log(z)
}



// Challange 8 Bonus-- for döngünüzü Drill 2'den yeniden yazabilir misiniz, böylece 5, sonra 6, sonra 7, sonra 8 vb. konsola kaydetmek yerine yalnızca tek sayıları konsola kaydedebilir miyiz? Yani ilk yinelemede konsola 5, ikinci yinelemede 7, ardından 9, sonra 11, sonra 13, sonra 15 ve orada durmalıdır.

for (k = 5; k <= 5; z += 2){
 console.log(k)
}

// Tüm zorluklarınız için aşağıdaki nesne dizisiyle çalışacaksınız. Diziyi hiç değiştirmeyin.
const planets = [
    { 
        id: 0,
        name: "Mercury",
        numOfMoons: 0
    },
    {
        id: 1,
        name: "Venus",
        numOfMoons: 0
    },
    {
        id: 2,
        name: "Earth",
        numOfMoons: 1
    },
    {
        id: 3,
        name: "Mars",
        numOfMoons: 2
    },
    {
        id: 4,
        name: "Jupiter",
        numOfMoons: 79
    },
    {
        id: 5,
        name: "Saturn",
        numOfMoons: 62
    },
    {
        id: 6,
        name: "Uranus",
        numOfMoons: 27
    },    
    {
        id: 7,
        name: "Neptune",
        numOfMoons: 14
    }, 
]

// Challenge aşağıda başlıyor.

// MAP CHALLENGE

// Yalnızca gezegen adlarından oluşan yeni bir dizi oluşturmak için map kullanın, hepsi büyük harfli olmalıdır

const planetNamesUpperCased = planets.map((a) => a.name.toUpperCase())
// The console should say: ["MERCURY", "VENUS", "EARTH", "MARS", "JUPITER", "SATURN", "URANUS", "NEPTUNE"]
console.log(planetNamesUpperCased);

// FILTER CHALLENGE 1
// planetId'de yalnızca belirtilen kimliğe sahip nesneyi filtreleyin, ardından adını console.log'a yazdırın. Bu meydan okuma sizin için kısmen tamamlandı. Buradaki /* kodunuz */ metnini kaldırın ve kendi kodunuzla değiştirin.
const planetId = 7;
const planetNameById = planets.filter((a)=>a.id===planetId)[0];
// Sondaki [0] neden gerekli? Devam etmeden önce bunu iyice düşündüğünüzden ve anladığınızdan emin olun.
// Konsol şunu yazdırmalıdır: "Neptün"
console.log(planetNameById.name);

// FILTER CHALLENGE 2
// planetName'de yalnızca belirtilen name'e sahip nesneyi filtreleyin, ardından numOfMoons'unu console.log'a kaydedin - template literal sözdizimini kullanın.
const planetName = "Earth";
const planetNumMoonsByName = planets.filter((a)=> a.name===planetName)[0]
// Konsolda şöyle demelidir: "Earth's number of moons is: 1"
console.log( `${planetNumMoonsByName.name}''${planetNumMoonsByName.numOfMoons}'`);

// REDUCE CHALLENGE
// Güneş sistemimizdeki tüm ayların toplamını moonsTotal adlı bir değişkende toplamak için reduce kullanın.
const moonsTotal = planets.reduce((totalM,planetM)=> totalM + planetM.numOfMoons,0)
// Konsolda şu yazmalıdır :   185
console.log(moonsTotal); 

// YÖNTEM ZİNCİRLEME CHALLENGE 
// İlk olarak  yalnızca uyduları olan gezegenleri filtrelemek için filter yöntemini kullanın.
// Ardından  yalnızca 1 veya daha fazla uydusu olan gezegenlerin adlarını içeren yeni bir dizi oluşturmak için map yöntemini kullanın.
// Bunu yöntem zincirini kullanarak yapın.
const planetNamesWithMoons = planets.filter((a)=> a.numOfMoons>0)
const yeni=planetNamesWithMoons.map((a)=>a.name)
// Konsolda şöyle yazmalıdır: ["Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
console.log(yeni);
