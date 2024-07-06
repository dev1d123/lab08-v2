import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const defaultJsonPath = 'keywords.json';

@Injectable({
  providedIn: 'root'
})
export class HangmanService {

  constructor(private http: HttpClient) { }

  getQuestions(jsonPath: string = defaultJsonPath): Observable<{ category: string, items: string[] }> {
    return this.http.get<{ category: string, items: string[] }>(jsonPath);
  }
}
