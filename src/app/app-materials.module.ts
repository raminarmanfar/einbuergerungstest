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
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BidiModule} from '@angular/cdk/bidi';
import {MatDialogModule} from '@angular/material/dialog';
import {A11yModule} from '@angular/cdk/a11y';
import {MatSnackBarModule} from '@angular/material/snack-bar';

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
  MatRadioModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatDividerModule,
  MatListModule,
  MatPaginatorModule,
  BidiModule,
  MatDialogModule,
  A11yModule,
  MatSnackBarModule
];

@NgModule({imports: materials, exports: materials})
export class AppMaterialsModule {
}
