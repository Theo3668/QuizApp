import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { QuizServiceService } from 'src/app/service/quiz-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category3',
  templateUrl: './category3.page.html',
  styleUrls: ['./category3.page.scss'],
})
export class Category3Page implements OnInit {

  @ViewChild('slides') slides: any;
  
  hasAnswered: boolean = false;
  ThirdScore: number = 0;
  slideOptions: any;
  question: any;
  questionData: any;
  selectedAnswer: string;
  hideNext: any;
  hidePrev: any;
  firstScore:number;
 SecondScore:number;
  timeInSeconds: any;
  time: any;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  remainingTime: any;
  displayTime: string;
 
  constructor(private quizService: QuizServiceService, private route: Router, private par: ActivatedRoute) {

    this.quizService.getThirdAPI().subscribe(myData => {

    this.question = myData;
    this.questionData = this.question.results;

    console.log(myData);
    });

   }

   ngOnInit() {
    this.par.queryParams.subscribe(params => {
      console.log(params)

      this.firstScore = params.firstScore,
      this.SecondScore = params.SecondScore;
      console.log(this.firstScore,this.SecondScore);

          })
    this.initTimer();
    this.startTimer();
  }

  initTimer() {
    // Pomodoro is usually for 5 minutes
  if (!this.timeInSeconds) {
      this.timeInSeconds = 300;
  }
      this.time = this.timeInSeconds;
      this.runTimer = false;
      this.hasStarted = false;
      this.hasFinished = false;
      this.remainingTime = this.timeInSeconds;
      this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
  }
  startTimer(){
      this.runTimer = true;
      this.hasStarted = true;
      this.timerTick();
  }
  timerTick() {

  setTimeout(() => {
  if (!this.runTimer) { return; }
      this.remainingTime--;
      this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);

  if (this.remainingTime > 0) {
      this.timerTick();
  }
  else if (this.hasFinished = true) {
    this.route.navigateByUrl("results1")
  }
  }, 1000 );

  }
  getSecondsAsDigitalClock(inputSeconds: number) {
      var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
      var hours = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      var seconds = sec_num - (hours * 3600) - (minutes * 60);
      var hoursString = '';
      var minutesString = '';
      var secondsString = '';
      hoursString = (hours < 10) ? "0" + hours : hours.toString();
      minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
      secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
      return minutesString + ':' + secondsString;
  }

//======================================================================
  
  nextSlide(){
    this.slides.slideNext();
  }

  selectAnswer(answer, question){

    this.hasAnswered = true;
    answer.selected = true;
  
    if(answer.correct){
      this.ThirdScore++;
    }

    setTimeout(() => {
      this.hasAnswered = true;
      this.nextSlide();
      answer.selected = true;
      
  }, 50);
  }

  rightAnswer(){
    console.log(this.ThirdScore = this.ThirdScore + 1)
    if(this.hasAnswered = true){
      this.nextSlide();
    }
  }
  wrongAnswer(){
    console.log(this.ThirdScore = this.ThirdScore)
    if(this.hasAnswered ==true){
      this.nextSlide();
    }
  }
  wrongAnswer1(){
    console.log(this.ThirdScore = this.ThirdScore)
    if(this.hasAnswered ==true){
      this.nextSlide();
    }
  }
  wrongAnswer2(){
    console.log(this.ThirdScore = this.ThirdScore)
    if(this.hasAnswered ==true){
      this.nextSlide();
    }
  }

  restart() {
    this.ThirdScore = 0;
    this.slides.lockSwipes(false);
    this.slides.slideTo(0, 1000);
    this.slides.lockSwipes(false);
  }

  reset() {
    this.ThirdScore = 0;
    this.route.navigateByUrl("home");
  }

  EndSlide() {
    console.log("passed to results");
    this.route.navigate(['/results3'], { queryParams:{firstScore: this.firstScore,SecondScore: this.SecondScore, ThirdScore: this.ThirdScore, displayTime: this.displayTime}});
  }

}
