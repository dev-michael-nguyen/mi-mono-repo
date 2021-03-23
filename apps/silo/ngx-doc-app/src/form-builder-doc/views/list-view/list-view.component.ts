import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { FormDefinitionQueryHttpService } from '../../http-services/form-definition-query.http-service';
import { FormDefinitionQueryItemModel } from '../../models/form-definition-query-item-model';

@Component({
  selector: 'silo-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements AfterViewInit {
  displayedColumns: string[] = ['createdDateTime', 'displayName'];

  dataSource: Observable<Array<FormDefinitionQueryItemModel>>;

  resultsLength = 0;

  isLoading = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _formDefinitionQueryHttpService: FormDefinitionQueryHttpService,
  ) {}

  ngAfterViewInit() {
    this.dataSource = merge(this.sort.sortChange, this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        this.isLoading = true;
        return this._formDefinitionQueryHttpService.query(
          this.sort.active,
          this.sort.direction,
          this.paginator.pageIndex,
        );
      }),
      map((response) => {
        this.isLoading = false;
        this.resultsLength = response.totalCount;
        return response.items;
      }),
    );
  }

  resetPaging(): void {
    this.paginator.pageIndex = 0;
  }
}
