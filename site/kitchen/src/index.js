const path = require('path');

const indexDemos = ['drawer', 'list-view'];
const pluginAntdConfig = {
  babelConfig: {
    plugins: [
      [
        require.resolve('babel-plugin-import'), {
          style: true,
          libraryName: 'antd-mobile',
          libraryDirectory: 'components',
        }, {
          style: true,
          libraryName: 'yymobile',
          libraryDirectory: 'yymobile',
        }
      ],
    ],
  },
};

module.exports = {
  lazyLoad(nodePath, nodeValue) {
    if (typeof nodeValue === 'string') {
      return true;
    }
    return nodePath.endsWith('/demo');
  },
  pick: {
    components(markdownData) {
      const filename = markdownData.meta.filename;
      if (!/^components/.test(filename) ||
          /\/demo$/.test(path.dirname(filename))) return;
      /* eslint-disable consistent-return */
      return {
        meta: markdownData.meta,
      };
      /* eslint-enable consistent-return */
    },
    yymobile(markdownData) {
      const filename = markdownData.meta.filename;
      if (!/^yymobile/.test(filename) ||
          /\/demo$/.test(path.dirname(filename))) return;
      /* eslint-disable consistent-return */
      return {
        meta: markdownData.meta,
      };
      /* eslint-enable consistent-return */
    },
    /* eslint-disable consistent-return */
    indexDemos(markdownData) {
      const paths = markdownData.meta.filename.split('/');
      // add demos to index page, e.g. "components/drawer/demo/basic.md"
      if (paths[1] && indexDemos.indexOf(paths[1]) > -1 && paths[2] && paths[2] === 'demo') {
        return {
          component: paths[1],
          meta: markdownData.meta,
        };
      }
    },
  },
  plugins: [
    `bisheng-plugin-antd?${JSON.stringify(pluginAntdConfig)}`,
    'bisheng-plugin-react?lang=__react',
  ],
  routes: [{
    path: '/',
    component: './template/KitchenSink/index',
  }, {
    path: '/components/:component',
    component: './template/KitchenSink/Demo',
  }, {
    path: '/yymobile/:component',
    component: './template/KitchenSink/Demo',
  }],
};