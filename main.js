function preload(){
     
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.position(725,300);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 600, 500);

}
function download(){
    save('myPhoto.png');
}