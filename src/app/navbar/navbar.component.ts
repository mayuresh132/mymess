
import { Component, OnInit, NgZone, ViewChild} from '@angular/core';
import { AuthService, AppGlobals } from 'angular2-google-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {

  imageURL: string;
  email: string;
  name: string;
  token: string;
  phone: string;
  gender: any;
  check = true;
  showModal: boolean;
  constructor(private auth: AuthService,  private zone: NgZone) {

    }
    ngOnInit() {

  AppGlobals.GOOGLE_CLIENT_ID = '273076167636-quvs0d3ipn1s0rd7jebg1lo2m4gs81ma.apps.googleusercontent.com';
  this.getData();
      setTimeout(() => { this.googleAuthenticate(); }, 50);
  console.log('onInIt');

    }
   googleAuthenticate() {
      this.auth.authenticateUser((result) => {
        this.zone.run(() => {
          console.log('hii result');
          console.log(this.getData());
          this.getData();
        });
      });
    }

      getData() {
      this.token = localStorage.getItem('token');
      this.imageURL = localStorage.getItem('image');
      this.name = localStorage.getItem('name');
      this.email = localStorage.getItem('email');
       this.phone = localStorage.getItem('phone');
    }
    logout() {
      const scopeReference = this;
      this.auth.userLogout(function () {
        scopeReference.clearLocalStorage();
      });
    }

     clearLocalStorage() {
      localStorage.removeItem('token');
      localStorage.removeItem('image');
      localStorage.removeItem('name');
      localStorage.removeItem('email');
        localStorage.removeItem('phone');
    }
  }
