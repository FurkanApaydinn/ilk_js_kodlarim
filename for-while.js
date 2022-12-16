//loops

//For Loop

// for (let i = 1; i < 10; i++){
//  // console.log(i);

// }

for (let i = 1; i < 10; i++){
 // console.log(i);
 if (i === 3) {
  console.log("En sevdiğim rakam")
  break; // 3 e geldiğinde durdurur.
 }
 console.log(i)
}
//while loop
let i = 0;
while (i < 10) {
 console.log(i)
 i++;
}

// do-while loop
let a = 0;
do {
 
 console.log(a);
 a++;
} while (a < 10)

for (let b = 10; b > 0; b--) {
 console.log(b)
}

//arasındaki sayıların toplamını alma
let toplam = 0;
for (let c = 10; c > 0; c--) {
toplam+=c
}
console.log(toplam)

//arasındaki sayıların çarpımını alma
let çarpım = 1;
for (let c = 10; c > 0; c--) {
çarpım*=c
}
console.log(çarpım)
// Sadece çift sayıların çarpımını alma
let çarpım1 = 1;
for (let i = 10; i > 0; i--) {
 if(i % 2 == 0) {
  çarpım1 *= i;
 }
 console.log(çarpım1)
}

// Sadece tek sayıların çarpımını alma
let çarpım2 = 1;
for (let i = 10; i > 0; i--) {
 if(i % 2 == 0) {
  çarpım2 *= i;
 }
 console.log(çarpım2)
}

//continue
for (let i = 1; i < 5; i++){
 if(i===3) continue;
 console.log(i)// 1 2 4 çıkar.
}
console.log(!!null);
console.log(!!"");
console.log(!!1);
