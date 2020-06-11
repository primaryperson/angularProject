import { Injectable } from '@angular/core';

interface LoginWith {
    auth(): Promise<any>;
}

@Injectable({
    providedIn: 'root'
})
export class LoginWithFacebookService implements LoginWith {
    private resolve = null;
    private reject = null;

    scopes = [
        'public_profile',
        'email'
    ];

    FB = new Promise<any>((res, rej) => {
        this.resolve = res;
        this.reject = rej;
    });

    constructor() {
        if (typeof window === 'undefined') {
            return;
        }

        this.initFacebook();
    }

    private initFacebook() {
        const selfWindow = (window as any);
        const facebookScript = document.createElement('script');
        facebookScript.src = 'https://connect.facebook.net/en_US/sdk.js';
        document.head.appendChild(facebookScript);

        selfWindow.fbAsyncInit = () => {
            selfWindow.FB.init({
              appId      : '2264945320479006',
              cookie     : true,
              xfbml      : true,
              version    : 'v2.4'
            });

            selfWindow.FB.AppEvents.logPageView();

            this.resolve(selfWindow.FB);
        };

        facebookScript.onerror = (_, __, ___, ____, error) => {
            this.reject(error);
        };
    }


    auth() {
        return new Promise(async (res) => {
            const fb = await this.FB;
            fb.login(
                (response) => {
                    res(response);
                },
                {
                    scope: this.scopes.join(',')
                }
            );
        });
    }
}
