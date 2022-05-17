import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  today = new Date ();
  date = new Date(2022,1,3);

  telefono: number=0;

  name = 'Ayelén';
  age = 29;
  img = 'https://i.imgur.com/WqHi5SI.jpg';
  btnDisabled = true;

  //objeto
  person = {
    name: 'ayelen',
    age: 29,
    avatar: 'https://i.imgur.com/WqHi5SI.jpg',
  };
  //metodos
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  // metodo boton para incrementar la Edad
  increaseAge() {
    this.person.age += 1;
  }


  box = {
    width: 100,
    height: 100,
    background: 'red',
  };

  register = {
    name: '',
    email: '',
    password: '',
  };

  onRegister(){
    console.log(this.register)
  }
  // esto imprime el objeto register con todos los datos escritos e enviados en el formulario
}
