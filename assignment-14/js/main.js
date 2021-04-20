 var c=document.getElementByID("myCanvas");
 canvas.width= 600;
 canvas.height= 400;
 var ctx= c.getContext("2d");


 //first line
 ctx.moveTo(0, 0);
 ctx.lineTo(100, 50);
 ctx.stroke();

 //second line
 ctx.moveTo(100, 50);
 ctx.lineTo(0, 150);
 ctx.stroke();

 //third line
 ctx.moveTo(0, 150);
 ctx.lineTo(400, 100);
 ctx.stroke();

 //fouth line
 ctx.moveTo(400, 100);
 ctx.lineTo(55, 65);
 ctx.stroke();

 // fifth line
 ctx.moveTo(55, 65);
 ctx.lineTo(203, 206);
 ctx.stroke();


 // circle
 ctx.beginPath();
 ctx.arc(80, 46, 30, 0, 3 * Math.PI);
 ctx.fillstyle=("#FFFFF0");
 ctx.stroke();
