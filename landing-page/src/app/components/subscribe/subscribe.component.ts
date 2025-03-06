import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-subscribe',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent {
  subscriber: string | null = null;

  subscribeToNewsLetterForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private readonly firebaseService: FirebaseService) {}

  onSubmit(): void {
    if(!this.subscribeToNewsLetterForm.valid) {
      this.subscribeToNewsLetterForm.reset();
      alert('Adresa de email este necesare');
      return;
    }

    this.subscriber = this.subscribeToNewsLetterForm.get('email')!.value;

    this.firebaseService.addSubscriber(this.subscriber!)
    .then((message) => {
      console.log(message);
      if(message === 'Email already subscribed') {
        alert('Email already subscribed');
      } else {
        alert('Subscribed successfully');
      }
    })
    .catch(error => {
      console.error(error);
      alert('Error occurred');
    });
    this.subscribeToNewsLetterForm.reset();
  }
}
