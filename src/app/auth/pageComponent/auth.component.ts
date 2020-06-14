import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LoginWithFacebookService } from '@core/services/login-with-facebook.service';
import { UserService } from '@core/services/user/user.service';
import { Store, select } from '@ngrx/store';
import { State } from 'app/store';
import { User } from 'app/store/user/types';
import { attemptAuth } from 'app/store/user/user.actions';
import { SocialMediaName } from 'app/store/user/types';
import { StateUser } from 'app/store/user/user.reducer';
import { Observable } from 'rxjs';
import { scan, map } from 'rxjs/operators';
import { TokenData } from '../graphql/types';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, AfterViewInit {
    user$: Observable<StateUser>;

    constructor(
        private store: Store<State>,
        private loginWithFacebookService: LoginWithFacebookService,
        private userService: UserService
    ) {
        this.user$ = this.store.select('user');
    }

    ngOnInit(): void {
    }

    async authWithFacebook() {
        this.loginWithFacebookService.auth().then(({ authResponse }) => {
            this.store.dispatch(attemptAuth({
                socialName: SocialMediaName.FACEBOOK,
                socialAccessToken: authResponse.accessToken
            }));
        });
    }


    async ngAfterViewInit() {
        // this.initFacebookScript();
        // viewChild is set after the view has been initialized
        // this.logIt('AfterViewInit');
        // this.doSomething();
    }
}
