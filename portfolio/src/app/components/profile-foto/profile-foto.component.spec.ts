import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFotoComponent } from './profile-foto.component';

describe('ProfileFotoComponent', () => {
  let component: ProfileFotoComponent;
  let fixture: ComponentFixture<ProfileFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileFotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
