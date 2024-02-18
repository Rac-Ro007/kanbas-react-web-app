function ArrayIndexAndLength() {
    let numberArray1 = [1, 2, 3, 4, 5];
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);

    return (
        <div>
            <h4>Array Index and Length</h4>
            Number Array = {numberArray1}
            <br/>
            Length = {length1}
            <br/>
            Element at Index 1 = {index1}
        </div>
    );
}

export default ArrayIndexAndLength;