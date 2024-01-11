

import { of, throwError } from 'rxjs';
import { TasksTableComponent } from './tasks-table.component';
import { HttpErrorResponse } from '@angular/common/http';

describe('TasksTableComponent', () => {
  let component: TasksTableComponent;
  let taskServiceMock: any;
  let nombre: string;

  beforeEach(() => {
    taskServiceMock = {
      getTodos: jest.fn()
    }

    nombre = 'manuel';

    component = new TasksTableComponent(taskServiceMock)
  });

  it('component to be defined', () => {
    expect(component).toBeDefined()
    expect(nombre).toBe('manuel')
  })

  // camino feliz -- green way
  it('ngOnInit() could be called', () => {
    jest.spyOn(taskServiceMock, 'getTodos').mockReturnValue(of({
      todos: [
        {
          id: 1,
          todo: "Do something nice for someone I care about",
          completed: true,
          userId: 26
        }
      ],
      total: 150,
      skip: 0,
      limit: 30
    }))

    jest.spyOn(component, 'ngOnInit')
    jest.spyOn(component, 'getTasks')

    component.ngOnInit()

    expect(component.getTasks).toHaveBeenCalled()
  })


  // camino feliz -- green way
  test('getTasks() could be called', () => {
    jest.spyOn(taskServiceMock, 'getTodos').mockReturnValue(of({
      todos: [
        {
          id: 1,
          todo: "Do something nice for someone I care about",
          completed: true,
          userId: 26
        }
      ],
      total: 150,
      skip: 0,
      limit: 30
    }))



    component.getTasks()

    expect(taskServiceMock.getTodos).toHaveBeenCalled()
    expect(component.dataSource).toStrictEqual([
      {
        id: 1,
        todo: "Do something nice for someone I care about",
        completed: true,
        userId: 26
      }
    ])
  })


  // camino infeliz -- red way
  test('getTasks() could be called', () => {
    jest.spyOn(window, 'alert')

    const error = new HttpErrorResponse({
      error: 'errorBack',
      status: 404,
      statusText: 'Unknown Error',
    })

    jest.spyOn(taskServiceMock, 'getTodos').mockReturnValue(throwError(() => error))



    component.getTasks()

    expect(taskServiceMock.getTodos).toHaveBeenCalled()
    expect(window.alert).toHaveBeenCalled()
  })



});
