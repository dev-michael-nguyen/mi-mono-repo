module.exports = {
  name: "resume",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/resume",
  snapshotSerializers: [
    "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js",
  ],
};
