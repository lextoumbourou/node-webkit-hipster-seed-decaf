(function() {
  exports.config = {
    conventions: {
      assets: /^app\/assets\//,
      ignored: /^(bower_components\/bootstrap-less(-themes)?|app\/styles\/overrides|(.*?\/)?[_]\w*)/
    },
    modules: {
      definition: false,
      wrapper: false
    },
    paths: {
      "public": '_public'
    },
    files: {
      javascripts: {
        joinTo: {
          'js/app.js': /^app/,
          'js/vendor.js': /^(bower_components|vendor)/
        }
      },
      stylesheets: {
        joinTo: {
          'css/app.css': /^(app|vendor|bower_components)/
        },
        order: {
          before: ['app/styles/app.less']
        }
      },
      templates: {
        joinTo: {
          'js/dontUseMe': /^app/
        }
      }
    },
    plugins: {},
    minify: true
  };

}).call(this);
