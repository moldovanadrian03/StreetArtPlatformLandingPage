import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleOpinionComponent } from './people-opinion.component';

describe('PeopleOpinionComponent', () => {
  let component: PeopleOpinionComponent;
  let fixture: ComponentFixture<PeopleOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleOpinionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
