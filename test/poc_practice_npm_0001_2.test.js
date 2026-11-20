"use strict";
// A text that is not a duration must give null
const test = require("node:test");
const assert = require("node:assert");
const { seconds } = require("../index.js");

test("poc_practice_npm_0001_2", () => { assert.strictEqual(seconds("1h-5m"), null); });
