module.exports = {
  name: 'mi-sandbox',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/mi-sandbox',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
