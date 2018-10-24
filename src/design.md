# design

辣眼睛的基础组件库，非传统样式库bootstrap不存在通用样式类。

## button
普通button `default` `primary` `success` `warning` `info` `disable`

## breadcrumb
暂不支持中间的隔断符 icon，所以简洁调用方式`sv-breadcrumb`
后期可能会变成

```pug
sv-breadcrumb
    sv-breadcrumb-item
    sv-icon
```

## notification
调用方式：this.$notify({...options})

## layout
栅格
- 普通版：float: left
- flex版

## Input
input、textarea

## Table
```js
// column
{title: 'ID', prop:'id', ...attrs}
// row
{attr1: '1', attr2: '名称1', attr3: '男', ...attrNames, attrR: render(type: slot)}
```