noseX=0;
noseY=0;
difference=0;
left_wrist_x=0;
right_wrist_x=0;

function setup(){
    canvas=createCanvas(550,375);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotResults);
}

function draw(){
    background('#808080');
    textSize(difference)
    fill('yellow');
    stroke('#F90093');
    text("Allan",noseX,noseY,difference);
    document.getElementById('text_length').innerHTML="Width and Height of the text will be "+difference+"px.";
}

function modelLoaded(){
    console.log("Model is loaded!");
}

function gotResults(results){
    if (results.length > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;;
        left_wrist_x=results[0].pose.leftWrist.x;
        right_wrist_x=results[0].pose.rightWrist.x;
        difference=floor(left_wrist_x-right_wrist_x);
       console.log("nose x =" + noseX + "," + "nose y ="+noseY); 
         console.log("left wrist x =" + left_wrist_x + "," + "right wrist x ="+right_wrist_x+", difference is of"+difference);
        
    }
}
