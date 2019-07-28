import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditiorComponent } from './profile-editior.component';

describe('ProfileEditiorComponent', () => {
  let component: ProfileEditiorComponent;
  let fixture: ComponentFixture<ProfileEditiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
