import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksByIdComponent } from './tasks-by-id.component';

describe('TasksByIdComponent', () => {
  let component: TasksByIdComponent;
  let fixture: ComponentFixture<TasksByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
