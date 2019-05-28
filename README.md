#1. Reading Code
To better read and understand code, you have to think more like how JavaScript execute the code.

#2. Scope
a. What is scope?

    Variables:
    * Fundamental to any programming language
    * 2 possible actions:
        1. setting a value
        2. retrieving a value
    * How does our program retrieve them?
    * Where do these variables live?
    * When is the visible to the program?

Scope:
_ Variables live inside a scope
_ Imagine a scope like a box \* Variables live inside the box

#JavaScript is function scope\*

- Except for ES6 let and const
  2 kinds of boxes:
  _ Global Scope: Any variable living outside any function
  _ Local Scope: Variables define inside a function

#3. JavaScript Lexical Scope

**JavaScript is a 2 passes process:** 1. Compile time: that's when the scopes are created. Any var or function declaration will be added in the corresponding scope. 2. Execution time

4. Hoisting
   - Since doing the lexical scope every time is kind of tedious, we simply it with hoisting
   - Hoisting is not something that is real. It's more of a shorthand to simplify the scope mechanism
