import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { routing } from './app.routing'

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
    imports: [ BrowserModule, FormsModule, ReactiveFormsModule, routing ],
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
    bootstrap: [ AppComponent ]
})

export class AppModule { }