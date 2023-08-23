const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "json-logs/",
  reportPath: "./reports/",
  metadata: {
    browser: {
      name: "chrome",
      version: "116",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  reportName: "Report to Symphony Solutions - Saucedemo",
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Saucedemo-Symphony" },
      { label: "Release", value: "1.0" },
      { label: "Execution Start Time", value: "Aug 23th 2023" },
      { label: "Execution End Time", value: "Aug 23th 2023" },
    ]
  },
});