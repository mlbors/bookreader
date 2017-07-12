/**
 * Book Reader - Specs - Bookfeed Service
 *
 * @since		  28.06.2017
 * @version   1.0.0.0
 * @author		mlbors
 * @copyright	-
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { TestBed, inject } from '@angular/core/testing';

import { BookfeedService } from './bookfeed.service';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('BookfeedService', () => {

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** BEFORE EACH - ASYNC **********/
  /*****************************************/

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookfeedService]
    });
  });

  /********************************************************************************/
  /********************************************************************************/

  /****************************/
  /********** INJECT **********/
  /****************************/

  it('should ...', inject([BookfeedService], (service: BookfeedService) => {
    expect(service).toBeTruthy();
  }));
});