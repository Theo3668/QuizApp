import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results-final',
  templateUrl: './results-final.page.html',
  styleUrls: ['./results-final.page.scss'],
})
export class ResultsFinalPage implements OnInit {

  totalScore: number ;
  percentage: number ;
  ifPassed: string;
  // From category1
   firstScore:number;
  // From category2
   SecondScore:number;
  // From category3
  ThirdScore:number;
  

  constructor(private route: ActivatedRoute, private navigator: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params)

      this.firstScore = params.firstScore,
      this.totalScore = params.totalScore,
      this.percentage = params.percentage,
      this.SecondScore = params.SecondScore,
      this.ThirdScore = params.ThirdScore;
      console.log(this.firstScore,this.ThirdScore,this.totalScore,this.percentage,this.SecondScore,this.ThirdScore);
    })

    if(this.percentage >= 50.0){
      this.ifPassed = "Passed";
    }
    else if(this.percentage < 50.0){
      this.ifPassed = "Failed";
    }

   // this.totalScore = +this.firstScore + +this.SecondScore + +this.ThirdScore;
    //this.percentage = (this.totalScore / 15) * 100;
  }

  onContinue() {
    this.firstScore = 0;
    this.SecondScore = 0;
    this.ThirdScore = 0;
    this.navigator.navigateByUrl("home");
  }

}
