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

var assign = require('lodash.assign')
var forOwn = require('lodash.forown')
var Oopsy = require('oopsy')

/**
 * A preset of plugins usually grouped for a specific purpose.
 *
 * @public
 * @constructor Preset
 * @extends {Oopsy}
 */
var Preset = Oopsy.extend(function() {
  /**
   * The plugins for this {@link Preset}.
   *
   * @private
   * @type {Object<string, Plugin>}
   */
  this._plugins = {}
}, {

  /**
   * Sets the specified <code>plugin</code> for the <code>tags</code> provided.
   *
   * <code>tags</code> can be an array of tag names or a single string containing white-space separated tag names.
   *
   * @param {string|string[]} tags - the tag names to which <code>plugin</code> will be registered
   * @param {Plugin} plugin - the {@link Plugin} to be registered against <code>tags</code>
   * @return {Preset} A reference to this {@link Preset} for chaining purposes.
   * @public
   */
  set: function(tags, plugin) {
    if (typeof tags === 'string') {
      tags = tags.trim().split(/\s+/)
    }

    for (var i = 0; i < tags.length; i++) {
      this._plugins[tags[i].toLowerCase()] = plugin
    }

    return this
  },

  /**
   * Sets all of the specified <code>plugins</code> to be registered against their mapped tag names.
   *
   * @param {Object<string, Plugin>} plugins - a <code>Map</code> of plugins and tag names to which they are
   * to be registered
   * @return {Preset} A reference to this {@link Preset} for chaining purposes.
   * @public
   */
  setAll: function(plugins) {
    var that = this

    forOwn(plugins, function(plugin, tag) {
      that._plugins[tag.toLowerCase()] = plugin
    })

    return this
  }

})

Object.defineProperty(Preset.prototype, 'plugins', {
  get: function() {
    return assign({}, this._plugins)
  }
})

exports.Preset = Preset
