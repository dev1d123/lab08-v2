import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HangmanComponent } from './components/hangman/hangman.component';
import { DisplayComponent } from './components/display/display.component';
import { QuestionComponent } from './components/question/question.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HangmanComponent, DisplayComponent, QuestionComponent, KeyboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'juego-hangman';
}
