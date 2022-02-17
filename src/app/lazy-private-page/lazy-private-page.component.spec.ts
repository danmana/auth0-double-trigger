import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyPrivatePageComponent } from './lazy-private-page.component';

describe('LazyPrivatePageComponent', () => {
  let component: LazyPrivatePageComponent;
  let fixture: ComponentFixture<LazyPrivatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyPrivatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyPrivatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
