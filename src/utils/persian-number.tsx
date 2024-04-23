function replaceWithPersianDigits(string: string) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  let res = string;
  for (let i = 0; i < 9; i++) res = res.replace(i.toString(), persianDigits[i]);
  return res;
}

export default replaceWithPersianDigits;
