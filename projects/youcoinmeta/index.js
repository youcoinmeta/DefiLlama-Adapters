const { sumTokensExport } = require("../helper/unwrapLPs");

const owner = "0xA949696cfDf479d224DF4f95F0C3C2bD7230ccbf";
const tokens = [
  "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
  "0x1F88E9956c8f8F64c8D5fEF5eD8A818E2237112c",
  "0x1702EC380e924B0E12d5C2e838B6b91A1fB3A052",
];

module.exports = {
  timetravel: true,
  misrepresentedTokens: false,
  bsc: {
    tvl: sumTokensExport({ owner, tokens }),
  },
};
