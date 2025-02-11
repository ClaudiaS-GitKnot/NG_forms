import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactive4Component } from './reactive4.component';

describe('Reactive4Component', () => {
  let component: Reactive4Component;
  let fixture: ComponentFixture<Reactive4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Reactive4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactive4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
