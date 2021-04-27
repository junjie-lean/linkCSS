# link-style

一个适用于react/react-native项目中的样式编写工具。  

事实上，社区里已经有非常成熟的class样式类工具了，比如[classnames](https://www.npmjs.com/package/classnames)这个包，就可以很方便灵活的

开发此工具的目的并不是为了改变在css/less/sass文件中编写class样式类名的开发方式，可以把link-style工具视为这种方式的互补方法。

### 安装:
```
    npm install link-style
```

### 使用方法:
```jsx

    //react组件:
    import React from 'react';
    import linkcss from 'link-style';
    
    ...


    const someComponent = ( props )=>{


    
    const commonStyle  = linkcss.w( "100%" )
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
                <div style={ linkcss.w(200).displayF.alignI("center").justifyC("space-between").end }>
                        <div style={ someCondition ? aStyleObject : orlinkcssCode  } >balabala...</div>
                        <div style={ { ...(linkcss.w(200).displayF.alignI("center").end), ...anotherStyleObject } }>balabala...</div>
                        <div>balabala...</div>
                </div>

             </div>
        )

    }

```

### 自定义样式方法
`link-style` 从w3cShool的 [css参考手册](https://www.w3school.com.cn/cssref/index.asp) 爬取了css的基础属性，如果这些属性还不能满足日常开发的话，还可以自定义配置link-style的方法：  

```js
     import linkcss from 'link-style';

     
    
    

```