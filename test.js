//- © 2015 CNK Dynamics Co.
/* global describe, it */
"use strict";
var expect = require("expect.js"),
    cuidplus = require("./index");

describe("Test: cuid-plus", function () {
    it ("getTimestamp() function", function (done) {
        // dummy data from cuid
        let ids = "ch72gsb320000udocl363eofy";
        expect(cuidplus.getTimestamp(ids)).to.be.a(Date);

        // other variants
        expect(cuidplus.getTimestamp()).to.be.a(ReferenceError);
        expect(cuidplus.getTimestamp(1)).to.be.a(TypeError);
        expect(cuidplus.getTimestamp(true)).to.be.a(TypeError);
        expect(cuidplus.getTimestamp("foo")).to.be.a(TypeError);

        done();
    });
    it ("isValid() function", function (done) {
        let ids = "ch72gsb320000udocl363eofy";
        expect(cuidplus.isValid(ids)).to.be(true);

        // other variants
        expect(cuidplus.isValid("foo")).to.be(false);
        expect(cuidplus.isValid("1234566")).to.be(false);
        expect(cuidplus.isValid("xh72gsb320000udocl363eofy")).to.be(false);
        expect(cuidplus.isValid(1)).to.be(false);
        expect(cuidplus.isValid(true)).to.be(false);

        expect(cuidplus.isValid()).to.be.a(ReferenceError);
        expect(cuidplus.isValid(false)).to.be.a(ReferenceError);
        expect(cuidplus.isValid(null)).to.be.a(ReferenceError);

        done();
    });
});
