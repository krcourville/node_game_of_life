# Developer Notes

## Why did I choose this exercise?
I have never coded Game of Life, and it seemed to be the must interesting
and fun option.  Of course, I've heard of this exercise.  It is pretty standard
in Comp Sci textbooks.

## What difficulties did I run into?
Since I pretty much had whatever time I wanted to put into this, I avoided using
C# (my go to language) and turned this into a learning activity.  In particular,
I wanted to see where Node is at on ES6 support. So, there was some learning
curve there in terms of what ES6 does and does not define for the new `class`
keyword.  

I was disappointed to find there is no built-in encapsulation.  So, I just went
with the underscore prefix convention for privates and avoided ugly closures for
now.  On the plus side, that allowed for some black box testing.

## Improvements
1. A more robust grid object would improve readability.  Using array[y][x] syntax
is not the most intuitive.
2. A *Point* object would probably clean things up as well.
2. I hoped to apply more functional techniques (one of JS' stengths), but found
it faster to go mostly imperative. A better data structure may have helped here.
