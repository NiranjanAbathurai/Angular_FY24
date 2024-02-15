import { Component, EventEmitter, HostListener, Input, Output, SimpleChange, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable, of, interval, from } from 'rxjs';
import {take} from 'rxjs/operators';
import { GridDataService } from 'src/app/service/grid-data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  @Input() rowData !: String
  @Output() clearSelection = new EventEmitter()
  rowData$ !: Observable<any[]>
  testData !: any[];
  x = 5;
  constructor( private gridData: GridDataService, private router:Router,  private http: HttpClient) {}

  ngOnChanges(changes:SimpleChange){
    console.log(changes);
    console.log("On Changes method")
  }
 
  ngOnInit(){
    console.log("On Init method");
    this.onGridReady();
    let tempArray: any[] = [];
    this.testLoadData(this.x);

    // this.gridData.getRowData().subscribe((data)=>{
    //   console.log(data);
    //   tempArray = data;
    // });
    //this.rowData$ =  this.gridData.getRowData();
    setTimeout(()=>{
      //this.rowData$ =  this.gridData.getRowData();
      console.log(tempArray);
      const observ = from(tempArray).pipe(take(1));
     
      observ.subscribe((data)=>{
          console.log(data) ;
      })
    },1000)
   
  }
  // ngDoCheck(){
  //   console.log("Do Check method");
  // }

  // ngAfterContentInit(){
  //   console.log("After Content Init  method");
  // }

  // ngAfterContentChecked(){
  //   console.log("After Content Checked  method");
  // }

  // ngAfterViewInit(){
  //   console.log("After View Init  method");
  // }

  // ngAfterViewChecked(){
  //   console.log("After View Checked  method");
  // }

  public columnDefs: ColDef[] = [
    { field: 'make'},
    { field: 'model'},
    { field: 'price' }
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  
  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  onGridReady() {
    this.rowData$ = this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
      //console.log(params);
  }

  testLoadMore(){
    this.x += 5;
    this.testLoadData(this.x);
  }

  testLoadData(x:number){
    let temp: any[] = [];
    this.gridData.onGridReady().subscribe(data=>{
      const intervalCount = from(data);
      const takeFive = intervalCount.pipe(take(x));
      takeFive.subscribe(x => {
        console.log(x);
        temp.push(x);
      });
    })
    setTimeout(()=>{
      this.testData = temp;
    },1000)
   
  }

  @HostListener('scroll',['$event'])
    loadDataonGrid(event:any){
      console.log("scrolled", event);
    }

    myFunction(){
    console.log("Loaded");
  }

  getSelected(){
    console.log(this.agGrid.api.getSelectedRows()); //For multiple selection value
    this.clearSelection.emit(this.agGrid.api.getSelectedRows());
    this.router.navigate(['lazyLoad']);
  }
  // @ViewChild(AgGridAngular) agGrid !: AgGridAngular;

  clearSelection1(): void {
    this.agGrid.api.deselectAll();
  }

}
