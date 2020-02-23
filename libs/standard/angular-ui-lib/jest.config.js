module.exports = {
  name: "standard-angular-ui-lib",
  preset: "../../../jest.config.js",
  coverageDirectory: "../../../coverage/libs/standard/angular-ui-lib",
  snapshotSerializers: [
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js"
  ]
};
