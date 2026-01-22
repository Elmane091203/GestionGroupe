import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationGroupeComponent } from './formation-groupe.component';

describe('FormationGroupeComponent', () => {
  let component: FormationGroupeComponent;
  let fixture: ComponentFixture<FormationGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationGroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
