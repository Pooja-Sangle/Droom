import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicksellComponent } from './quicksell.component';

describe('QuicksellComponent', () => {
  let component: QuicksellComponent;
  let fixture: ComponentFixture<QuicksellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuicksellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuicksellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
