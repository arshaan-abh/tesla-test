function addCommas(string: string) {
  const reversedString = string.split("").reverse().join("");

  let withCommas = "";
  for (let i = 0; i < reversedString.length; i++) {
    if (i > 0 && i % 3 === 0) {
      withCommas += ",";
    }
    withCommas += reversedString[i];
  }

  return withCommas.split("").reverse().join("");
}

export default addCommas;
