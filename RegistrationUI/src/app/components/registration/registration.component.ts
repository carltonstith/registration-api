import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.formModel.reset();
  }

  onSubmit() {
    console.log('register a new user')
  }

}
