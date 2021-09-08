img="";
status="";

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();

   ObjectDetector = ml5.ObjectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting objects";
}
function preload() {
    img = loadImage("dog_cat.jpg");
}
function draw(params) {
    image(img, 0, 0, 640, 420)
    fill("#FFFF00");
    text("dog",100,100);
    noFill();
    stroke("#FFFF00");
    rect(30,60,450,350);

    fill("#FF0000");
    text("cat",320,120);
    noFill();
    stroke("#FF0000");
    rect(300,90,270,320);
}
function modelLoaded() {
    console.log("MODEL LOADED!");
    status= true;
    ObjectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error)
    }

    else{
        console.log(result);
    }

}
