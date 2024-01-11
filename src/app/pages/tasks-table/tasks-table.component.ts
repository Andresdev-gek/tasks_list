import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks-service/tasks.service';

interface Task {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css'],
})
export class TasksTableComponent implements OnInit {
  ELEMENT_DATA: Task[] = [];

  displayedColumns: string[] = [];
  dataSource: Task[] = [];

  noData: boolean;

  constructor(private tasksService: TasksService) {
    this.displayedColumns = ['id', 'todo', 'completed', 'userId'];
    this.dataSource = this.ELEMENT_DATA;
    this.noData = false;
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.tasksService.getTodos().subscribe(
      (res) => {
        console.log(res);
        if (res.todos) {
          this.dataSource = res.todos.slice(0, 15); //slice 0 al 15 para solo quedarme con 15 results
        }
      },
      (e) => {
        if (e.status == 404) {
          this.noData = true;
          alert('No pudimos obtener las tareas :(');
        }
      }
    );
  }
}
