import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { JsonStructureService } from '../../services/json-structure.service';
import { TableDataService } from '../../services/table-data.service';
import jsonData from '../../data.json';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})

export class ShowDataComponent implements OnInit {

  data: any = jsonData;
  keys: string[] = [];
  newData: any = [];
  @ViewChild('container', { read: ViewContainerRef, static: true }) container: any;

  constructor(private getStructure: JsonStructureService, private componentFactoryResolver: ComponentFactoryResolver, private newComp: TableDataService) { }

  ngOnInit(): void {
    let obj = this.getStructure.getJsonStructure(this.data);
    this.keys = obj['keys'];
    this.newData = obj['arr'];

    this.newComp.tableHierarchy.subscribe((item) => {
      if (item['component']) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item['component']);
        let component = this.container.createComponent(componentFactory);
        component.instance['reference'] = component;
        component.instance['data'] = item['data'];
        component.instance['title'] = item['title'];
      }
    });

  }

  arrayExist(arr: any) {
    if (arr instanceof Array) {
      return true;
    }
    return false;
  }
}


