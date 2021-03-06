//Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
    // Code here
    return str.toUpperCase();
  }

 /* TEST CASES:
 describe("Extra Tests", function(){
  it("should pass the basic tests", function(){
    Test.assertEquals(makeUpperCase("hello"), "HELLO");
    Test.assertEquals(makeUpperCase("hello world"), "HELLO WORLD");
    Test.assertEquals(makeUpperCase("hello world !"), "HELLO WORLD !");
    Test.assertEquals(makeUpperCase("heLlO wORLd !"), "HELLO WORLD !");
    Test.assertEquals(makeUpperCase("1,2,3 hello world!"), "1,2,3 HELLO WORLD!");
  });
});
describe("Random Tests", function(){
  const letters = "abcdefgh ijklmnopq rstuvwxyz ABCDEFGHIJ QLMNOPQRSTUVWXYZ 1234567890!";
  for (let i = 0; i < 100; i++) {
    const word = Array.from({ length: Math.floor(Math.random() * 99) + 1 }, () => letters[Math.floor(Math.random() * letters.length)]).join('');
    const exp = word.toUpperCase();
    it("Testing for " + word, function() {
      Test.assertEquals(makeUpperCase(word), exp);
    });
  }
});
*/ 