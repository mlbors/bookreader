/**
 * Book Reader - Component - Banner Component
 *
 * @since		  03.05.2017
 * @version   1.0.0.0
 * @author		mlbors
 * @copyright	-
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { Component, OnInit } from '@angular/core';

/**************************/
/********** META **********/
/**************************/

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

/********************************************************************************/
/********************************************************************************/

/***************************/
/********** CLASS **********/
/***************************/

export class BannerComponent implements OnInit {

  /********************************/
  /********** PROPERTIES **********/
  /********************************/

  title: String = 'Banner title';
  bannerDescription: String = 'Lorem ipsum dolor sit amet.';
  buttonTitle: String = 'Read more';

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** CONSTRUCTOR **********/
  /*********************************/

  constructor() { }

  /********************************************************************************/
  /********************************************************************************/

  /**************************/
  /********** INIT **********/
  /**************************/

  ngOnInit() {
  }

}
