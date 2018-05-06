import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  numberOfMisses: number;
  missesAllowed: number;
  lost: boolean;
  win: boolean;
  wordToFind: string;
  @Input() set selectedLevel (level) {
    if (!level) {
      return;
    } else {
      const words = this.selectWordsByLevel(level - 1);
      this.wordToFind = this.getRandomWord(words);
      this.secretWord = this.splitWord(this.wordToFind);
    }
  }
  secretWord: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.numberOfMisses = 0;
    this.missesAllowed = 10;
  }

  selectWordsByLevel(level) {
    const wordsByLevel = [
      ['un', 'deux', 'trois'],
      ['avion', 'train', 'voiture'],
      ['maison', 'communication', 'orthographe']
    ];
    return wordsByLevel[level];
  }

  getRandomWord(words) {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
  }

  splitWord(word) {
    const splitedWord = word.split('');
    return splitedWord.map(function(character) {
      return { name: character, chosen: false };
    });
  }

  checkLetter(guess) {
      let found = false;
      this.secretWord.forEach(function(letter) {
        if (guess.toUpperCase() === letter.name.toUpperCase()) {
          letter.chosen = true;
          found = true;
        }
      });
      if (!found) {
        this.numberOfMisses++;
      }
      this.checkForEndOfGame();
  }

  checkForEndOfGame() {
      this.win = this.secretWord.reduce(function(acc, letter) {
          return acc && letter.chosen;
      }, true);

      if (!this.win && this.numberOfMisses === this.missesAllowed) {
        this.lost = true;
      }
      if (this.lost) {
        this.router.navigate(['/defeat', this.wordToFind]);
      }
      if (this.win) {
        this.router.navigate(['/sucess', this.wordToFind]);
      }
  }
}
