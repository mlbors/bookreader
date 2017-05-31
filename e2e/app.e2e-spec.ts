/**
 * Book Reader - Specs - e2e App
 *
 * @since		  11.05.2017
 * @version   1.0.0.0
 * @author		mlbors
 * @copyright	-
 */

/*****************************/
/********** IMPORTS **********/
/*****************************/

import { BookreaderPage } from './app.po';

/********************************************************************************/
/********************************************************************************/

/****************************/
/********** SET UP **********/
/****************************/

describe('bookreader App', () => {
  let page: BookreaderPage;

  /********************************************************************************/
  /********************************************************************************/

  /*********************************/
  /********** BEFORE EACH **********/
  /*********************************/

  beforeEach(() => {
    page = new BookreaderPage();
  });

  /********************************************************************************/
  /********************************************************************************/

  /*************************************/
  /********** BANNER ELEMENTS **********/
  /*************************************/

  it('should display banner elements', () => {
    page.navigateTo();
    expect(page.isBannerTitleElementPresent()).toBe(true);
    expect(page.isBannerDescriptionElementPresent()).toBe(true);
    expect(page.isBannerLinkElementPresent()).toBe(true);
    expect(page.isBackgroundImageElementPresent()).toBe(true);
    expect(page.isMainImageElementPresent()).toBe(true);
  });

  /********************************************************************************/
  /********************************************************************************/

  /******************************************/
  /********** DISPLAY BANNER TITLE **********/
  /******************************************/

  it('should display banner title', () => {
    page.navigateTo();
    expect(page.getBannerTitle()).toEqual('BANNER TITLE');
  });

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** DISPLAY BANNER TEXT **********/
  /*****************************************/

  it('should display banner text', () => {
    page.navigateTo();
    expect(page.getBannerText()).toEqual('Lorem ipsum dolor sit amet.');
  });

  /********************************************************************************/
  /********************************************************************************/

  /**********************************************/
  /********** DISPLAY BANNER LINK TEXT **********/
  /**********************************************/

  it('should display banner link text', () => {
    page.navigateTo();
    expect(page.getBannerLinkText()).toEqual('READ MORE');
  });

  /********************************************************************************/
  /********************************************************************************/

  /**********************************************/
  /********** SRC FOR BACKGROUND IMAGE **********/
  /**********************************************/

  it('should have a src of background image', () => {
    page.navigateTo();
    expect(page.getBackgroundImageElement().getAttribute('src')).toBeDefined();
    expect(page.getBackgroundImageElement().getAttribute('src')).toBe(page.getBrowserUrl() + 'assets/img/img/img-001-min.jpg');
  });

  /********************************************************************************/
  /********************************************************************************/

  /****************************************/
  /********** SRC FOR MAIN IMAGE **********/
  /****************************************/

  it('should have a src of main image', () => {
    page.navigateTo();
    expect(page.getMainImageElement().getAttribute('src')).toBeDefined();
    expect(page.getMainImageElement().getAttribute('src')).toBe(page.getBrowserUrl() + 'assets/img/img/img-002-min.jpg');
  });

  /********************************************************************************/
  /********************************************************************************/

  /**************************************/
  /********** CHECK CSS VALUES **********/
  /**************************************/

  it('should have css values', () => {
    page.navigateTo();
    expect(page.getBanner().getCssValue('position')).toBe('relative');
    expect(page.getBackgroundImageElement().getCssValue('position')).toBe('absolute');
    expect(page.getBannerTitleElement().getCssValue('color')).toBe('rgba(255, 255, 255, 1)');
    expect(page.getBannerTextElement().getCssValue('color')).toBe('rgba(255, 255, 255, 1)');
    expect(page.getBannerLinkElement().getCssValue('color')).toBe('rgba(255, 255, 255, 1)');
    expect(page.getBannerLinkElement().getCssValue('border-color')).toBe('rgb(255, 255, 255)');
  });

  /********************************************************************************/
  /********************************************************************************/

  /***************************************/
  /********** CHECK BUTTON LINK **********/
  /***************************************/

  it('should have # for href button', () => {
    page.navigateTo();
    expect(page.getBannerLinkElement().getAttribute('href')).toEqual(page.getBrowserUrl() + '#');
    page.getBannerLinkElement().click();
    expect(page.getCurrentUrl()).toEqual(page.getBrowserUrl() + '#');
  });

});
