/**
 * Book Reader - Class - AParser Abstract Class
 *
 * @since		  28.06.2017
 * @version   1.0.0.0
 * @author		mlbors
 * @copyright	-
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { IParser } from './iparser';

/********************************************************************************/
/********************************************************************************/

/***************************/
/********** CLASS **********/
/***************************/

export abstract class AParser implements IParser {

  /********************************/
  /********** PROPERTIES **********/
  /********************************/

  /**********/
  /********** PUBLIC **********/
  /**********/

  type: String;

  /**********/
  /********** PROTECTED **********/
  /**********/

  protected data: any;

  /********************************************************************************/
  /********************************************************************************/

  /**************************************/
  /********** ABSTRACT METHODS **********/
  /**************************************/

  abstract setData(data: any): void;
  abstract retrieveData(): void;

  /********************************************************************************/
  /********************************************************************************/

  /***************************/
  /********** PARSE **********/
  /***************************/

  parse(): String {
    return 'foo';
  }

}