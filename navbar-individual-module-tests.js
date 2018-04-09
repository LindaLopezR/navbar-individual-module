// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by navbar-individual-module.js.
import { name as packageName } from "meteor/navbar-individual-module";

// Write your tests here!
// Here is an example.
Tinytest.add('navbar-individual-module - example', function (test) {
  test.equal(packageName, "navbar-individual-module");
});
