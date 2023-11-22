//console.log($("img").attr("src"));
//$("a").attr("href", "https://www.yahoo.com");

// $("h1").click(function() {
//     $("h1").css("color", "purple")
// });

// (1)  1 ve 2 aynı işi yapar
// for (var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// }

// (2)
// $("button").click(function() {
//     $("h1").css("color", "purple");
// });

//input textboxında yapılan tuşlamayı konsolda gösterir.
// $("input").keydown(function(event) {
//     console.log(event.key);
// });

$(document).keydown(function(event) {
    $("h1").html(event.key);
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
});