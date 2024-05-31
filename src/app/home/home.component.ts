import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  public form: FormGroup
  options: string[] = ['Pollo', 'Embutidos', 'Cerdo', 'Pavo'];
  selectedOption: string = this.options[0];

  

  ngOnInit(): void {
    
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    })
  }


  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
  
  currentIndex = 0;

  imagenes = [
    'assets/cousel/php.png',
    'assets/cousel/python.png',
    'assets/cousel/ux.png'
  ];
  textos = [
    'PHP',
    'PYTHON',
    'DISEÑO UX/UI'
  ];
  descriptions= [
    'PHP es un lenguaje de código abierto muy popular especialmente adecuado para el desarrollo web y que puede ser incrustado en HTML. echo "¡Hola, soy un script de PHP!"; ?>',
    'Python es un lenguaje de programación ampliamente utilizado en las aplicaciones web, el desarrollo de software, la ciencia de datos y el machine learning (ML).',
    'Aquí es donde entra la UX (experiencia de usuario) y la UI (interfaz de usuario), que tienen la función de que el usuario encuentre lo que busca en el menor tiempo posible y además tenga una buena experiencia al visitar la web.'
  ]
  imagenActual: string = this.imagenes[0];
  textoActual: string = this.textos[0];
  description: string = this.descriptions[0];
  indiceActual: number = 0;

  siguiente() {
    this.indiceActual = (this.indiceActual + 1) % this.imagenes.length;
    this.imagenActual = this.imagenes[this.indiceActual];
    this.textoActual = this.textos[this.indiceActual];
    this.description = this.description[this.indiceActual];
  }

  anterior() {
    this.indiceActual = (this.indiceActual - 1 + this.imagenes.length + this.descriptions.length) % this.imagenes.length;
    this.imagenActual = this.imagenes[this.indiceActual];
    this.textoActual = this.textos[this.indiceActual];
    this.description = this.description[this.indiceActual];
  }
}
