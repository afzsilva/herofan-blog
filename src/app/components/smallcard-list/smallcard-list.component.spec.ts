import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallcardListComponent } from './smallcard-list.component';

describe('SmallcardListComponent', () => {
  let component: SmallcardListComponent;
  let fixture: ComponentFixture<SmallcardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallcardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallcardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
