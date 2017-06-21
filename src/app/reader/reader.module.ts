/**
 * Book Reader - Module - Reader Module
 *
 * @since		  21.06.2017
 * @version   1.0.0.0
 * @author		mlbors
 * @copyright	-
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReaderComponent } from './reader.component';
import { PreviewComponent } from './preview/preview.component';
import { BookComponent } from './book/book.component';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** MODULE **********/
/****************************/

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReaderComponent, PreviewComponent, BookComponent]
})

/********************************************************************************/
/********************************************************************************/

/***************************/
/********** CLASS **********/
/***************************/

export class ReaderModule { }
