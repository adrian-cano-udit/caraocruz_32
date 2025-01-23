$(document).ready(function(){

    let $coin = $("#coin");

    $coin.on("click", function(){
        let randomNum = Math.random();
        $coin.removeClass();

        setTimeout(function(){
            if (randomNum <= 0.5) {
                console.log("Es cara!");
                $coin.addClass("isHeads");
            } else {
                console.log("Es cruz!");
                $coin.addClass("isTails");
            }
        }, 100);
         
    });

});