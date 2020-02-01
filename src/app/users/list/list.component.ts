import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as Actions from '../../store/actions';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  users: User[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new Actions.LoadUsers());
  }

}
