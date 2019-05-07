import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.css"]
})
export class BodyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  mostrar: boolean = true;

  frase: any = {
    mensaje: "Un gran poder require  una gran responsabilidad",
    autor: "Peter Parker"
  };

  personajes: string[] = ["Spiderman", "Venom", "Dr. Octopus"];
}
