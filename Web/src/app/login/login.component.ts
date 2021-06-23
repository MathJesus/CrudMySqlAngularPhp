import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  invalidLogin: boolean = false;
  message: any;


  formLogin = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl('student'),
  });

  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router, 
    private apiService: StudentsService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required],
    })
  }


  login() {
  //   if (this.formLogin.invalid) {
  //     this.toastr.warning('Preencha os campos', '', { positionClass: 'toast-bottom-right' });
  //     return;
  //   }

  //   this.formLogin.disable();

  //   this.authService.login(this.formLogin.value).subscribe((data) => {
  //     let photoUrl = data.obj.user.photoUrl;

  //     if (data.obj.user.role == 'student' && !this.blnAdmin) {
  //       this.router.navigateByUrl('/areadoaluno');      

  //       data.obj.user.photoUrl = (photoUrl) ? photoUrl : 'user-no-photo.svg';
  //       data.obj.user.token = data.obj.token;
  //       this.authService.changeUserCurrent(data.obj.user);        
  //     } else if (data.obj.user.role == 'admin' && this.blnAdmin) {
  //       this.router.navigateByUrl('/admin/dashboard');

  //       data.obj.user.photoUrl = (photoUrl) ? photoUrl : './assets/images/user-no-photo.svg';
  //       data.obj.user.token = data.obj.token;
  //       this.authService.changeUserCurrent(data.obj.user);
  //     } else {
  //       this.toastr.warning('Seu usuário está sem permissão para acessar as áreas.', '', { positionClass: 'toast-bottom-right' });
  //     }

  //     this.formLogin.enable();
  //   },
  //     (error: HttpErrorResponse) => {
  //       if ((error.status == 400 || error.status == 404) && error.error.msgRet != undefined) {
  //         this.toastr.error(error.error.msgRet, '', { positionClass: 'toast-bottom-right' });
  //       }

  //       this.formLogin.enable();
  //     });
  }

  onSubmit(){
    console.log(this.loginForm.value);
    if (this.loginForm.invalid){
      return;
    }

    const loginData = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };

    this.apiService.login(loginData).subscribe((data: any) => {
      this.message = data.message;

      if(data.token) {
        window.localStorage.setItem('token', data.token);
        this.router.navigate(['view']);

      } else {
        this.invalidLogin = true;
        // alert(data.message);
      }
  });
  }
}
