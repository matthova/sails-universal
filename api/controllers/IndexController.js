/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const App = require('../../src/app');
const app = new App.default();

module.exports = {
  index: (req, res, next) => {
    const props = JSON.stringify({ foo: 'bar' });
    const appHtml = renderToString(app.render());
    const DATA = `<script>DATA=${props}</script>`;
    return res.view('homepage', { appHtml, DATA });
  },
};
