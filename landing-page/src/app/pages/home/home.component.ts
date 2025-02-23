import { Component } from '@angular/core';
import { AboutComponent } from "../../components/about/about.component";
import { PeopleOpinionComponent } from '../../components/people-opinion/people-opinion.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { MapComponent } from '../../components/map/map.component';
import { CommunityComponent } from "../../components/community/community.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    AboutComponent,
    PeopleOpinionComponent,
    FeaturesComponent,
    MapComponent,
    CommunityComponent,
    NavbarComponent,
    FooterComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
