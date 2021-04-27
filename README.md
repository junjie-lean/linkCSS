# linkCSS

一个适用于react/react-native项目中的样式编写工具。
开发此工具的目的并不是为了完全改变在css文件中编写class样式类名的开发方式，可以把linkcss工具视为这种方式的互补方法。

安装:
```
    npm install linkcss
```

使用方法:
```jsx

    //react组件:
    import React from 'react';
    import linkCSS from 'linkcss';
    
    ...


    const someComponent = ( props )=>{


    
    const commonStyle  = linkCSS.w( "100%" )
                                .h(somecondition ? 200 : 300 )
                                .fontS( 20 )
                                .mt( 20 )
                                .displayF
                                .position("relative")
                                .end;

    /**
      * 生成的结果为:
        commonStyle ==> {
                          width: '100%',
                          height: 200,
                          fontSize: 20,
                          marginTop: 20,
                          display: 'flex',
                          position: 'relative'
                        }
     */
                                
        return (
             <div style={commonStyle}>
                {/* 还可以在组件内部编写 */}
                <div style={ linkCSS.w(200).displayF.alignI("center").justifyC("space-between").end }>
                        <div style={ someCondition ? aStyleObject : orLinkcssCode  } >balabala...</div>
                        <div style={ { ...(linkcss.w(200).displayF.alignI("center").end), ...anotherStyleObject } }>balabala...</div>
                        <div>balabala...</div>
                </div>

             </div>
        )

    }

```

自定义样式方法

    `linkcss`从w3cShool的(css参考手册)[https://www.w3school.com.cn/cssref/index.asp]爬取了