import { Component } from "@angular/core";

@Component({
  selector: "app-custom-hello",
  template: `
    <p>Hello world!</p>
  `
})
export class HelloComponent {
  titulo = "Hola";
}
