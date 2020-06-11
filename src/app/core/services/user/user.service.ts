import { Injectable } from '@angular/core';
import { SignIn } from 'app/auth/graphql/types';

export enum SocialMediaName {
    GOOGLE = 'GOOGLE',
    FACEBOOK = 'FACEBOOK',
    TWITTER = 'TWITTER',
    VK = 'VK'
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private signIn: SignIn) { }

    attemptAuth(socialName: SocialMediaName, socialAccessToken: string) {
        return this.signIn.mutate({
            token: socialAccessToken,
            socialName
        });
    }
}
