export const commonColors = {
  brightGreen: '#0E9D96',
  darkerGreen: '#054f4b',
  backgroundGrayCircle: '#EAF3F2',
  borderGreenCircle: '#2CA28D70',
  backgroundGray: '#F6F8F9',
  labelBlack: '#373A3C',
  greenishBlue: '#17A2B8',
  buttonGray: '#FAFAFA',
  clearFilterButtonBlack: '#646464',
  white: '#FFFFFF',
  titleBlack: '#001C30',
  black: '#000000',
  bodyPurple: '#A3A0FB',
  bodyBlueSky: '#55D8FE',
  tableGray: '#DEE2E6',
  tableDataGray: '#F5F5F5',
  redCircle: '#FF8373',
  greenCircle: '#55FEA1',
  tableCellGray: '#4D4F5C',
  gray: '#0000008A',
  lightBlack: '#162F44',
};

export const chartColors = {
  blueChartBar: '#40A9F4',
  legendText: '#4D4F5C',
  tooltipBorder: commonColors.black,
};

export const bootstrapColors = {
  blackBlue: '#0d6efd',
};

const colors = {
  ...commonColors,
  bootstrapColors,
  chartColors,
};

export default colors;
