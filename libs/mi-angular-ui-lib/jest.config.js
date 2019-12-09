module.exports = {
  name: "mi-angular-ui-lib",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/libs/mi-angular-ui-lib",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
