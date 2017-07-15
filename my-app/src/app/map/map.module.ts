import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIO7aiFQSerXNGFuBjt4lhUehqUgOcDiY',
      libraries: ['places']
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MapComponent],
  exports: [MapComponent]
})
export class MapModule { }
