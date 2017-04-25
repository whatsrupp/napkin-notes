var assert = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error("Assertion Failed: " + assertionToCheck + "is not truthy");
    }
  },

  isEqual: function(assertionToCheck, matcher) {
    if(assertionToCheck !== matcher) {
      throw new Error("Assertion Failed: " + assertionToCheck + " Does not Equal " + matcher);
    }
  },

  isArrayEqual: function(assertionToCheck, matcher) {
    for (var i = 0; i < assertionToCheck.length; ++i) {
      if (assertionToCheck[i] !== matcher[i]) {
        throw new Error ("Assertion Failed: " + assertionToCheck + " Does not Equal " + matcher);
      }
    }
  }

};
