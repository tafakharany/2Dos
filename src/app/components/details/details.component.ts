import { ActivatedRoute } from '@angular/router';
import { Task } from './../../Models/task';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  task: Task = new Task();
  constructor(private _activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    this.task.taskId = this._activatedRout.snapshot.params.taskId
  }
}
