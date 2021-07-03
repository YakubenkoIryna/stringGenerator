import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-string-generator',
  templateUrl: './stringGenerator.component.html',
  styleUrls: ['./stringGenerator.component.scss']
})

export class StringGeneratorComponent implements OnInit {

  ngOnInit() {
    this.generateWords();
  }

  generateWords() {

    const intervalValue = interval(3000);
      // @ts-ignore
    intervalValue.subscribe(() => {
      let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let text = this.generateText(symbols);

      /////To check: how styles are changing and how work check of the generated text
      // let text = '12345'
      // let text = 'civic'

      if(this.isPalindrome(text)) {
        console.log(text + '- palindrome');
        return this.setGeneratedString("red", text);
      }
      if(this.isNumber(text)) {
        console.log(text + '- numbers');
        return this.setGeneratedString("blue", text);
      }
      if(this.isIncludeZero(text)) {
        console.log(text + '- 0 exists');
        return this.setGeneratedString("", "");
      }

      this.setGeneratedString("black", text);
      console.log(text)
    });
  }

  generateText(symbols: string){
    let text = '';
    for(let i = 0; i < 5; i++) {
      text += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    return text;
  }

  setGeneratedString(color: string, text: string){
    // @ts-ignore
    document.getElementById("string-generator__text").style.color = color;
    // @ts-ignore
    return document.querySelector('#string-generator__text').textContent = text;
  }

  isPalindrome(str: string) {
    let strReverse = str.split('').reverse().join('');
    return strReverse == str;
  }
  isNumber(str: string) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(str);
  }
  isIncludeZero(str: string) {
    return str.includes('0');
  }

}

