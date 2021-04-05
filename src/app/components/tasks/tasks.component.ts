import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from "@angular/common"
import { Task } from "./../../Models/task"
@Component({
  selector: 'app-task',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() item: Task;
  tasks: Task[] = [];
  isPageLoaded = false;
  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.isPageLoaded = true;
  }
  isExists(ttl: string, tsks: Task[]): boolean {
    return tsks.some(task => task.taskTitle == ttl);
  }
  // isEmpty(title: string, tasks: Task[]): boolean {
  //   return tasks => task.taskTitle == " ");
  // }
  getPendingTaskCount(): number {
    return this.tasks.filter(task => !task.taskStatus).length;
  }
  addNewTask(title: string) {
    this.item = new Task()
    if (!this.isExists(title, this.tasks)) {
      if (title.length > 0) {
        this.item.taskTitle = title;
        this.tasks.push(this.item);
      }
      else
        alert("cannot enter empty task to do")
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
  updateTask(task: Task) {
    task.taskStatus = !task.taskStatus;
  }
  validateLength(title: string): Boolean {
    return title.length === 0;
  }

  showDetails(i: number)
    {
this._router.navigate(['tasks/' + i]);
  }
}
