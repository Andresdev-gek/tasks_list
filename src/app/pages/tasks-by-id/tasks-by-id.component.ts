import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks-service/tasks.service';
import { Task } from '../tasks-table/tasks-table.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks-by-id',
  templateUrl: './tasks-by-id.component.html',
  styleUrls: ['./tasks-by-id.component.css']
})
export class TasksByIdComponent implements OnInit {

  ELEMENT_DATA: Task[] = [];

  displayedColumns: string[] = [];
  dataSource: Task[] = [];

  noData: boolean;
  userId: number;

  constructor(private tasksService: TasksService,
    private router: ActivatedRoute) {
    this.displayedColumns = ['id', 'todo', 'completed', 'userId'];
    this.dataSource = this.ELEMENT_DATA;
    this.noData = false;
    this.userId = Number(this.router.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.tasksService.getTodos().subscribe(
      (res) => {
        console.log(res);
        if (res.todos) {
          this.dataSource = res.todos.filter((task) => task.userId === this.userId)

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
