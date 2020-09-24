import { AuthService } from './../auth/auth.service';
import { LoginService } from './../auth/login.service';
import { AuthGuardService } from './../guards/auth-guard.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  providers: [AuthGuardService],
  encapsulation: ViewEncapsulation.None
})
export class AdminPanelComponent implements OnInit {

  constructor(private loginService : LoginService,
     private authService : AuthService,
     private router : Router) { }

  readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
  }

  ngOnInit(): void {
    const self = this;
      
    $(document).ready(function() {
        $('#dataTable_1').dataTable( {
          "sDom": '<"top"l>rt<"bottom"ip><"clear">',
          "order": [[ 3, "asc" ]],
          "columns": [
        { "width": "20%" },
        { "width": "20%" },
        { "width": "20%" },
        { "width": "10%" },
        { "width": "10%" },
        { "width": "10%" },
        { "width": "10%" },
      ]
        });
      });

      $("#imageUpload").change(function() {
        self.readURL(this);
      });
    
  }

  logout() {
    this.loginService.logout().subscribe(response => {
      this.authService.deleteToken();
      this.router.navigateByUrl('/login');
    });
  }

}
