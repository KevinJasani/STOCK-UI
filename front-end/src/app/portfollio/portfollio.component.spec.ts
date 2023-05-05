import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfollioComponent } from './portfollio.component';

describe('PortfollioComponent', () => {
  let component: PortfollioComponent;
  let fixture: ComponentFixture<PortfollioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfollioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfollioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
