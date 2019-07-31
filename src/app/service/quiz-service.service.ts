import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  constructor(private http: HttpClient) { }

  getFirstAPI(){
    return this.http.get('https://opentdb.com/api.php?amount=5&category=11&difficulty=medium&type=multiple');
  }
  getSecondAPI(){
    return this.http.get('https://opentdb.com/api.php?amount=5&category=20&difficulty=medium&type=multiple');
  }
  getThirdAPI(){
    return this.http.get('https://opentdb.com/api.php?amount=5&category=29&difficulty=medium&type=multiple');
  }
}
