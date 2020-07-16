import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: ''
  password: ''

  constructor(private services: LoginService) {}

  ngOnInit(): void {
  }

  login(){
    let usuario = {
      email: this.email,
      password: this.password
    }

    this.services.login(usuario)

    console.log(usuario);
  }
}
