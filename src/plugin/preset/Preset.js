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

var Nevis = require('nevis/lite');

/**
 * A preset of plugins usually grouped for a specific purpose.
 *
 * @param {Plugin[]} [plugins] - the plugins that are to be registered
 * @public
 * @class
 * @extends Nevis
 */
var Preset = Nevis.extend(function(plugins) {
  /**
   * The plugins for this {@link Preset}.
   *
   * @public
   * @type {Plugin[]}
   * @memberof Preset#
   */
  this.plugins = plugins ? plugins.slice() : [];
}, {

  /**
   * Adds the specified <code>plugin</code> to this {@link Preset}.
   *
   * @param {Plugin} plugin - the {@link Plugin} to be added
   * @return {Preset} A reference to this {@link Preset} for chaining purposes.
   * @public
   * @memberof Preset#
   */
  add: function(plugin) {
    this.plugins.push(plugin);

    return this;
  }

});

module.exports = Preset;
