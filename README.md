# Simple Javascript code samples
    This are some simple Javascript code

### Phrase generator
  > create a function that generate a random phrases,
    create three literal arrays,
    randomly generate number based on the arrays length,
    use the random number to select the array value and
    concatenate the values to create a random phrase

### Array Iteration
    Use for loop to access array vales and index and print to console
* Display all of the values on a array

  pseudocode

  <strong> DECLARE </strong> a variable highestValue and set it to zero <br/>
  ** FOR ** : var i = 0; i < array.length; i++ <br/>
  ** DISPLAY ** the array values array[i]<br/>
  ** IF ** array[i] > highestValue <br/>
  ** SET ** highestValue == array[i]<br/>
  ** END IF ** <br>
  ** END FOR ** <br>
  ** DISPLAY ** highestValue

* Display all top values index

 <strong> DECLARE </strong> a array topValuesIndex and set it to empty array <br/>
 ** FOR ** : var i = 0; i < array.length; i++ <br/>
 ** IF ** highestValue === topValuesIndex <br/>
 ** ADD ** push i to topValuesIndex <br >
 ** END IF ** <br >
 ** END FOR **  <br>
 ** DISPLAY ** topValuesIndex
