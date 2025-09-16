import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  imports: [],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css'
  
})
export class ContactPage {
  
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Contact form submitted:', this.contact);
    alert('Message sent! Thank you, ' + this.contact.name + '.');

    
    this.contact = {
      name: '',
      email: '',
      message: ''
    };
  }
}
