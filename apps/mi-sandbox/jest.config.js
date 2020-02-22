module.exports = {
  name: "mi-sandbox",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/mi-sandbox",
  snapshotSerializers: [
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js"
  ]
};
