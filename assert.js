var assert = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error("Assertion Failed: " + assertionToCheck + "is not truthy");
    }
  },

  isEqual: function(assertionToCheck, matcher) {
    if(assertionToCheck !== matcher) {
      throw new Error("Assertion Failed: " + assertionToCheck + "Does not Equal" + matcher);
    }
  }
};
