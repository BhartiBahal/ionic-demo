import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharactersPage } from './characters';

@NgModule({
  declarations: [
    CharactersPage,
  ],
  imports: [
    IonicPageModule.forChild(CharactersPage),
  ],
  exports: [
    CharactersPage
  ]
})
export class CharactersPageModule {}
