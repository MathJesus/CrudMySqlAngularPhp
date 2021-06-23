import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm!: FormGroup;
  token: any;

  constructor(private formBuilder: FormBuilder,
    private  apiService: StudentsService,
    private router: Router) { 
  }
  
  
  ngOnInit() {
    // this.token = window.localStorage.getItem('token');
    // console.log(this.token);
    // if(!this.token){
    //   this.router.navigate(['login']);
    // }
    this.addForm = this.formBuilder.group({
      id:[],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.maxLength(8)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required],
      email: ['', [Validators.required, Validators.maxLength(30)]]
    });
  }
  onSubmit() {
    console.log(this.addForm.value);

    this.apiService.createUser(this.addForm.value)
    .subscribe( data => {
      this.router.navigate(['view']);
    });
  }

  logOut(){
    window.localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
