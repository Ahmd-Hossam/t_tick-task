
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import {AUTO_SIZE_INPUT_OPTIONS, AutoSizeInputModule, AutoSizeInputOptions} from 'ngx-autosize-input';
import { ResizedEvent } from 'angular-resize-event';
import { ThrowStmt } from '@angular/compiler';
import { from } from 'rxjs';
import { NgxQrcodeElementTypes } from '@techiediaries/ngx-qrcode';
import { NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';

declare var $:any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'app';
  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel=NgxQrcodeErrorCorrectionLevels.HIGH
  value = 'https://www.youtube.com/watch?v=qr7f9DjXbHE';
 



  pageX:any;
  pageY:any;

  width: number=0;
  height: number=0;


  Text_number:number=0
  Bar_number:number=0


  constructor() {}
  ngOnInit(): void {
 
  }

  //text array
  textArry(): Array<number> {
    return Array(this.Text_number);
  }
  
  //BarCode array
  BarArray(): Array<number> {
    return Array(this.Bar_number);
  }
  
  //increment text 
    AddText(){
      this.Text_number +=1
    }

    //increment bar
    AddBar(){
      this.Bar_number +=1
    }

    //delate All
   

  //resize element 
  onResized(event: ResizedEvent) {
    this.width = event.newWidth;
    this.height = event.newHeight;
    console.log('width', this.width);
    console.log('height', this.height)
  }


  //increment Bar
  incre_Bar(){
    this.Bar_number -=1
  }

  //increment Text
   incre_text(){
    this.Text_number -=1
  }

 delate(){
    this.Bar_number=0;
    this.Text_number=0;
    console.log('working');
  }
  

 




//when catch element 
mousedown(ball:any, e:any){
    console.log('down');
    
    let shiftX = e.clientX - ball.getBoundingClientRect().left;
    let shiftY = e.clientY - ball.getBoundingClientRect().top;


    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball);

   
    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX:any, pageY:any) {
      ball.style.left = pageX - shiftX + 'px';
      ball.style.top = pageY - shiftY + 'px';
      
      //calculate your walk 
      let fromLeft=pageX - shiftX + 'px';
      let fromTop=pageY - shiftY + 'px';
      console.log(fromLeft,fromTop);
    }

    
    moveAt(e.pageX, e.pageY);

    const onMouseMove = (e:any) => {
      moveAt(e.pageX, e.pageY);
      this.pageX=e.pageX - shiftX
      this.pageY=e.pageY - shiftY
    }
  
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);

     // drop the ball, remove unneeded handlers
      ball.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
      };

      ball.ondragstart = function() {
        return false;
        
      };
      
  }


}
