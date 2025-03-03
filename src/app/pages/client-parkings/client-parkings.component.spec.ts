import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientParkingsComponent } from './client-parkings.component';

describe('ClientParkingsComponent', () => {
  let component: ClientParkingsComponent;
  let fixture: ComponentFixture<ClientParkingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientParkingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientParkingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
