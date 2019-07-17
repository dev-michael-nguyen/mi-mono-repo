module.exports = {
  name: "mi-ui-lib",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/libs/mi-ui-lib",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
