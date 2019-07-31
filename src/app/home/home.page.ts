import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router) {}

  category1(){
    this.route.navigateByUrl('/category1');
  }
  category2(){
    this.route.navigateByUrl('/category2');
  }
  category3(){
    this.route.navigateByUrl('/category3');
  }

}
