module.exports = {
  name: "mi-metadata",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/libs/mi-metadata",
  snapshotSerializers: [
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js",
  ],
};
