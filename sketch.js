//initiate card pic var
var card_a_img, card_b_img, card_c_img, card_d_img, card_e_img;
var card_a_img_selected, card_b_img_selected, card_c_img_selected, card_d_img_selected, card_e_img_selected;

//initiate sprite variables for cards
var card_a, card_b, card_c, card_d, card_e;

// initiate the storage variables
var a=0, b=0, c=0, d=0, e=0;

// initiate the submit and reset button variable and its functionality variables
var subButton, total=0, subImg, resetButton, resetImg;

// initiate the background variable
var bg;

// create a state
var state=0;

function preload(){
  // load the images
  card_a_img = loadImage("card_a.png");
  card_b_img = loadImage("card_b.png");
  card_c_img = loadImage("card_c.png");
  card_d_img = loadImage("card_d.png");
  card_e_img = loadImage("card_e.png");
  card_a_img_selected = loadImage("card_a_selected.png");
  card_b_img_selected = loadImage("card_b_selected.png");
  card_c_img_selected = loadImage("card_c_selected.png");
  card_d_img_selected = loadImage("card_d_selected.png");
  card_e_img_selected = loadImage("card_e_selected.png");
  bg = loadImage("bgImage.jpg");
  subImg = loadImage("submit-button-png-25794.png");
  resetImg = loadImage("reset.png");
}
function setup() {
  createCanvas(displayWidth, displayHeight+100);  
  // create the sprites
  card_a = createSprite(200,400,250,250);
  card_b = createSprite(500,400,250,250);
  card_c = createSprite(800,400,250,250);
  card_d = createSprite(1100,400,250,250);
  card_e = createSprite(200,700,250,250);

  // assign the graphics to each sprite
  card_a.addImage(card_a_img);
  card_b.addImage(card_b_img);
  card_c.addImage(card_c_img);
  card_d.addImage(card_d_img);
  card_e.addImage(card_e_img);

  // create the submit button
  subButton = createSprite(500,900,300,50);
  subButton.addImage(subImg);
  subButton.scale=0.25

  // create the reset button
  resetButton = createSprite(750,subButton.y-15,300,50);
  resetButton.addImage(resetImg);
  resetButton.scale=0.5;
}

function draw() {
  background(bg);
  drawSprites();
  // header text
  fill("Blue");
  textSize(54);
  text("Magical Birthday Cards",400,50)
  fill("green");
  textSize(24);
  text("Click and select the cards which contain the day of your birthday and click on submit to find your date of birth displayed (NOTE : Only", 0, 100);
  text("the day, for example, if your birthday is on 1 July 2004 then select the card(s) having the number 1 in it)", 100,150)
  fill("yellow")
  textSize(18);
  text("You can also use this to shock your frends!", 500,200);
  // result text
  fill('#004b1f')
  textSize(32);
  // fontWeight('bold');
  
  if(mousePressedOver(card_a)){
    a=1;
    card_a.addImage(card_a_img_selected);
  }
  if(mousePressedOver(card_b)){
    b=2;
    card_b.addImage(card_b_img_selected);
  }
  if(mousePressedOver(card_c)){
    c=4;
    card_c.addImage(card_c_img_selected);
  }
  if(mousePressedOver(card_d)){
    d=8;
    card_d.addImage(card_d_img_selected);
  }
  if(mousePressedOver(card_e)){
    e=16;
    card_e.addImage(card_e_img_selected);
  }
  if(mousePressedOver(subButton)){
    total=a+b+c+d+e;
    state = 1
    console.log(total);
  }
  if(state===1){
    text("Your birthday is on "+total+" date", 500,675)
  }

  if(mousePressedOver(resetButton)){
    total=0;
    a=0;
    b=0;
    c=0;
    d=0;
    e=0;
    card_a.addImage(card_a_img);
    card_b.addImage(card_b_img);
    card_c.addImage(card_c_img);
    card_d.addImage(card_d_img);
    card_e.addImage(card_e_img);
    state=0;
  }
  
}

