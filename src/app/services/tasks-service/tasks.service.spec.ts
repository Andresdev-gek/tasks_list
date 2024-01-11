import { ResponseTodos, TasksService } from './tasks.service';
import { Observable, of } from 'rxjs';

describe('TasksService', () => {
  let service: TasksService;
  let httpClientMock: any;

  /* The `TasksService` is a service in an Angular application that is being tested. */

  beforeEach(() => {
    httpClientMock = {
      get: jest.fn()
    }

    service = new TasksService(httpClientMock);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  // camino feliz
  it('getTodos() could be called', () => {
    jest.spyOn(httpClientMock, 'get')

    service.getTodos()

    expect(httpClientMock.get).toHaveBeenCalled()
  });

  /* The code is testing the `getTodos()` method of the `TasksService` class. */
  it('getTodos() could be called', () => {
    const response = {
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
    }
    jest.spyOn(service, 'getTodos').mockReturnValue(of(response))
    const result = service.getTodos()

    expect(result).toBeInstanceOf(Observable<ResponseTodos>)
  });
});
