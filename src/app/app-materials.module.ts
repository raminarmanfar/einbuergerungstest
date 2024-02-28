import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';

export const materials = [
  MatButtonModule,
  MatBottomSheetModule,
  MatIconModule,
  MatToolbarModule,
  MatTooltipModule,
  MatMenuModule
];

@NgModule({imports: materials, exports: materials})
export class AppMaterialsModule {
}