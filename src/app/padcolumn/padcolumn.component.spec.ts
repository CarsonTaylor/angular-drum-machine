import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadcolumnComponent } from './padcolumn.component';

describe('PadcolumnComponent', () => {
  let component: PadcolumnComponent;
  let fixture: ComponentFixture<PadcolumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadcolumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadcolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
