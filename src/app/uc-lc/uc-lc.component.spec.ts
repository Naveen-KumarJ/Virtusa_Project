import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcLcComponent } from './uc-lc.component';

describe('UcLcComponent', () => {
  let component: UcLcComponent;
  let fixture: ComponentFixture<UcLcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcLcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcLcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
