module.exports = {
  name: "mi-api-lib",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/libs/mi-api-lib",
  snapshotSerializers: [
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js"
  ]
};
