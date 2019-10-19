import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from './store/states/app.state';
import { GetConfig } from './store/actions/config.action';
import { configSelector } from './store/selectors/config.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-medium';
  config$ = this._store.pipe(select(configSelector)) //TODO: chec isnt here selectConfig should be

  constructor(private _store: Store<IAppState>){}

  ngOnInit(){
    this._store.dispatch(new GetConfig());
  }
}
