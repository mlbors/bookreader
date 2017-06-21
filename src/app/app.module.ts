/**
 * Book Reader - Module - App Module
 *
 * @since		  03.05.2017
 * @version   1.0.0.0
 * @author		mlbors
 * @copyright	-
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ReaderModule } from './reader/reader.module';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FooterComponent } from './footer/footer.component';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** MODULE **********/
/****************************/

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    IntroductionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

/********************************************************************************/
/********************************************************************************/

/***************************/
/********** CLASS **********/
/***************************/

export class AppModule { }
