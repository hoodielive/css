# Advanced CSS 

## Importance 
1. User !important declarations 
2. Author !important declarations 
3. Author declarations 
4. User declarations 
5. Default browswer declarations

## Specificity 
1. Inline styles 
2. IDs 
3. Classes, pseudo-classes, attribute
4. Elements, pseduo-elements 

## Source Order 
The last declaration in the code will override all other declarations will be applied.

## Summary 
1. CSS declarations marked with !important have the highest priority. 
2. Only use !important as a last resource. Its better to correct specificities - more maintainable code! 
3. Inline styles will always have priority over styles in external stylesheets. 
4. A selector that contains 1 ID is more specific than one with 1000 classes. 
5. A selector that contains 1 class is more specific than one with 1000 elements. 
6. The Universal selector * has no specifity (0,0,0,0).
7. Rely more on specificity than on the order of selectors.
8. Rely on order when using 3rd-party stylesheets - always put your author stylesheet last.
