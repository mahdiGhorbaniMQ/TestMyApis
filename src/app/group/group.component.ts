import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(endpoint:String){
    this.router.navigate([endpoint]);
  }

}
