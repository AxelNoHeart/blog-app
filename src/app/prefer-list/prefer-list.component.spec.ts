import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferListComponent } from './prefer-list.component';

describe('PreferListComponent', () => {
  let component: PreferListComponent;
  let fixture: ComponentFixture<PreferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
