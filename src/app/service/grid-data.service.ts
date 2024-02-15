import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {

  rowData$ !: Observable<any[]>

  constructor( private http: HttpClient) {}

  onGridReady() {
    return this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
      //console.log(params);
  }

  // getRowData(){
  //   console.log(this.rowData$)
  //   return this.rowData$;
  // }
}
