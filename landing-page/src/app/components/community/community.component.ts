import { Component } from '@angular/core';
import { JoinComponent } from '../join/join.component';
import { SubscribeComponent } from '../subscribe/subscribe.component';

@Component({
  selector: 'app-community',
  imports: [
    JoinComponent,
    SubscribeComponent
  ],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {

}
