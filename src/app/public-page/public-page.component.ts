import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.scss']
})
export class PublicPageComponent implements OnInit {

  private ngDestroyed: Subject<void> = new Subject<void>();

  constructor(public auth: AuthService, public http: HttpClient) { }

  ngOnInit(): void {
    console.log('public-page: I subscribe once to user$');
    this.auth.user$
      .pipe(takeUntil(this.ngDestroyed))
      .subscribe(user => {
        console.log('public-page: I get user$', user);
      });

    this.http.get('/assets/test.json').subscribe(data => {
      console.log('public-page: I get data from /assets/test.json', data);
    });
  }

  ngOnDestroy(): void {
    this.ngDestroyed.next();
    this.ngDestroyed.complete();
  }

}
