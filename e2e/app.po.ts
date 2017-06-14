/**
 * Book Reader - Page Object - App
 *
 * @since		  11.05.2017
 * @version   1.0.0.0
 * @author		mlbors
 * @copyright	-
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { browser, element, by } from 'protractor';

/********************************************************************************/
/********************************************************************************/

/***************************/
/********** CLASS **********/
/***************************/

export class BookreaderPage {

  /*********************************/
  /********** NAVIGATE TO **********/
  /*********************************/

  navigateTo() {
    browser.ignoreSynchronization = true;
    return browser.get(browser.baseUrl);
  }

  /********************************************************************************/
  /********************************************************************************/

  /*************************************/
  /********** GET BROWSER URL **********/
  /*************************************/

  getBrowserUrl() {
    return browser.baseUrl;
  }

  /********************************************************************************/
  /********************************************************************************/

  /*************************************/
  /********** GET CURRENT URL **********/
  /*************************************/

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************************/
  /********** IS BANNER TITLE ELEMENT PRESENT **********/
  /*****************************************************/

  isBannerTitleElementPresent() {
    return element(by.css('app-root app-banner h1')).isPresent();
  }

  /********************************************************************************/
  /********************************************************************************/

  /***********************************************************/
  /********** IS BANNER DESCRIPTION ELEMENT PRESENT **********/
  /***********************************************************/

  isBannerDescriptionElementPresent() {
    return element(by.css('app-root app-banner p.description')).isPresent();
  }

  /********************************************************************************/
  /********************************************************************************/

  /****************************************************/
  /********** IS BANNER LINK ELEMENT PRESENT **********/
  /****************************************************/

  isBannerLinkElementPresent() {
    return element(by.css('app-root app-banner a.btn')).isPresent();
  }

  /********************************************************************************/
  /********************************************************************************/

  /*********************************************************/
  /********** IS BACKGROUND IMAGE ELEMENT PRESENT **********/
  /*********************************************************/

  isBackgroundImageElementPresent() {
    return element(by.css('app-root app-banner img.bg-image')).isPresent();
  }

  /********************************************************************************/
  /********************************************************************************/

  /***************************************************/
  /********** IS MAIN IMAGE ELEMENT PRESENT **********/
  /***************************************************/

  isMainImageElementPresent() {
    return element(by.css('app-root app-banner img.main-image')).isPresent();
  }

  /********************************************************************************/
  /********************************************************************************/

  /********************************/
  /********** GET BANNER **********/
  /********************************/

  getBanner() {
    return element(by.css('app-root app-banner'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /**********************************************/
  /********** GET BANNER TITLE ELEMENT **********/
  /**********************************************/

  getBannerTitleElement() {
    return element(by.css('app-root app-banner h1'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /**************************************/
  /********** GET BANNER TITLE **********/
  /**************************************/

  getBannerTitle() {
    return element(by.css('app-root app-banner h1')).getText();
  }

  /********************************************************************************/
  /********************************************************************************/

  /*********************************************/
  /********** GET BANNER TEXT ELEMENT **********/
  /*********************************************/

  getBannerTextElement() {
    return element(by.css('app-root app-banner p.description'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /*************************************/
  /********** GET BANNER TEXT **********/
  /*************************************/

  getBannerText() {
    return element(by.css('app-root app-banner p.description')).getText();
  }

  /********************************************************************************/
  /********************************************************************************/

  /*********************************************/
  /********** GET BANNER LINK ELEMENT **********/
  /*********************************************/

  getBannerLinkElement() {
    return element(by.css('app-root app-banner a.btn'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /******************************************/
  /********** GET BANNER LINK TEXT **********/
  /******************************************/

  getBannerLinkText() {
    return element(by.css('app-root app-banner a.btn')).getText();
  }

  /********************************************************************************/
  /********************************************************************************/

  /**************************************************/
  /********** GET BACKGROUND IMAGE ELEMENT **********/
  /**************************************************/

  getBackgroundImageElement() {
    return element(by.css('app-root app-banner img.bg-image'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /********************************************/
  /********** GET MAIN IMAGE ELEMENT **********/
  /********************************************/

  getMainImageElement() {
    return element(by.css('app-root app-banner img.main-image'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************************/
  /********** IS INTRODUCTION ELEMENT PRESENT **********/
  /*****************************************************/

  isIntroductionElementPresent() {
    return element(by.css('app-root app-introduction')).isPresent();
  }

  /********************************************************************************/
  /********************************************************************************/

  /**************************************/
  /********** GET INTRODUCTION **********/
  /**************************************/

  getIntroduction() {
    return element(by.css('app-root app-introduction'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /****************************************************/
  /********** GET INTRODUCTION TITLE ELEMENT **********/
  /****************************************************/

  getIntroductionTitleElement() {
    return element(by.css('app-root app-introduction h2'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /********************************************/
  /********** GET INTRODUCTION TITLE **********/
  /********************************************/

  getIntroductionTitle() {
    return element(by.css('app-root app-introduction h2')).getText();
  }

  /********************************************************************************/
  /********************************************************************************/

  /******************************************************/
  /********** GET INTRODUCTION CONTENT ELEMENT **********/
  /******************************************************/

  getIntroductionContentElement() {
    return element(by.css('app-root app-introduction p.content'));
  }

  /********************************************************************************/
  /********************************************************************************/

  /**********************************************/
  /********** GET INTRODUCTION CONTENT **********/
  /**********************************************/

  getIntroductionContent() {
    return element(by.css('app-root app-introduction p.content')).getText();
  }

}
