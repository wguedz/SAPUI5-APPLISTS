/*global QUnit*/

sap.ui.define([
	"logaligroup/Lists/controller/LystTypes.controller"
], function (Controller) {
	"use strict";

	QUnit.module("LystTypes Controller");

	QUnit.test("I should test the LystTypes controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
