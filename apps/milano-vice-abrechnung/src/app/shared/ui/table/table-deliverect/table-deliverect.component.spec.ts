import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableDeliverectComponent } from './table-deliverect.component';

describe('TableDeliverectComponent', () => {
  let component: TableDeliverectComponent;
  let fixture: ComponentFixture<TableDeliverectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableDeliverectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableDeliverectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
