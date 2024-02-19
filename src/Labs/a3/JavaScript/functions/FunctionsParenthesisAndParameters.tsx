function FunctionParenthesisAndParameters() {
    const square = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return (
      <div>
        <h4>Parenthesis and parameters</h4>
        Two Sqaured = square(2) =
        {twoSquared} <br/>
        Three Plus One = plusOne(3) = 
         {threePlusOne} <br/>
      </div>
    );
  }
  
export default FunctionParenthesisAndParameters;