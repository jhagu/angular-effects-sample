import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import * as Actions from '../../store/actions';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  loading: boolean;
  user: User = null;
  error: any;

  constructor( private route: ActivatedRoute,
               private store: Store<AppState>) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      const id = params.id;
      this.store.dispatch(new Actions.LoadUser(id));
    });

    this.store
      .select('user')
      .subscribe( res => {
        this.user = res.user;
        this.loading = res.loading;
        this.error = res.error;
      });
  }

}
