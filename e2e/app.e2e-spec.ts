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

    page.getBannerTitle().then(function(text) {
      expect(text.toLowerCase()).toContain('banner title');
    });

  });

  /********************************************************************************/
  /********************************************************************************/

  /*****************************************/
  /********** DISPLAY BANNER TEXT **********/
  /*****************************************/

  it('should display banner text', () => {
    page.navigateTo();

    page.getBannerText().then(function(text) {
      expect(text.toLowerCase()).toContain('lorem ipsum dolor sit amet.');
    });

  });

  /********************************************************************************/
  /********************************************************************************/

  /**********************************************/
  /********** DISPLAY BANNER LINK TEXT **********/
  /**********************************************/

  it('should display banner link text', () => {
    page.navigateTo();

    page.getBannerLinkText().then(function(text) {
      expect(text.toLowerCase()).toContain('read more');
    });

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
    expect(page.getBannerTitleElement().getCssValue('text-transform')).toBe('uppercase');
    expect(page.getBannerTextElement().getCssValue('text-transform')).toBe('none');
    expect(page.getBannerLinkElement().getCssValue('text-transform')).toBe('uppercase');
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


  /********************************************************************************/
  /********************************************************************************/

  /*******************************************/
  /********** INTRODUCTION ELEMENTS **********/
  /*******************************************/

  it('should display introduction elements', () => {
    page.navigateTo();
    expect(page.isIntroductionElementPresent()).toBe(true);
  });

  /********************************************************************************/
  /********************************************************************************/

  /***********************************************/
  /********** DISPLAY INTROCUTION TITLE **********/
  /***********************************************/

  it('should display introduction title', () => {
    page.navigateTo();

    page.getIntroductionTitle().then(function(text) {
      expect(text.toLowerCase()).toContain('title');
    });

  });

  /********************************************************************************/
  /********************************************************************************/

  /*************************************************/
  /********** DISPLAY INTROCUTION CONTENT **********/
  /*************************************************/

  it('should display introduction content', () => {
    page.navigateTo();

    page.getIntroductionContent().then(function(text) {
      expect(text.toLowerCase()).toContain('content');
    });

  });

});
