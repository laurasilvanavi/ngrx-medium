import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects'
import {GetConfig, EConfigActions, GetConfigSuccess} from '../actions/config.action'
import { IConfig } from '../../models';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';


@Injectable()
export class ConfigEffects {
    @Effect()
    getConfig$ = this._actions$.pipe(
        ofType<GetConfig>(EConfigActions.GetConfig),
        switchMap(() => this._configService.getConfig()),
        switchMap((config: IConfig) => of(new GetConfigSuccess(config)))
    );

    constructor(
        private _configService: ConfigService,
        private _actions$: Actions
    ){}

}