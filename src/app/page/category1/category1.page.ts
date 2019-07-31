import { Component, OnInit, ViewChild} from '@angular/core';
import { QuizServiceService } from 'src/app/service/quiz-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category1',
  templateUrl: './category1.page.html',
  styleUrls: ['./category1.page.scss'],
})
export class Category1Page implements OnInit {

  @ViewChild('slides') slides: any;
  
  hasAnswered: boolean = false;
  firstScore: number = 0;
  slideOptions: any;
  question: any;
  questionData: any;
  selectedAnswer: string;
  hideNext: any;
  hidePrev: any;
  timeInSeconds: any;
  time: any;
  runTimer: boolean;
  hasFinished: boolean;
  hasStarted: boolean;
  remainingTime: any;
  displayTime: any;

  constructor(private quizService: QuizServiceService, private router: Router) {

    this.quizService.getFirstAPI().subscribe(myData => {

    this.question = myData;
    this.questionData = this.question.results;

    console.log(myData);
    });

   }

  ngOnInit() {
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
    this.router.navigateByUrl("results1")
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
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  selectAnswer(answer, question){

    this.hasAnswered = true;
    answer.selected = true;
  
    if(answer.correct){
      this.firstScore++;
    }

  }

  rightAnswer(){
    console.log(this.firstScore += 1)
    if(this.hasAnswered = true){
      this.nextSlide();
    }
  }
  wrongAnswer(){
    console.log(this.firstScore = this.firstScore)
    if(this.hasAnswered ==true){
      this.nextSlide();
    }
  }
  wrongAnswer1(){
    console.log(this.firstScore = this.firstScore)
    if(this.hasAnswered ==true){
      this.nextSlide();
    }
  }
  wrongAnswer2(){
    console.log(this.firstScore = this.firstScore)
    if(this.hasAnswered ==true){
      this.nextSlide();
    }
  }


  // if(selectedAnswer = this.question.correct_answer){
  //   this.firstScore++;
  // } 
  restart() {
    this.initTimer();
    this.startTimer();
    this.firstScore = 0;
    this.slides.lockSwipes(false);
    this.slides.slideTo(0, 1000);
    this.slides.lockSwipes(false);
  }

  reset() {
    this.initTimer();
    this.startTimer();
    this.firstScore = 0;
    this.router.navigateByUrl("home");
  }

  EndSlide() {
    this.router.navigate(['/results1'], { queryParams:{firstScore: this.firstScore, displayTime: this.displayTime}});
  }
}
