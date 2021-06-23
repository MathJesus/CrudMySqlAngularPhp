import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../students.service';
import { User } from '../Model/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  addForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private  apiService: StudentsService,
    private router: Router,
    private routes: ActivatedRoute) { 
    
  }

    ngOnInit() {

      const routeParams = this.routes.snapshot.params;
      console.log(routeParams.id);
      

      this.addForm = this.formBuilder.group({
        id: [],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.maxLength(8)]],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        age: ['', Validators.required],
        salary: ['', Validators.required],
        email: ['', [Validators.required, Validators.maxLength(30)]]
    });


    this.apiService.getUserById(routeParams.id).subscribe((data: any) => {
      this.addForm.patchValue(data);
    });
  }

  onUpdate() {
    this.apiService.updateUser(this.addForm.value)
    .subscribe(() => {
      this.router.navigate(['view']);
    },
      (error: any) => {
      alert(error);
    });
  }
}

