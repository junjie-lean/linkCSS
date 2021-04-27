# link-style

A supports chained calls tool  for React/RN projects.

一个适用于react/react-native项目中的样式编写工具。  

事实上，社区里已经有非常成熟的class样式类工具了，比如[classnames](https://www.npmjs.com/package/classnames)这个包，就可以很方便灵活的处理日常开发工作。

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

### link-style的Api列表:

| api-name      | 对应样式名称            | 默认值                       |
| ------------- | ----------------------- | ---------------------------- |
| alignC        | alignContent            | stretch                      |
| alignI        | alignItems              | stretch                      |
| alignS        | alignSelf               | auto                         |
| all           | all                     | none                         |
| ani           | animation               | none 0 ease 0 1 normal       |
| aniD          | animationDelay          | 0                            |
| aniDir        | animationDirection      | normal                       |
| aniDur        | animationDuration       | 0                            |
| aniFM         | animationFillMode       | none                         |
| aniIC         | animationIterationCount | 1                            |
| aniN          | animationName           | none                         |
| aniPS         | animationPlayState      | running                      |
| aniTF         | animationTimingfn       | ease                         |
| bfV           | backfaceVisibility      | visible                      |
| bg            | background              | null                         |
| bgA           | backgroundAttachment    | scroll                       |
| bgBM          | backgroundBlendMode     | normal                       |
| bgClip        | backgroundClip          | border-box                   |
| bgColor       | backgroundColor         | transparent                  |
| bgI           | backgroundImage         | none                         |
| bgO           | backgroundOrigin        | padding-box                  |
| bgP           | backgroundPosition      | 0% 0%                        |
| bgR           | backgroundRepeat        | repeat                       |
| bgS           | backgroundSize          | auto                         |
| border        | border                  | null                         |
| borderB       | borderBottom            | null                         |
| borderBC      | borderBottomColor       | null                         |
| borderBLR     | borderBottomLeftRadius  | 0                            |
| borderBRR     | borderBottomRightRadius | 0                            |
| borderBS      | borderBottomStyle       | null                         |
| borderBW      | borderBottomWidth       | medium                       |
| borderC       | borderCollapse          | separate                     |
| borderColor   | borderColor             | null                         |
| borderI       | borderImage             | none 100% 1 0 stretch        |
| borderIO      | borderImageOutset       | 0                            |
| borderIR      | borderImageRepeat       | stretch                      |
| borderISli    | borderImageSlice        | 100%                         |
| borderIS      | borderImageSource       | none                         |
| borderIW      | borderImageWidth        | none                         |
| borderL       | borderLeft              | null                         |
| borderLC      | borderLeftColor         | null                         |
| borderLS      | borderLeftStyle         | null                         |
| borderLW      | borderLeftWidth         | medium                       |
| borderR       | borderRadius            | 0                            |
| borderRt      | borderRight             | null                         |
| birderRC      | borderRightColor        | null                         |
| borderRS      | borderRightStyle        | null                         |
| borderRW      | borderRightWidth        | medium                       |
| borderSpacing | borderSpacing           | null                         |
| borderS       | borderStyle             | null                         |
| borderT       | borderTop               | null                         |
| borderTC      | borderTopColor          | null                         |
| borderTLR     | borderTopLeftRadius     | 0                            |
| borderTRR     | borderTopRightRadius    | 0                            |
| borderTS      | borderTopStyle          | null                         |
| borderTW      | borderTopWidth          | medium                       |
| borderW       | borderWidth             | medium                       |
| b             | bottom                  | auto                         |
| boxS          | boxShadow               | none                         |
| boxSz         | boxSizing               | content-box                  |
| breakA        | breakAfter              | auto                         |
| breakB        | breakBefore             | auto                         |
| breakI        | breakInside             | auto                         |
| captionS      | captionSide             | top                          |
| caretC        | caretColor              | auto                         |
| clear         | clear                   | none                         |
| clip          | clip                    | auto                         |
| clipP         | clipPath                | none                         |
| color         | color                   | null                         |
| columnC       | columnCount             | auto                         |
| columnF       | columnFill              | balance                      |
| columnG       | columnGap               | normal                       |
| columnR       | columnRule              | medium none black            |
| columnRC      | columnRuleColor         | black                        |
| columnRS      | columnRuleStyle         | none                         |
| columnRW      | columnRuleWidth         | medium                       |
| columnS       | columnSpan              | 1                            |
| columnW       | columnWidth             | auto                         |
| columns       | columns                 | auto auto                    |
| content       | content                 | normal                       |
| counterI      | counterIncrement        | none                         |
| counterR      | counterReset            | none                         |
| cursor        | cursor                  | auto                         |
| direction     | direction               | ltr                          |
| display       | display                 | inline                       |
| emptyC        | emptyCells              | show                         |
| filter        | filter                  | none                         |
| flex          | flex                    | 0 1 auto                     |
| flexB         | flexBasis               | auto                         |
| flexD         | flexDirection           | row                          |
| flexF         | flexFlow                | row nowrap                   |
| flexG         | flexGrow                | 0                            |
| flexS         | flexShrink              | 1                            |
| flexW         | flexWrap                | nowrap                       |
| float         | cssFloat                | none                         |
| ft            | font                    | null                         |
| fontF         | fontFamily              | null                         |
| fontFS        | fontFeatureSettings     | normal                       |
| fontK         | fontKerning             | auto                         |
| fontS         | fontSize                | medium                       |
| fontSA        | fontSizeAdjust          | none                         |
| fontStretch   | fontStretch             | normal                       |
| fontStyle     | fontStyle               | normal                       |
| fontV         | fontVariant             | normal                       |
| fontVC        | fontVariantCaps         | normal                       |
| fontw         | fontWeight              | normal                       |
| grid          | grid                    | none none none auto auto row |
| gridA         | gridArea                | auto / auto / auto / auto    |
| gridAC        | gridAutoColumns         | auto                         |
| gridAF        | gridAutoFlow            | row                          |
| gridAR        | gridAutoRows            | auto                         |
| gridC         | gridColumn              | auto / auto                  |
| gridCE        | gridColumnEnd           | auto                         |
| gridCG        | gridColumnGap           | 0                            |
| gridCS        | gridColumnStart         | auto                         |
| gridG         | gridGap                 | 0 0                          |
| gridR         | gridRow                 | auto / auto                  |
| gridRE        | gridRowEnd              | auto                         |
| gridRG        | gridRowGap              | 0                            |
| gridRS        | gridRowStart            | auto                         |
| gridT         | gridTemplate            | none none none               |
| gridTA        | gridTemplateAreas       | none                         |
| gridTC        | gridTemplateColumns     | none                         |
| gridTR        | gridTemplateRows        | none                         |
| hangingP      | hangingPunctuation      | none                         |
| h             | height                  | auto                         |
| hyphens       | hyphens                 | manual                       |
| isolation     | isolation               | auto                         |
| justifyC      | justifyContent          | flex-start                   |
| l             | left                    | auto                         |
| letterS       | letterSpacing           | normal                       |
| lineH         | lineHeight              | normal                       |
| listS         | listStyle               | disc outside none            |
| listSI        | listStyleImage          | none                         |
| listSP        | listStylePosition       | outside                      |
| listST        | listStyleType           | disc                         |
| m             | margin                  | 0                            |
| mb            | marginBottom            | 0                            |
| ml            | marginLeft              | 0                            |
| mr            | marginRight             | 0                            |
| mt            | marginTop               | 0                            |
| maxH          | maxHeight               | none                         |
| maxW          | maxWidth                | none                         |
| minH          | minHeight               | 0                            |
| minW          | minWidth                | none                         |
| mixBM         | mixBlendMode            | normal                       |
| objectF       | objectFit               | see individual properties    |
| objectP       | objectPosition          | 50% 50%                      |
| op            | opacity                 | 1                            |
| order         | order                   | 0                            |
| outline       | outline                 | invert none medium           |
| outlineC      | outlineColor            | invert                       |
| outlineO      | outlineOffset           | 0                            |
| outlineS      | outlineStyle            | none                         |
| outlineW      | outlineWidth            | medium                       |
| overflow      | overflow                | visible                      |
| overflowX     | overflowX               | visible                      |
| overflowY     | overflowY               | visible                      |
| padding       | padding                 | 0                            |
| pb            | paddingBottom           | 0                            |
| pl            | paddingLeft             | 0                            |
| pr            | paddingRight            | 0                            |
| pt            | paddingTop              | 0                            |
| pageBA        | pageBreakAfter          | auto                         |
| pBB           | pageBreakBefore         | auto                         |
| pBI           | pageBreakInside         | auto                         |
| perspective   | perspective             | none                         |
| perspectiveO  | perspectiveOrigin       | 50% 50%                      |
| pointerE      | pointerEvents           | auto                         |
| position      | position                | static                       |
| quotes        | quotes                  | null                         |
| resize        | resize                  | none                         |
| r             | right                   | auto                         |
| scrollB       | scrollBehavior          | auto                         |
| tabSize       | tabSize                 | 8                            |
| tableL        | tableLayout             | auto                         |
| textA         | textAlign               |                              |
| textAL        | textAlignLast           | auto                         |
| textD         | textDecoration          | none                         |
| textDC        | textDecorationColor     | currentColor                 |
| textDL        | textDecorationLine      | none                         |
| textDS        | textDecorationStyle     | solid                        |
| textI         | textIndent              | null                         |
| textJ         | textJustify             | auto                         |
| textO         | textOverflow            | clip                         |
| textS         | textShadow              | none                         |
| textT         | textTransform           | none                         |
| t             | top                     | auto                         |
| tf            | transform               | none                         |
| tfO           | transformOrigin         | 50% 50% 0                    |
| tfS           | transformStyle          | flat                         |
| trans         | transition              | all 0 ease 0                 |
| transDe       | transitionDelay         | 0                            |
| transDur      | transitionDuration      | 0                            |
| transP        | transitionProperty      | all                          |
| transT        | transitionTimingfn      | ease                         |
| unicodeBidi   | unicodeBidi             | normal                       |
| userS         | userSelect              | auto                         |
| verticalA     | verticalAlign           | baseline                     |
| v             | visibility              | visible                      |
| whiteS        | whiteSpace              | normal                       |
| w             | width                   | auto                         |
| wordB         | wordBreak               | normal                       |
| wordS         | wordSpacing             | normal                       |
| wordW         | wordWrap                | normal                       |
| writingM      | writingMode             | horizontal-tb                |
| zIndex        | zIndex                  | auto                         |
| displayF      | null                    | { display:"flex" }           |




### 自定义样式方法
`link-style` 从w3cShool的 [css参考手册](https://www.w3school.com.cn/cssref/index.asp) 爬取了css的基础属性，如果这些属性还不能满足日常开发的话，还可以自定义配置link-style的方法：  

```js
     import linkcss from 'link-style';
    
     //function
     linkcss.customStyle( {  type:"fn" ,callName:"marginL", styleName:"marginLeft"  } ) 
     //props
     linkcss.customStyle( {  type:"sd" ,callName:"colorRed",styleValue:{ color:"red"}  } )  
  
      
     const someStyle =  linkcss.w(200).colorRed.marginL(30).fontS(18).end;
     /**
       *  someStyle ==> { width: 200, color: 'red', marginLeft: 20, fontSize: 18 }
       */

```