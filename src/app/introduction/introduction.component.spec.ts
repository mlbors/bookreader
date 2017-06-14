/**
 * Book Reader - Specs - Introduction Component
 *
 * @since		  07.06.2017
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

import { IntroductionComponent } from './introduction.component';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('IntroductionComponent', () => {
  let component: IntroductionComponent;
  let fixture: ComponentFixture<IntroductionComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** BEFORE EACH - ASYNC **********/
  /*****************************************/

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionComponent ]
    })
    .compileComponents();
  }));

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** BEFORE EACH **********/
  /*********************************/

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionComponent);
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
    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;
    expect(el.textContent).toEqual('');
  });

  /********************************************************************************/
  /********************************************************************************/

  /************************************/
  /********** ORIGINAL TITLE **********/
  /************************************/

  it('should display original title', () => {
    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain('Title');
  });

  /********************************************************************************/
  /********************************************************************************/

  /********************************/
  /********** NO CONTENT **********/
  /********************************/

  it('no content in the DOM until manually call `detectChanges`', () => {
    de = fixture.debugElement.query(By.css('p.content'));
    el = de.nativeElement;
    expect(el.textContent).toEqual('');
  });

  /********************************************************************************/
  /********************************************************************************/

  /*************************************/
  /********** INITIAL CONTENT **********/
  /*************************************/

  it('should display initial content', () => {
    de = fixture.debugElement.query(By.css('p.content'));
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain('Content');
  });

});
