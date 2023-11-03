import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

export interface TableRow {
  orderNumber: string;
  orderDate: string;
  price: number;
  discount: number;
  discountDeliverect: number;
  sum: number;
  difference: number;
  courier: {
    name: string;
    id: number;
    logo: string;
  };
}

@Component({
  selector: 'mva-table-deliverect',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './table-deliverect.component.html',
  styleUrls: ['./table-deliverect.component.scss'],
})
export class TableDeliverectComponent implements AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() set data(value: TableRow[]) {
    this.dataSource.data = value;
  }

  @Input({ required: true })
  displayedColumns!: string[];

  protected readonly dataSource = new MatTableDataSource<TableRow>();

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getTotalRevenue() {
    return this.dataSource.data.reduce((acc, value) => {
      return acc + value.price;
    }, 0);
  }

  getTotalDiscounts() {
    return this.dataSource.data.reduce((acc, value) => {
      return acc + value.discount;
    }, 0);
  }
}
