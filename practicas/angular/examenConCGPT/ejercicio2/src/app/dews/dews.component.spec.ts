import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DewsComponent } from './dews.component';

describe('DewsComponent', () => {
  let component: DewsComponent;
  let fixture: ComponentFixture<DewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
