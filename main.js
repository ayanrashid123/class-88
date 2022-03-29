var canvas=new fabric.Canvas('myCanvas');
player_x=10
player_y=10
block_image_width=30
block_image_heigth=30
var player_image=""
var block_image=""
function player_update(){
    fabric.Image.fromURL("player.png",function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    })
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img) {
        block_image = Img;
        block_image.scaleToWidth(block_image_width);
        block_image.scaleToHeight(block_image_heigth);
       block_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image);
    })
}
window.addEventListener("keydown",my_Keydown)
function my_Keydown(e){
    key_presed=e.keyCode
    if(key_presed=='37'){
        left()
    }
    if(key_presed=='40'){
        down()
    }
    if(key_presed=='38'){
        up()
    }
    if(key_presed=='39'){
        right()
    }
    if(key_presed=='67'){
       new_image('cloud.jpg')
    }
    if(key_presed=='68'){
        new_image('dark_green.png')
     }
     if(key_presed=='71'){
        new_image('ground.png')
     }
     if(key_presed=='76'){
        new_image('light_green.png')
     }
     if(key_presed=='82'){
        new_image('roof.jpg')
     }
     if(key_presed=='84'){
        new_image('trunk.jpg')
     }
     if(key_presed=='85'){
        new_image('unique.png')
     }
     if(key_presed=='87'){
        new_image('wall.jpg')
     }
     if(key_presed=='89'){
        new_image('yellow_wal.png')
     }
     if(e.shiftKey==true&&key_presed=='80'){
        block_image_width=block_image_width+10;
        block_image_heigth=block_image_heigth+10;
        document.getElementById("current_width").innerHTML=block_image_width 
        document.getElementById("current_heigth").innerHTML=block_image_heigth 
       }
if(e.shiftKey==true&&key_presed=='77'){
        block_image_width=block_image_width-10;
        block_image_heigth=block_image_heigth-10;
        document.getElementById("current_width").innerHTML=block_image_width 
        document.getElementById("current_heigth").innerHTML=block_image_heigth 
       }
       function up(){
           player_y = player_y - block_image_heigth;
           console.log("block image height = " + block_image_heigth)
           console.log("when up arrow key is pressed, X =" + player_x + ", Y ="+player_y);
           canvas.remove(player_object);
           player_update();
       }
function down(){
    if(player_y <500)
   { player_y = player_y + block_image_heigth;
    console.log("block image height = " + block_image_heigth)
    console.log("when down arrow key is pressed, X =" + player_x + ", Y ="+player_y);
    canvas.remove(player_object);
    player_update();
   }
}
function left(){
    if(player_x <0)
   { player_y = player_x + block_image_heigth;
    console.log("block image width = " + block_image_heigth)
    console.log("when left arrow key is pressed, X =" + player_x + ", Y ="+player_y);
    canvas.remove(player_object);
    player_update();
   }
}
function right(){
    if(player_x <850)
   { player_y = player_x + block_image_heigth;
    console.log("block image width = " + block_image_heigth)
    console.log("when right arrow key is pressed, X =" + player_x + ", Y ="+player_y);
    canvas.remove(player_object);
    player_update();
   }
}