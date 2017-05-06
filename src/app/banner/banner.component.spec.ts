/**
 * Book Reader - Specs - Banner Component
 *
 * @since		  03.05.2017
 * @version   1.0.0.0
 * @author		mlbors
 * @copyright	-
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { BannerComponent } from './banner.component';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('BannerComponent (templateUrl)', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** BEFORE EACH - ASYNC **********/
  /*****************************************/

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
    })
    .compileComponents();
  }));

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** BEFORE EACH **********/
  /*********************************/

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  /********************************************************************************/
  /********************************************************************************/

  /**************************************/
  /********** CREATE COMPONENT **********/
  /**************************************/

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /********************************************************************************/
  /********************************************************************************/

  /******************************/
  /********** NO TITLE **********/
  /******************************/

  it('no title in the DOM until manually call `detectChanges`', () => {
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    expect(el.textContent).toEqual('');
  });

  /********************************************************************************/
  /********************************************************************************/

  /************************************/
  /********** ORIGINAL TITLE **********/
  /************************************/

  it('should display original title', () => {
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain(component.title);
  });

  /********************************************************************************/
  /********************************************************************************/

  /*************************************/
  /********** DIFFERENT TITLE **********/
  /*************************************/

  it('should display a different test title', () => {
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    component.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });

  /********************************************************************************/
  /********************************************************************************/

  /*******************************/
  /********** DISPLAY P **********/
  /*******************************/

  it('should display information in p', () => {
    de = fixture.debugElement.query(By.css('p'));
    el = de.nativeElement;
    expect(el.textContent).toContain('banner works!');
  });

});