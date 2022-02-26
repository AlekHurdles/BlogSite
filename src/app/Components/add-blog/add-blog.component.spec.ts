import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBLogComponent } from './add-blog.component';

describe('AddBLogComponent', () => {
  let component: AddBLogComponent;
  let fixture: ComponentFixture<AddBLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
