import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosBiglistComponent } from './heros-biglist.component';

describe('HerosBiglistComponent', () => {
  let component: HerosBiglistComponent;
  let fixture: ComponentFixture<HerosBiglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerosBiglistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerosBiglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
