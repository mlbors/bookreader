/**
 * Book Reader - Specs - Footer Component
 *
 * @since		  14.06.2017
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

import { FooterComponent } from './footer.component';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** BEFORE EACH - ASYNC **********/
  /*****************************************/

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** BEFORE EACH **********/
  /*********************************/

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
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
    expect(el.textContent).toContain('Footer content');
  });

  /********************************************************************************/
  /********************************************************************************/

  /***************************************/
  /********** DIFFERENT CONTENT **********/
  /***************************************/

  it('should display a different test content', () => {
    de = fixture.debugElement.query(By.css('p.content'));
    el = de.nativeElement;
    component.content = 'Test content';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test content');
  });

});
