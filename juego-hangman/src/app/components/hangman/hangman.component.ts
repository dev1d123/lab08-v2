import { Component, OnInit } from '@angular/core';
import { HangmanService } from '../../services/hangman.service';

@Component({
  selector: 'app-hangman',
  standalone: true,
  imports: [],
  templateUrl: './hangman.component.html',
  styleUrl: './hangman.component.css'
})
export class HangmanComponent implements OnInit {
  pregunta = '';
  preguntas: string[] = []; //luego de recibir la categoria!
  intentos: string[] = [];
  categoria: string = '';
  dificultad: number = 1; //0 -> easy, 1 -> normal, 2 ->hard

  constructor(private hangmanService: HangmanService){}

  ngOnInit(): void{
    console.log("Ejecutando");
    this.hangmanService.getQuestions().subscribe((response) =>{
      this.preguntas = response.items;
      this.categoria = response.category;
      this.escojerPregunta();
    });
  }
  escojerPregunta() {
    console.log(this.preguntas); 
    console.log(this.categoria);
  }
}
