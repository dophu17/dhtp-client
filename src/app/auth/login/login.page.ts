import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  myForm: FormGroup; 

  constructor(
    public router: Router, 
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  login() {
    console.log(this.myForm.value);
    this.router.navigateByUrl('/tabs/tab1');
  }
}
