import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrematchComponent } from './prematch.component';

describe('PrematchComponent', () => {
  let component: PrematchComponent;
  let fixture: ComponentFixture<PrematchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrematchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrematchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
