import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { ApiResponse } from '../Model/api-response';
import { User } from '../Model/user';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  users: any;

  constructor(
    private apiService: StudentsService,
    private router: Router
    ) { }

  ngOnInit() {
    this.toogleClick();
    this.resizeMenu();
  }

  toogleClick() {
    $("#sidebarToggle, #sidebarToggleTop").on('click', function (e: any) {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      if ($(".sidebar").hasClass("toggled")) {
        $('.sidebar .collapse').collapse('hide');
      };
    });
  }

  resizeMenu() {
    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function () {
      if ($(window).width() < 768) {
        $('.sidebar .collapse').collapse('hide');
      };

      // Toggle the side navigation when window is resized below 480px
      if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
        $("body").addClass("sidebar-toggled");
        $(".sidebar").addClass("toggled");
        $('.sidebar .collapse').collapse('hide');
      };
    });

    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e: any) {
      if ($(window).width() > 768) {
        var e0 = e.originalEvent,
          delta = e0.wheelDelta || -e0.detail;
        // this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
      }
    });
  }

  logout() {
    $('#logoutModal').modal('hide');
    // this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
