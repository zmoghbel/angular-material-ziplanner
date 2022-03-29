import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTableModule} from '@angular/material/table'; 

const Material = [ 
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule
];


@NgModule({
  declarations: [],
  imports: [ Material ],
  exports: [ Material ]
})
export class MaterialModule { }
