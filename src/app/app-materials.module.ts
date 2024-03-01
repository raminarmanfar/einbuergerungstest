import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from '@angular/material/radio';

export const materials = [
  MatButtonModule,
  MatBottomSheetModule,
  MatIconModule,
  MatToolbarModule,
  MatTooltipModule,
  MatMenuModule,
  MatCardModule,
  MatTableModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
  MatRadioModule
];

@NgModule({imports: materials, exports: materials})
export class AppMaterialsModule {
}
