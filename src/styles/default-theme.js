export default {
  table: {
    backgroundColor: palette.canvasColor,
  },
  tableFooter: {
    borderColor: palette.borderColor,
    textColor: palette.accent3Color,
  },
  tableHeader: {
    borderColor: palette.borderColor,
  },
  tableHeaderColumn: {
    textColor: palette.accent3Color,
    height: 56,
    spacing: 24,
  },
  tableRow: {
    hoverColor: palette.accent2Color,
    stripeColor: fade(lighten(palette.primary1Color, 0.5), 0.4),
    selectedColor: palette.borderColor,
    textColor: palette.textColor,
    borderColor: palette.borderColor,
    height: 48,
  },
  tableRowColumn: {
    height: 48,
    spacing: 24,
  }
}