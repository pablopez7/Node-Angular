import { Component } from '@angular/core'

import { MessageService } from './message.service'
import { Message } from './message.model'

@Component({
    selector: 'message-input',
    templateUrl: './message-input.html'
})

export class MessageInputComponent {
    constructor(private messageService: MessageService){}

    onSave(value: string){
        const message = new Message(value, 'Pablo')
        this.messageService.addMessage(message)
    }
}