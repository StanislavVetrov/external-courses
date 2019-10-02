function defineValue(value) {
	if (typeof value === "string") {
	  return "string";
	} else if (typeof value === "number" && !isNaN(value)) {
	  return "number";
	}
	return undefined;
  }
  module.exports = defineValue;
  