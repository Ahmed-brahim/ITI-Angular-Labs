import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Certficates } from './certficates';

describe('Certficates', () => {
  let component: Certficates;
  let fixture: ComponentFixture<Certficates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Certficates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Certficates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
