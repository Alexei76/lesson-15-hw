
//for (let i = 0; i < 3; i++) 
//{alert( `number ${i}!` ); }

//2
let i=0;
while(i<3)
{alert( `number ${i}!` );
i++;}

//3
for(i=2;i<10;i++)
{if(i%2==0){console.log(i);}}

//4
let a = +prompt('a?','');
switch(a) {
case 1:alert('0');
break;
case 2:alert('1');
break;
case 3:
case 4:
alert('2,3');
break;
default:
alert('sorry');} 

//5    
let browsName=prompt('Choose your browser number:EDGE is 1,other is 2 ');
if(browsName==1){alert("You've got the Edge!");}
else if(browsName==2){alert( 'Okay we support these browsers too' ); }
else{ alert( 'We hope that this page looks ok!' ); }

