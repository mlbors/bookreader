/**
 * Book Reader - Specs - App Component
 *
 * @since		  03.05.2017
 * @version   1.0.0.0
 * @author		mlbors
 * @copyright	-
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FooterComponent } from './footer/footer.component';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('AppComponent', () => {

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** BEFORE EACH - ASYNC **********/
  /*****************************************/

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BannerComponent,
        IntroductionComponent,
        FooterComponent
      ],
    }).compileComponents();
  }));

  /********************************************************************************/
  /********************************************************************************/

  /**************************************/
  /********** CREATE COMPONENT **********/
  /**************************************/

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
});
