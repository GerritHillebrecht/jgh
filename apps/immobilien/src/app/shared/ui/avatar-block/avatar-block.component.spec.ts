import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarBlockComponent } from './avatar-block.component';

describe('AvatarBlockComponent', () => {
  let component: AvatarBlockComponent;
  let fixture: ComponentFixture<AvatarBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
