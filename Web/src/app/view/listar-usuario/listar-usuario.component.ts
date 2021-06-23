import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  users: any;


  constructor(
    private apiService: StudentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }

  deleteUser(user: User): void {
    this.apiService.deleteUser(user.id)
    .subscribe( data => {
      this.users = this.users.filter((u: User) => u !== user);
    });
  }

  edit(user: User): void{
    this.router.navigate(['edit/' + user.id]);
  }

  NavigateAdd() {
    this.router.navigate(['add'])
  }

}
