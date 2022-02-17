import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-lazy-private-page',
  templateUrl: './lazy-private-page.component.html',
  styleUrls: ['./lazy-private-page.component.scss']
})
export class LazyPrivatePageComponent implements OnInit {

  private ngDestroyed: Subject<void> = new Subject<void>();

  constructor(public auth: AuthService, public http: HttpClient) { }

  ngOnInit(): void {
    console.log('lazy-private-page: I subscribe once to user$');
    this.auth.user$
      .pipe(takeUntil(this.ngDestroyed))
      .subscribe(user => {
        console.log('lazy-private-page: I get user$', user);
      });

    this.http.get('/assets/private-test.json').subscribe(data => {
      console.log('lazy-private-page: I get data from /assets/private-test.json', data);
    });
  }

  ngOnDestroy(): void {
    this.ngDestroyed.next();
    this.ngDestroyed.complete();
  }

}
