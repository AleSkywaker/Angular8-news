import { Component } from "@angular/core";

@Component({
  selector: "app-custom-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"]
})
export class HelloComponent {
  titulo = "Hola Alex";
}
