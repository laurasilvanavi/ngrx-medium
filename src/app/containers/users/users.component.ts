import { Component, OnInit } from '@angular/core';
import { selectUserList } from 'src/app/store/selectors/user.selector';
import { IAppState } from 'src/app/store/states/app.state';
import { Store, select } from '@ngrx/store';
import { GetUsers } from 'src/app/store/actions/user.action';
import { Router } from '@angular/router';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$ = this._store.pipe(select(selectUserList));

  constructor(
    private _store: Store<IAppState>,
    private _router: Router
  ) { }

  ngOnInit() {
    this._store.dispatch(new GetUsers());
    console.log('dispatched')
  }

  navigateToUser(id: number){
    this._router.navigate(['user', id]);
  }

}
