import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
    getToken(): string {
        return window.localStorage.jwtToken;
    }

    setToken(token: string) {
        window.localStorage.jwtToken = token;
    }

    destroyToken() {
        window.localStorage.removeItem('jwtToken');
    }
}
