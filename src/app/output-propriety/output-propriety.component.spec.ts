import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputProprietyComponent } from './output-propriety.component';

describe('OutputProprietyComponent', () => {
  let component: OutputProprietyComponent;
  let fixture: ComponentFixture<OutputProprietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputProprietyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputProprietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
