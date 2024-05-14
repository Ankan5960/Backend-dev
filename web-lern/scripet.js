function patnerName(gender,name){
    let number=Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    switch(number){
        case 1 :if(gender=="M"){
                    console.log(name+" + Sophia");
                }
                else{
                    console.log(name+" + Noah");
                } 
                break;
        case 2 :if(gender=="M"){
                    console.log(name+" + Olivia");
                }
                else{
                    console.log(name+" + Elijah");
                } 
                break;
        case 3 :if(gender=="M"){
                    console.log(name+" + Emma");
                }
                else{
                    console.log(name+" + Oliver");
                } 
                break;
        case 4 :if(gender=="M"){
                    console.log(name+" + Ava");
                }
                else{
                    console.log(name+" + James");
                } 
                break;
        case 5 :if(gender=="M"){
                    console.log(name+" + Charlotte");
                }
                else{
                    console.log(name+" + Benjamin");
                } 
                break;
        case 6 :if(gender=="M"){
                    console.log(name+" + Isabella");
                }
                else{
                    console.log(name+" + Lucas");
                } 
                break;
        case 7 :if(gender=="M"){
                    console.log(name+" + Mia");
                }
                else{
                    console.log(name+" + Henry");
                } 
                break;
        case 8 :if(gender=="M"){
                    console.log(name+" + Amelia");
                }
                else{
                    console.log(name+" + Alexander");
                } 
                break;
        case 9 :if(gender=="M"){
                    console.log(name+" + Evelyn");
                }
                else{
                    console.log(name+" + William");
                } 
                break;
        case 10 :if(gender=="M"){
                    console.log(name+" + Harper");
                }
                else{
                    console.log(name+" + Liam");
                } 
                break;
        default: console.log("Sorry your patner still not born");
                break;
    }
}

//patnerName("M", "ankan");


// let arr=[633,0,233];

// for(let x in arr){
//     console.log(arr[x]+" x value="+ x);
// }

// for(let x of arr){
//     console.log(arr[x]) 
// }

// let i=0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }



let h1tag=document.querySelector("#div1");

h1tag.innerHTML="Kankana";

