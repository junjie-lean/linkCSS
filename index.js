/*
 * @Author: junjie.lean
 * @Date: 2021-04-23 11:29:21
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2021-04-27 10:42:14
 */
const cssList = require("./cssList.json");
const cssSpecialList = require("./cssSpecialList.json");

const isDev = process.env.NODE_ENV === "development";

const base = {
  version: "0.1.0",
  author: "lean",
};

/**
 * @description 关键原型对象
 */
const linkStyle = Object.create(
  {},
  {
    //合并对象
    cssObject: {
      value: {},
      // enumerable: true,
      configurable: true,
    },
    //返回当前对象
    next: {
      value: function () {
        return this;
      },
      enumerable: false,
      configurable: false,
    },
    //合并当前对象
    combineStyle: {
      value: function (v) {
        this.cssObject = this.cssObject ? Object.assign(this.cssObject, v) : v;
        return this.next();
      },
      enumerable: false,
      configurable: false,
    },
    //调试当前对象
    logThis: {
      value: function () {
        console.log(this);
        return this.next();
      },
      enumerable: false,
      configurable: false,
    },
    //自定义样式
    customStyle: {
      value: function (styleList) {
        
      },
      enumerable: true,
      configurable: false,
    },
    //结束链式调用并返回样式对象
    end: {
      get() {
        let endStyle = { ...this.cssObject };
        delete this.cssObject;
        return endStyle;
      },
      enumerable: true,
      configurable: false,
    },
  }
);

/**
 * @description 根据数据生成相应的api
 * @condition 引入的二者均为数组时:
 * @example
 *  {
    "type": "function",
    "shortName": "",
    "ReactStyleName": ["paddingTop"],
    "defaultValue": ["0"]
    },

     {
    "specialDisposeName": "displayF",
    "specialDisposeValue": {
      "display": "flex"
      }
    }
 *
 */
Array.isArray(cssList) && Array.isArray(cssSpecialList)
  ? [].concat(cssList, cssSpecialList).map((item) => {
      if (item.type === "fn") {
        const ReactStyleName = item.ReactStyleName[0];
        const shortName = item.shortName;
        const defailtValue =
          item.defaultValue[0] === "not specified"
            ? null
            : item.defaultValue[0];
        Object.defineProperties(linkStyle, {
          [ReactStyleName]: {
            //默认情况,全称必有的情况:
            value: function (v = defailtValue) {
              if (!v) {
                throw new Error(
                  `'${shortName}'/'${ReactStyleName}' 没有设置默认值,该属性必须设置一个值!`
                );
              }
              return this.combineStyle({ [ReactStyleName]: v });
            },
            configurable: false,
            // enumerable: isDev,
            enumerable: !isDev,
          },
          ...(shortName
            ? {
                //有短名称的情况下:
                [shortName]: {
                  value: function (v = item.defaultValue) {
                    if (!v) {
                      throw new Error(
                        `'${shortName}'/'${ReactStyleName}' 没有设置默认值,该属性必须设置一个值!`
                      );
                    }
                    return this.combineStyle({ [ReactStyleName]: v });
                  },
                  configurable: false,
                  // enumerable: isDev,
                  enumerable: !isDev,
                },
              }
            : {}),
        });
      } else {
        //特殊处理的字段
        //比如 displayF
        Object.defineProperty(linkStyle, item.specialDisposeName, {
          get() {
            return this.combineStyle(item.specialDisposeValue);
          },
          enumerable: isDev,
        });
      }
    })
  : null;

module.exports = linkStyle;

// console.log(linkStyle.pos("relative").fs(24).end);
// console.log(linkStyle.padding(10).fs(23).end);