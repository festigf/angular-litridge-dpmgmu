import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-departments',
  templateUrl: './list-departments.component.html',
  styleUrls: ['./list-departments.component.css']
})
export class ListDepartmentsComponent implements OnInit {
  utenti$;
 
  constructor(public dataService: DataService) { 
    this.utenti$ = this.dataService.getUtenti();
  }

  ngOnInit() { }

}
