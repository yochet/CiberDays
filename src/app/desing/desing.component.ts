import { Component } from '@angular/core';

@Component({
  selector: 'app-desing',
  templateUrl: './desing.component.html',
  styleUrls: ['./desing.component.css']
})
export class DesingComponent {

  currentIndex = 0;
  items = ['assets/cousel/php.png', 'assets/cousel/python.png', 'assets/cousel/ux.png']; // Puedes reemplazar esto con cualquier contenido dinámico

  moveSlide(direction: number) {
    this.currentIndex += direction;

    if (this.currentIndex < 0) {
      this.currentIndex = this.items.length - 1;
    } else if (this.currentIndex >= this.items.length) {
      this.currentIndex = 0;
    }
  }

  imagenes = [
    'assets/cousel/php.png',
    'assets/cousel/python.png',
    'assets/cousel/ux.png'
  ];

  imagenActual: string = this.imagenes[0];
  indiceActual: number = 0;

  siguiente() {
    this.indiceActual = (this.indiceActual + 1) % this.imagenes.length;
    this.imagenActual = this.imagenes[this.indiceActual];
  }

  anterior() {
    this.indiceActual = (this.indiceActual - 1 +this.imagenes.length) % this.imagenes.length;
    this.imagenActual = this.imagenes[this.indiceActual];
  }
}
