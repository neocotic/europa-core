/*
 * Copyright (C) 2016 Alasdair Mercer, Skelp
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict'

var AnchorPlugin = require('../predefined/anchor').AnchorPlugin
var BlockQuotePlugin = require('../predefined/block-quote').BlockQuotePlugin
var BreakPlugin = require('../predefined/break').BreakPlugin
var CodePlugin = require('../predefined/code').CodePlugin
var DefinitionTermPlugin = require('../predefined/definition-term').DefinitionTermPlugin
var DetailsPlugin = require('../predefined/details').DetailsPlugin
var EmphasisPlugin = require('../predefined/emphasis').EmphasisPlugin
var EmptyPlugin = require('../predefined/empty').EmptyPlugin
var HeadingPlugin = require('../predefined/heading').HeadingPlugin
var HorizontalRulePlugin = require('../predefined/horizontal-rule').HorizontalRulePlugin
var ImagePlugin = require('../predefined/image').ImagePlugin
var ListItemPlugin = require('../predefined/list-item').ListItemPlugin
var OrderedListPlugin = require('../predefined/ordered-list').OrderedListPlugin
var ParagraphPlugin = require('../predefined/paragraph').ParagraphPlugin
var PreformattedPlugin = require('../predefined/preformatted').PreformattedPlugin
var Preset = require('./preset').Preset
var QuotePlugin = require('../predefined/quote').QuotePlugin
var StrongPlugin = require('../predefined/strong').StrongPlugin
var UnorderedListPlugin = require('../predefined/unordered-list').UnorderedListPlugin

/**
 * A default preset containing all of the predefined plugins.
 *
 * @public
 * @constructor DefaultPreset
 * @extends {Preset}
 */
var DefaultPreset = Preset.extend(function() {
  DefaultPreset.super_.call(this)

  this.set([ 'a' ], new AnchorPlugin())
  this.set([
    'blockquote',
    'dd'
  ], new BlockQuotePlugin())
  this.set([ 'br' ], new BreakPlugin())
  this.set([
    'code',
    'kbd',
    'samp'
  ], new CodePlugin())
  this.set([ 'dt' ], new DefinitionTermPlugin())
  this.set([ 'details' ], new DetailsPlugin())
  this.set([
    'cite',
    'dfn',
    'em',
    'i',
    'u',
    'var'
  ], new EmphasisPlugin())
  this.set([
    'applet',
    'area',
    'audio',
    'button',
    'canvas',
    'datalist',
    'embed',
    'head',
    'input',
    'map',
    'menu',
    'meter',
    'noframes',
    'noscript',
    'object',
    'optgroup',
    'option',
    'param',
    'progress',
    'rp',
    'rt',
    'ruby',
    'script',
    'select',
    'style',
    'textarea',
    'title',
    'video'
  ], new EmptyPlugin())
  this.set([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6'
  ], new HeadingPlugin())
  this.set([ 'hr' ], new HorizontalRulePlugin())
  this.set([ 'img' ], new ImagePlugin())
  this.set([ 'li' ], new ListItemPlugin())
  this.set([ 'ol' ], new OrderedListPlugin())
  this.set([
    'address',
    'article',
    'aside',
    'div',
    'fieldset',
    'footer',
    'header',
    'nav',
    'p',
    'section'
  ], new ParagraphPlugin())
  this.set([ 'pre' ], new PreformattedPlugin())
  this.set([ 'q' ], new QuotePlugin())
  this.set([
    'b',
    'strong'
  ], new StrongPlugin())
  this.set([ 'ul' ], new UnorderedListPlugin())
})

exports.DefaultPreset = DefaultPreset
