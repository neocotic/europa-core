/*
 * Copyright (C) 2017 Alasdair Mercer, !ninja
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

'use strict';

var AnchorPlugin = require('../predefined/AnchorPlugin');
var BlockQuotePlugin = require('../predefined/BlockQuotePlugin');
var BreakPlugin = require('../predefined/BreakPlugin');
var CodePlugin = require('../predefined/CodePlugin');
var DefinitionTermPlugin = require('../predefined/DefinitionTermPlugin');
var DetailsPlugin = require('../predefined/DetailsPlugin');
var EmphasisPlugin = require('../predefined/EmphasisPlugin');
var EmptyPlugin = require('../predefined/EmptyPlugin');
var FramePlugin = require('../predefined/FramePlugin');
var HeadingPlugin = require('../predefined/HeadingPlugin');
var HorizontalRulePlugin = require('../predefined/HorizontalRulePlugin');
var ImagePlugin = require('../predefined/ImagePlugin');
var ListItemPlugin = require('../predefined/ListItemPlugin');
var OrderedListPlugin = require('../predefined/OrderedListPlugin');
var ParagraphPlugin = require('../predefined/ParagraphPlugin');
var PreformattedPlugin = require('../predefined/PreformattedPlugin');
var Preset = require('./Preset');
var QuotePlugin = require('../predefined/QuotePlugin');
var StrongPlugin = require('../predefined/StrongPlugin');
var UnorderedListPlugin = require('../predefined/UnorderedListPlugin');

/**
 * A default preset containing all of the predefined plugins.
 *
 * @public
 * @class
 * @extends Preset
 */
var DefaultPreset = Preset.extend(function() {
  DefaultPreset.super_.call(this, [
    new AnchorPlugin(),
    new BlockQuotePlugin(),
    new BreakPlugin(),
    new CodePlugin(),
    new DefinitionTermPlugin(),
    new DetailsPlugin(),
    new EmphasisPlugin(),
    new EmptyPlugin(),
    new FramePlugin(),
    new HeadingPlugin(),
    new HorizontalRulePlugin(),
    new ImagePlugin(),
    new ListItemPlugin(),
    new OrderedListPlugin(),
    new ParagraphPlugin(),
    new PreformattedPlugin(),
    new QuotePlugin(),
    new StrongPlugin(),
    new UnorderedListPlugin()
  ]);
});

module.exports = DefaultPreset;
