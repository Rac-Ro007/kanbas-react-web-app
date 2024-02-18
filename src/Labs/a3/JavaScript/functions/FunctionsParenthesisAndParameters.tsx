function FunctionParenthesisAndParameters() {
    const square = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return (
      <div>
        Two Sqaured = square(2)
        <br/>{twoSquared}
        Three Plus One = plusOne(3)
        <br/>{threePlusOne}
      </div>
    );
  }
  
export default FunctionParenthesisAndParameters;