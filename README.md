# linkCSS

一个适用于react/react-native项目中的样式编写工具.

安装:
```
    npm install linkcss
```

使用方法:
```jsx
    import linkCSS from 'linkcss';

    ...

    const commonStyle  = linkCSS.w( "100%" )
                                .h(somecondition ? 200 : 300 )
                                .fontS( 20 )
                                .mt( 20 )
                                .displayF
                                .position("relative")
                                .end;


                                
    <div style={commonStyle}>

        <div>

        </div>

    </div>

```
