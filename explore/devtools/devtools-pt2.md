1. The bug is that the two input numbers are recognized as a string, not an
   integer.
2. I would add after line 11 a code that converts a string variable into number:
   result = Number(result).