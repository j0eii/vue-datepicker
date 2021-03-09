import analyze from 'rollup-plugin-analyzer';
import visualizer from 'rollup-plugin-visualizer';

import configBase from './rollup.config.base';

export default (commandLineArgs) => {
  return Object.assign({}, configBase, {
    output: {
      file: 'dist/vue-datepicker.esm.js',
      format: 'es',
      ...configBase.output,
    },
    plugins: [
      ...configBase.plugins,
      ...(commandLineArgs.analyze ? [analyze({ summaryOnly: true })] : []),
      ...(commandLineArgs.visualizer ? [visualizer()] : []),
    ],
  });
};
