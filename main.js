var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript
    document.getElementById("textbox").innerHTML = content;
        speak()
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in five seconds";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camara)
    setTimeout(function () {
        takeselfie()
        save()
    }, 5000)
}
var camara = document.getElementById("webcam");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90,
    flip_horiz: "true"
});

function takeselfie() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '">'
    })
}

function save() {
    link = document.getElementById("link")
    image = document.getElementById("selfie_image")
    link.href = image
    link.click()
}