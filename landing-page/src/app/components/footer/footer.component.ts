import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-footer',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  subscriber: string | null = null;
  subscribeToNewsLetterForm: FormGroup = new FormGroup({
    email: new FormControl(' ', [Validators.required, Validators.email])
  });

  constructor(private readonly firebaseService: FirebaseService) {}

  onSubmit(): void {
    if(this.subscribeToNewsLetterForm.valid) {
      this.subscriber = this.subscribeToNewsLetterForm.get('email')?.value;

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
    }
    this.subscribeToNewsLetterForm.reset();
  }

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}
