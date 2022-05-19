// 1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

//   მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   დაბეჭდეთ მასივისი ახალი ელემენტები


let array=[5, 25, 89, 120, 36];
array.push('javascript','python');
array.unshift('html','css')
//console.log(array.length);
array.shift();
array.pop();
//console.log(array);

// 2. შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;

//   გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

let array1=['fortoxali','banani','msxali'];
array1.push('vashli','banani');
array1.unshift('sazamtro');
//console.log(array1.length);
array1.splice(2,0,'mango');
array1.shift();
array1.pop();
//console.log("ecranze darcha "+array1.length+" elementi. esemia: "+array1);


// 3. მოცემულია მასივი:

// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;
let array2 = [12, 25, 3, 6, 8, 14, 7, 23];

let mas=array2.map(x=> x/3)
//console.log(mas);
let mass=array2.map(function(item){
   // console.log(item/3);
});


4.  //მოცემულია მასივი:

let array3 = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები; 


let nuwArrey=array3.filter(function(item){
    if(typeof item=='number'){
        return item;
    }
})

let nuwArrey1=array3.filter(x=> typeof x=='number');

//console.log(nuwArrey);
//console.log(nuwArrey1);

// 5.მოცემულია მასივი:

 let languages = ['html', 'css', 'javascript', 'python', 'php'];
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

let array4=languages.filter(x=> x.length>3);
//console.log(array4);

let array5=languages.filter(function(item){
    return item.length>3;
})
//console.log(array5);

// 6.მოცემულია მასივი:
let array6= ['academy', 'of', 'digital', 'industries']

// Reduce-ის საშუალებით მიიღეთ ერთი კომბინირებული სტრინგი(academy of digital industries);

array6= ['academy', 'of', 'digital', 'industries'].reduce(function(acumulator,concatveliu){
    return acumulator.concat(concatveliu+" ");
},
 ''
)
//console.log(array6);

// 7. მოცემულია მასივი:
 //let item = [12, 'google', 32, null, 'yahoo’, 25];

// შექმენით ახალი მასივი map ფუნქციის გამოყენებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს
// ამ რიცხვის კვადრატი. თუ ელემენტი არის ტექსტი, მაშინ ახალ მასივში უნდა იყოს 
//ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტები უნდა დაემატოს უცვლელად;
let item=[12,'google',32,null,'yahoo',25];

let array7=item.map(x=>{
     let mas5=(typeof x=='number')?x*x:
               (typeof x=='string')?x.toUpperCase():x

               return mas5;
})

//console.log(array7);

// 8. Მოცემულია მასივი:
 let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

// Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;

let includmet=words.filter(function(item){
    if(item.includes('m')||item.includes('M')){
        return item;
    }
})
    console.log(includmet);