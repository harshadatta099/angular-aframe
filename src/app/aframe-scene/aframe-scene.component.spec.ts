import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AframeSceneComponent } from './aframe-scene.component';

describe('AframeSceneComponent', () => {
  let component: AframeSceneComponent;
  let fixture: ComponentFixture<AframeSceneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AframeSceneComponent]
    });
    fixture = TestBed.createComponent(AframeSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
