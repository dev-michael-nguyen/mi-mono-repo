module.exports = {
  name: "standard-metadata-lib",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/standard/metadata-lib",
  snapshotSerializers: [
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js"
  ]
};
