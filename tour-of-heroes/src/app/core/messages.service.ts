import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  
  messages: string[] = [];

  add(message: string) {
  	this.messages.push(message)
  }

  clear(message: string) {
  	const index: number = this.messages.indexOf(message);
  	this.messages.splice(index, 1);
  }

  constructor() { }
}
