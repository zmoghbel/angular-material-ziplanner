import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';

const Material = [ 
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSortModule
];


@NgModule({
  declarations: [],
  imports: [ Material ],
  exports: [ Material ]
})
export class MaterialModule { }
