import { Component, Input, OnInit } from '@angular/core';
import { JsonStructureService } from '../../services/json-structure.service';
import { TableDataService } from '../../services/table-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  @Input() data: Array<any> = [];
  @Input() title: string = '';
  keys: string[] = [];
  newData: any = [];

  constructor(private jsonStructureService: JsonStructureService, private tableDataService: TableDataService) { }

  ngOnInit() {
    let obj = this.jsonStructureService.getJsonStructure(this.data);
    this.keys = obj['keys'];
    this.newData = obj['arr'];
  }

  arrayExist(arr: any) {
    if (arr instanceof Array) {
      return true;
    }
    return false;
  }

  createComponent(arr: Array<any>, item: any) {
    this.tableDataService.tableHierarchy.next({ component: TableComponent, data: arr, title: item });
  }
}
