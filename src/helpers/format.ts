const formatNumberUS = new Intl.NumberFormat('en-US');

export const formatNumber = (num: number) => {
  return formatNumberUS.format(num);
};
