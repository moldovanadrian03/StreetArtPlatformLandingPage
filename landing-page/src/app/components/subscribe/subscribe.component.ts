import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
    email: new FormControl(' ', [Validators.required, Validators.email])
  });

  onSubmit(): void {
    this.subscriber = this.subscribeToNewsLetterForm.get('email')!.value;
    console.log('Subscriber:', this.subscriber);
    this.subscribeToNewsLetterForm.reset();
  }
}
