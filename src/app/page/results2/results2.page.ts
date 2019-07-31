import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results2',
  templateUrl: './results2.page.html',
  styleUrls: ['./results2.page.scss'],
})
export class Results2Page implements OnInit {

  // From category2
   firstScore:number;
  SecondScore:number;
  per:number;
  displayTime: any;

  constructor(private route: ActivatedRoute, private navigator: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params)

      this.firstScore = params.firstScore
      console.log(this.firstScore),

      this.SecondScore = params.SecondScore
      console.log(this.SecondScore),

      this.displayTime = params.displayTime
      console.log(this.displayTime)

      this.per = (this.SecondScore / 5) * 100;
    })

  }

  onContinue() {
    this.navigator.navigate(['/category3'], { queryParams:{firstScore: this.firstScore, SecondScore: this.SecondScore}});
  }
  // onFinish() {
  //   this.navigator.navigate(['/category3'], { queryParams:{firstScore: this.firstScore, SecondScore: this.SecondScore}});
  // }

}
