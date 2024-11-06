cores =[]

cores[0]="Grey"
cores[1]="Red"
cores[2]="Yellow"
cores[3]="Green"

vermelho = true;
amarelo = false;
verde = false;

cor=1
posi=150

tempo = 0;

function setup() {
  createCanvas(1920, 1080);
}

 function draw() {
   background(220);
   
   //semáforo
   push()
   fill("black")
   rect(200, 100, 100, 300, 50)
   pop()
   
   // luzes
   fill(cores[0])
   circle(250, 150, 60)
   circle(250, 250, 60)
   circle(250, 350, 60)
   
   //automatizando o semaforo
   tempo++;
   text(tempo,20,30)
   
   if(tempo>300){
     tempo=0;
   }
   if(tempo>175 && tempo<=300){
     vermelho=true
     amarelo=false
     verde=false
   }
   if(tempo>125 && tempo<175){
     verde=false
     vermelho=false
     amarelo=true
   }
   
   if(tempo>0 && tempo<=125){
     amarelo=false
     verde=true
     vermelçho=false
   }
   
   
   if(vermelho==true){
     C=1
     posi = 150
   }
   if(amarelo==true){
     C=2
     posi = 250
   }
   if(verde==true){
     C=3
     posi = 350
   }
   
   
    fill(cores[C])
    circle(250,posi,60)
   
   
   
   
 }
