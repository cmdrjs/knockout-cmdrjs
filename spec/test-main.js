require.config({
  baseUrl: '/base', //karma servers files from base
  paths: {
    knockout: 'bower_components/knockout.js/knockout'
  }
});

require(['spec/knockout.cmdr_test'], window.__karma__.start);