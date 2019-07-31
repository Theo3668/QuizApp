import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results3',
  templateUrl: './results3.page.html',
  styleUrls: ['./results3.page.scss'],
})
export class Results3Page implements OnInit {

  // From category3
  ThirdScore:number
  SecondScore:number;
  firstScore:number;
  totalScore: number;
  percentage: number;
  per:number;
  displayTime:any;
  
  constructor(private route: ActivatedRoute, private navigator: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params)
      
      this.ThirdScore = params.ThirdScore
      console.log(this.ThirdScore), 

      this.firstScore = params.firstScore
      console.log(this.firstScore),

      this.SecondScore = params.SecondScore
      console.log(this.SecondScore),

      this.displayTime = params.displayTime
      console.log(this.displayTime)

      this.per = (this.ThirdScore / 5) * 100;
    })

  }

  onContinue() {
    this.totalScore = +this.firstScore + +this.SecondScore + +this.ThirdScore;
    this.percentage = (this.totalScore / 15) * 100;
    this.navigator.navigate(['/results-final'], { queryParams:{firstScore: this.firstScore,SecondScore: this.SecondScore,ThirdScore: this.ThirdScore,totalScore:this.totalScore,percentage:this.percentage}});
  }
  // onFinish() {
  //   this.navigator.navigate(['/results-final'], { queryParams:{firstScore: this.firstScore,SecondScore: this.SecondScore,ThirdScore: this.ThirdScore}});
  // }

}
