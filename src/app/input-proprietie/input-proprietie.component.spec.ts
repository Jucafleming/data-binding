import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputProprietieComponent } from './input-proprietie.component';

describe('InputProprietieComponent', () => {
  let component: InputProprietieComponent;
  let fixture: ComponentFixture<InputProprietieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputProprietieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputProprietieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
