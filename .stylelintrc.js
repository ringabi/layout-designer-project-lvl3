module.exports = {
  extends: ["stylelint-config-standard",
            "stylelint-config-rational-order"],
  plugins: ["stylelint-scss", "stylelint-order"],
  rules: {
	  "declaration-empty-line-before": null,
          "plugin/rational-order": true,
	  "at-rule-no-unknown": null,
	  "scss/at-rule-no-unknown": true
  }
};
