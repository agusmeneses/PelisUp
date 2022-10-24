import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {AuthService} from '../../../services/auth.service'


@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css'],
})
export class IngresarComponent implements OnInit {


  Form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(
      this.Form.get('username')?.value || '',
      this.Form.get('password')?.value || '',
    ).then(
      response => {
        console.log('Login Response | ',response);
      }
    )
  }

  loginGoogle(){
    this.authService.loginWithGoogle().then(
      response => {
        console.log(response);
      }
    )
  }

  register(): void{
    this.authService.register(
      this.Form.get('username')?.value || '',
      this.Form.get('password')?.value || '',
    ).then(
      response => {
        console.log('Registered | ',response);
      }
    )
  }
  showUserData(){
    this.authService.getUserLogged().subscribe(
      response => {
        console.log('Registered | ',response);
      },
      error => {
        console.log(error);
      }
    )
  }

  get userData(){
    return 'User: '+ this.Form.get('username')?.value +' | Password: ' + this.Form.get('password')?.value
  }


}
