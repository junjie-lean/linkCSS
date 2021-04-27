/*
 * @Author: junjie.lean
 * @Date: 2021-04-27 13:00:07
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2021-04-27 13:25:24
 */

/**
 * 生成 markdown中,api的table.
 */
const fs = require("fs");
const csslist = require("./cssList.json");
const cssSpecialList = require("./cssSpecialList.json");

const total = [].concat(csslist, cssSpecialList);

let result = `
|api-name|对应样式名称|默认值|
|---|---|---|
`;

total.map((item) => {
  if (item.type === "fn") {
    const { shortName, ReactStyleName, defaultValue } = item;
    result += `|  ${shortName === "" ? ReactStyleName[0] : shortName}  |  ${
      ReactStyleName[0]
    }  |  ${defaultValue[0] === "not specified" ? "null" : defaultValue[0]} |\r`;
  } else {
    const { specialDisposeName, specialDisposeValue } = item;
    result += `|  ${specialDisposeName}  |  null  |  ${specialDisposeValue.valueOf()}  |\r`;
  }
});

fs.writeFile("./markdownApi", result, { flag: "w+" }, (data) => {
  console.log("down");
});
