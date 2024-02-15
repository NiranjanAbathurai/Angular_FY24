import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

 // Data that gets displayed in the grid
  public rowData = "Input Testing";

  ngOnInit(){
    setTimeout(()=>{
      this.rowData = "Input Changed";
      console.log("Set Timeout")
    },2000)
  }

  constructor(private http: HttpClient, private router:Router) {}

  getSelected(event:any){
    //console.log(this.agGrid.api.getSelectedRows()); //For multiple selection value
    console.log("Get Selection")
    console.log(event);
    //this.router.navigate(['lazyLoad']);
  }
  // @ViewChild(AgGridAngular) agGrid !: AgGridAngular;

  clearSelection(): void {
    //this.agGrid.api.deselectAll();
    console.log("Clear Selection")
  }

}
