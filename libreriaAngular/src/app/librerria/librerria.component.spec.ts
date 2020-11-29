import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrerriaComponent } from './librerria.component';

describe('LibrerriaComponent', () => {
  let component: LibrerriaComponent;
  let fixture: ComponentFixture<LibrerriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrerriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrerriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
