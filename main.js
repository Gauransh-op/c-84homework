canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;


background_image = "racing.jpg";

                            
function add(){
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_image;

    car1_imgtag = new Image();
    car1_imgtag.onload = uploadCar1;
    car1_imgtag.src = car1_image;

    car2_imgtag = new Image();
    car2_imgtag.onload = uploadcar2;
    car2_imgtag.src = car2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}


function uploadCar1(){
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);
}


window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    if(keypressed =='38' ){
        up();
        console.log("up");
    }
    if(keypressed =='40' ){
        down();
        console.log("down");
    }
    if(keypressed =='37' ){
        left();
        console.log("left");
    }
    if(keypressed =='39' ){
        right();
        console.log("right");
    }  
}

function up(){
    if(rover_y >0){
        rover_y = rover_y-10;
        console.log("when up arrow pressed x="+rover_x +"y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}


function down(){
    if(rover_y <=500){
        rover_y = rover_y+10;
        console.log("when down arrow pressed x="+rover_x +"y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}


function left(){
    if(rover_x >0){
        rover_x = rover_x-10;
        console.log("when left arrow pressed x="+rover_x +"y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}


function right(){
    if(rover_x <700){
        rover_x = rover_x+10;
        console.log("when right arrow pressed x="+rover_x +"y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}