function formatNumber(num: number, digits: number = 2): string {
  return num.toFixed(digits);
}

// Parameters
type FormatNumberParams = Parameters<typeof formatNumber>;
const aaa: FormatNumberParams = [1231, 2];


// Return type
type ReturnNumberFormat = ReturnType<typeof formatNumber>;
const ccc: ReturnNumberFormat = 'aasdas';


// to generics
