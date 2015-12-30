require.config({
  baseUrl: '/base',
  paths: {
    knockout: 'bower_components/knockout/dist/knockout',
    cmdr: 'bower_components/cmdrjs/dist/cmdr'
  }
});

require(['spec/knockout.cmdr_test'], window.__karma__.start);