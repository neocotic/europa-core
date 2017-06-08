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
 * A basic manager for {@link Plugin} implementations that are mapped to tag names.
 *
 * @public
 * @class
 * @extends Nevis
 */
var PluginManager = Nevis.extend(function() {
  /**
   * The plugins managed by this {@link PluginManager}.
   *
   * @public
   * @type {Object.<string, Plugin>}
   * @memberof PluginManager#
   */
  this.plugins = {};
}, {

  /**
   * Registers the specified <code>plugin</code> with this {@link PluginManager}.
   *
   * If <code>plugin</code> declares support for a tag name which already has a {@link Plugin} registered for it,
   * <code>plugin</code> will replace the previously registered plugin, but only for conflicting tag names.
   *
   * @param {Plugin} plugin - the {@link Plugin} to be registered
   * @return {void}
   * @public
   * @memberof PluginManager#
   */
  register: function(plugin) {
    plugin.getTagNames().forEach(function(tag) {
      this.plugins[tag] = plugin;
    }, this);
  },

  /**
   * Registers all of the plugins within the specified <code>preset</code> with this {@link PluginManager}.
   *
   * If a {@link Plugin} within <code>preset</code> declares support for a tag name which already has a plugin
   * registered for it, the plugin within <code>preset</code> will replace the previously registered plugin, but only
   * for conflicting tag names.
   *
   * @param {Preset} preset - the {@link Preset} whose plugins are to be registered
   * @return {void}
   * @public
   * @memberof PluginManager#
   */
  registerPreset: function(preset) {
    preset.plugins.forEach(this.register.bind(this));
  }

});

module.exports = PluginManager;
