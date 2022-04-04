import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog'; 

const Material = [ 
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatRadioModule,
  MatCardModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule
];


@NgModule({
  declarations: [],
  imports: [ Material ],
  exports: [ Material ]
})
export class MaterialModule { }
