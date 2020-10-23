module.exports = {
  name: "mi-angular-ui",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/libs/mi-angular-ui",
  snapshotSerializers: [
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js",
  ],
};
