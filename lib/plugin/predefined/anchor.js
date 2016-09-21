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

var Plugin = require('../plugin').Plugin

/**
 * A {@link Plugin} which extracts the URL from an anchor. Anchors without an <code>href</code> are treated as plain
 * text.
 *
 * If the <code>absolute</code> option is enabled, then the URL extracted from the anchor will be absolute. Otherwise,
 * the URL will be exactly as it is in the <code>href</code> attribute.
 *
 * If the <code>inline</code> option is enabled, then the URL (and any <code>title</code> on the anchor) will be
 * inserted immediately after the anchor contents (e.g. <code>[foo](/bar)</code>). Otherwise, all unique URL and title
 * combinations will be indexed (e.g. <code>[foo][anchor0]</code>) and the references will be output at the very end.
 *
 * @public
 * @constructor AnchorPlugin
 * @extends {Plugin}
 */
var AnchorPlugin = Plugin.extend({

  /**
   * @override
   */
  after: function(transformation, context) {
    if (context.value != null) {
      transformation.output(']' + context.value)
    }
  },

  /**
   * @override
   */
  afterAll: function(transformation) {
    var anchors = transformation.context.anchors
    if (!anchors.length) {
      return
    }

    transformation.append('\n\n')

    for (var i = 0; i < anchors.length; i++) {
      transformation.append('[anchor' + i + ']: ' + anchors[i] + '\n')
    }
  },

  /**
   * @override
   */
  beforeAll: function(transformation) {
    transformation.context.anchorMap = {}
    transformation.context.anchors = []
  },

  /**
   * @override
   */
  transform: function(transformation, context) {
    var element = transformation.element
    var options = transformation.options
    var href = options.absolute ? element.href : element.getAttribute('href')
    if (!href) {
      return true
    }

    var anchorMap = transformation.context.anchorMap
    var anchors = transformation.context.anchors
    var index
    var title = element.getAttribute('title')
    var value = title ? href + ' "' + title + '"' : href

    if (options.inline) {
      context.value = '(' + value + ')'
    } else {
      index = anchorMap[value]
      if (index == null) {
        index = anchors.push(value) - 1

        anchorMap[value] = index
      }

      context.value = '[anchor' + index + ']'
    }

    transformation.output('[')

    transformation.atNoWhiteSpace = true

    return true
  }

})

exports.AnchorPlugin = AnchorPlugin
