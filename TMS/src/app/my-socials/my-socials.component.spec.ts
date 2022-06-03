import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySocialsComponent } from './my-socials.component';

describe('MySocialsComponent', () => {
  let component: MySocialsComponent;
  let fixture: ComponentFixture<MySocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySocialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
