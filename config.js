System.config({
  "paths": {
    'src/*': './src/*.js',
    'tests/*' : './tests/*.js',
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "jquery": "github:components/jquery@2.1.3"
  }
});

