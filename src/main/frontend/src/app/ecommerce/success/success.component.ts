import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  @Input() formModel: any;

  constructor() { }

  ngOnInit() {
  }

  refresh() {
    window.location.reload();
  }

}
