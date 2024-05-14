

$("h1").css("color","red");

let htag=$("h1");
htag.css("color","black"); //update css by this function
$("h1").text("Bye ankan");     //change the text by this function
htag.html("<h6>welcome ankan</h6>") //edit the html by using this

//Manipulte the attributes
console.log($("img").attr("src"));
$(".googla").attr("href", "https://www.facebook.com") //set attributes like this

console.log($(".googla").attr("href"));

$("input").keypress(function (e) {
    console.log(e.key);
});

$(".hide").click(()=>{
    htag.fadeToggle(1000);
})

$(".slid").click(()=>{
    htag.slideToggle(1000);
})

$(".animate").click(()=>{
    htag.animate({opacity: 0.5,margin: 20});
})

// $("img").css("border-radius","50%")
// $("img").mouseenter(function(e){
//     e.preventDefault();
//     console.log("mouse is here");
//     $("*").css("background-color","blue")
//     $("img").css("background-color","blue")
// })

// $("img").mouseleave(()=>{
//     console.log("mouse gone")
//     $("*").css("background-color","red")
//     $("img").css("background-color","red")
// })
