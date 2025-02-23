import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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

  onSubmit(): void {
    this.subscriber = this.subscribeToNewsLetterForm.get('email')?.value;
    console.log('Subscriber:', this.subscriber);
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
