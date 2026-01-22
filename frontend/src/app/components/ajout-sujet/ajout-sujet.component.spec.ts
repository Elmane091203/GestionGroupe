import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSujetComponent } from './ajout-sujet.component';

describe('AjoutSujetComponent', () => {
  let component: AjoutSujetComponent;
  let fixture: ComponentFixture<AjoutSujetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutSujetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
