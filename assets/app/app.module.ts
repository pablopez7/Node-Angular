import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { routing } from './app.routing'

import { AuthService } from './auth/auth.service'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header.component'

import { AuthenticationComponent } from './auth/authentication.component'
import { SignupComponent } from './auth/signup.component'
import { SigninComponent } from './auth/signin.component'
import { LogoutComponent } from './auth/logout.component'

import { MessageComponent } from './messages/message.component'
import { MessagesComponent } from './messages/messages.component'
import { MessageListComponent } from './messages/message-list.component'
import { MessageInputComponent } from './messages/message-input.component'

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,

        AuthenticationComponent,
        SignupComponent,
        SigninComponent,
        LogoutComponent,

        MessageComponent,
        MessagesComponent,
        MessageListComponent,
        MessageInputComponent
    ],
    imports: [
        routing,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [ AuthService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }