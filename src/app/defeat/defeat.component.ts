import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-defeat',
  templateUrl: './defeat.component.html',
  styleUrls: ['./defeat.component.css']
})
export class DefeatComponent implements OnInit {

  lostMessage: string;
  word: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.word = params['word'];
      this.lostMessage = 'Desolé vous avez perdu!   Il fallait trouver : ' + this.word;
    });
  }

  restartGame() {
    this.router.navigate(['/']);
  }

}
