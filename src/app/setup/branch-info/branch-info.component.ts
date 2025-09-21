import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-info',
  templateUrl: './branch-info.component.html',
  styleUrls: ['./branch-info.component.scss']
})
export class BranchInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('branch loads');

  }

}
