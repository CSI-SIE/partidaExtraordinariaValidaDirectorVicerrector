import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaVideoComponent } from './ayuda-video.component';

describe('AyudaVideoComponent', () => {
  let component: AyudaVideoComponent;
  let fixture: ComponentFixture<AyudaVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudaVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyudaVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
