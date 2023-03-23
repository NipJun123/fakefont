function setup()
{
    video = createCapture(VIDEO)
    video.size(600,600)
    canvas = createCanvas(700,700)
    canvas.center()
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}

function modelLoaded()
{
    console.log("Model has been Loaded")
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results)
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
    }
}

function draw()
{
    background("white")
    fill("blue")
    textSize(difference)
    text("Nipun", nose_x, nose_y)
}
