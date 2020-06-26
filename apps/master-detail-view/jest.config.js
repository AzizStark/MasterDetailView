module.exports = {
  name: 'master-detail-view',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/master-detail-view',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
