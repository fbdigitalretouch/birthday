//typewriter

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Happy Birthday!')
    .pauseFor(5000)
    .deleteAll()
    .start();


// volume
    $("#volumeOn").click(function(){
        $("#volumeOn").addClass("volumeOn");
        $("#volumeOff").removeClass("volumeOff");
    });

    $("#volumeOff").click(function(){
        $("#volumeOff").addClass("volumeOff");
        $("#volumeOn").removeClass("volumeOn");
    });



//song

var birthdaySong = new Audio("hb128.mp3")

$("#volumeOn").click(function(){
    birthdaySong.play()
    birthdaySong.onended = function(){
        alert("Auguri Dario :D");
        $("#volumeOff").addClass("volumeOff");
        $("#volumeOn").removeClass("volumeOn");
    }

    if(birthdaySong.currentTime === 1){
        $("#volumeOff").addClass("volumeOff");
        $("#volumeOn").removeClass("volumeOn");
    }

});

$("#volumeOff").click(function(){
    birthdaySong.pause();
    birthdaySong.currentTime = 0;
});


