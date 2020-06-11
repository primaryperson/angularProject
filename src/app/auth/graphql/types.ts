import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import gql from 'graphql-tag';

export interface TokenData {
    token: string;
    refreshToken: string;
    expiresIn: number;
}

export interface ResponseSignIn {
    signIn: TokenData;
}

// export interface Mutation {
//     likeTweet?: Tweet | null;
// }

export interface Variables {
    token: string;
    socialName: string;
    email?: string;
    secret?: string;
}


@Injectable({
  providedIn: 'root',
})
export class SignIn extends Apollo.Mutation<ResponseSignIn, Variables> {
  document = gql`
    mutation signIn(
            $token: String!,
            $socialName: SocialMediaEnum!,
            $email: String,
            $secret: String
        ) {
            signIn(
                token: $token,
                socialName: $socialName,
                email: $email,
                secret: $secret
            ) {
                token
                refreshToken
                expiresIn
            }
        }
  `;
}
