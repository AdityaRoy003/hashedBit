// Variable Scope with let, const, and var
function variableScopes() {
    let a = "I am a let variable";
    const b = "I am a const variable";
    var c = "I am a var variable";
  
    console.log("let:", a);
    console.log("const:", b);
    console.log("var:", c);
  }
  
  variableScopes();
  
  // Difference in scope:
  // - `let` is block-scoped (accessible only within the block it was defined).
  // - `const` is block-scoped and cannot be reassigned.
  // - `var` is function-scoped (accessible within the function or globally if defined in the global scope).
  