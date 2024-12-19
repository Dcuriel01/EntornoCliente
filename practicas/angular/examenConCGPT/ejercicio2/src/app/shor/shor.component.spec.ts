import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorComponent } from './shor.component';

describe('ShorComponent', () => {
  let component: ShorComponent;
  let fixture: ComponentFixture<ShorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
