import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherSecurePageComponent } from './another-secure-page.component';

describe('AnotherSecurePageComponent', () => {
  let component: AnotherSecurePageComponent;
  let fixture: ComponentFixture<AnotherSecurePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherSecurePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherSecurePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
