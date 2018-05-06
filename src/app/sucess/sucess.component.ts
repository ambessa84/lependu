import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.css']
})
export class SucessComponent implements OnInit {

  winMessage: string;
  word: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.word = params['word'];
      this.winMessage = 'Bravo vous avec gagné!   Le mot : ' + this.word;
    });
  }

  restartGame() {
    this.router.navigate(['/']);
  }

}
