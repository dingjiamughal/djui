# design

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
提供栅格服务
- 普通版：float: left
- flex版