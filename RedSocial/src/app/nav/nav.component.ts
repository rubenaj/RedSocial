import { AlertifyService } from '../alertify.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import { BsDropdownModule } from 'ngx-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  photoUrl: string;

  constructor(public authService: AuthService, private alertifyService: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe(x => this.photoUrl = x);
  }

}