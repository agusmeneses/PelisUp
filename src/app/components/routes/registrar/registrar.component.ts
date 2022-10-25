import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {AuthService} from '../../../services/auth.service'

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  Form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  register(): void{
    this.authService.register(
      this.Form.get('username')?.value || '',
      this.Form.get('password')?.value || '',
    ).then(
      response => {
        console.log('Registered | ',response);
        localStorage.setItem('Usuario Registrado', JSON.stringify(response))
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

