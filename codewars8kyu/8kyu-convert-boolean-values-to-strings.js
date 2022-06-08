//Implement a function which convert the given boolean value into its string representation.
//
//Note: Only valid inputs will be given.
//
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//Solution:

function boolToWord( bool ){
    const boolString = bool.toString();
      if(boolString == 'true'){
        return 'Yes';
        }else{
          return 'No';
        }
    }