import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallcardItemComponent } from './smallcard-item.component';

describe('SmallcardItemComponent', () => {
  let component: SmallcardItemComponent;
  let fixture: ComponentFixture<SmallcardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallcardItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallcardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
