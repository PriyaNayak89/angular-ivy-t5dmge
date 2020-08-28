import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  keyBoardAlphaKey:any = ['A','B','C','D','E','F','G','H','I','j','k','L','M','N','0','P', 'Q','R','S','T','U','V','X','Y','Z'];
  keyBoardNumericalKey = ['1','2','3','4','5','6','7','8','9','0'];

        buttonClicked(key){
          console.log( "Button clicked is", key)
        }                  
}
