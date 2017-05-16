var FilterSelect = require("nativescript-filter-select").FilterSelect;
var filterSelect = new FilterSelect();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(filterSelect.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(filterSelect.functionname()).toEqual(jasmine.any(Promise));
  });
});