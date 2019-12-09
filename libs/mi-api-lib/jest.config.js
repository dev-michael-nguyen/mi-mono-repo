module.exports = {
  name: "mi-api-lib",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/libs/mi-api-lib",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
