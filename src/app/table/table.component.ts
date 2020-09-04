import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable } from "@angular/material/table";
import { TableDataSource, TableItem } from "./table-datasource";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TableItem>;
  dataSource: TableDataSource;
  public title: string = "table page ";
  @Output() event = new EventEmitter<string>();
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ["id", "name"];

  ngOnInit() {
    this.dataSource = new TableDataSource();
    this.event.emit(this.title);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
