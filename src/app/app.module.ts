import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchcardComponent } from '@shared/searchcard/searchcard.component';
import { GraphQLModule } from '@core/graphql.module';
import { CoreModule } from '@core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from 'app/store/user/user.effects';

@NgModule({
    declarations: [
        AppComponent,
        SearchcardComponent
    ],
    imports: [
        CoreModule,
        BrowserModule,
        AppRoutingModule,
        GraphQLModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
            }
        }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([
            UserEffects
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
