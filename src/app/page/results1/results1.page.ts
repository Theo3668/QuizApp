import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results1',
  templateUrl: './results1.page.html',
  styleUrls: ['./results1.page.scss'],
})
export class Results1Page implements OnInit {

  // From category1
  firstScore:number;
  per: number;
  displayTime;


  constructor(private route: ActivatedRoute, private navigator: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params)

      this.firstScore = params.firstScore
      console.log(this.firstScore), 

      this.displayTime = params.displayTime
  
      this.per = (this.firstScore / 5) * 100;
    })

  }

  onContinue() {
    this.navigator.navigate(['/category2'], { queryParams:{firstScore: this.firstScore}});
  }

}
