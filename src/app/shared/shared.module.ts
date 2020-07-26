import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { CovertToSpacesPipe } from '../products/product-list.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StarComponent, CovertToSpacesPipe],
  imports: [CommonModule],
  exports: [StarComponent, CovertToSpacesPipe, CommonModule, FormsModule],
})
export class SharedModule {}
