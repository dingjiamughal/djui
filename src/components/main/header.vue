<!--
@Author: Dingjia
@Date:   2018-04-29T12:48:11+08:00
@Last modified by:   Dingjia
@Last modified time: 2018-04-29T13:09:14+08:00
-->



<template lang="html">
  <header class="nav-top">
        <div class="nav-top-logo">
            <a href="/Kaytune/Home/Index"><img src="http://rdimage.oss-cn-shanghai.aliyuncs.com/c289b77d-9b8e-412d-8bb6-54e36c76fcdc.png"></a>
        </div>
        <div class="nav-top-list">
            <ul>
                <li style="cursor: pointer;">
                    <i class="iconfont">&#xe600;</i><i class="iconfont" style="font-size: 14px;">&#xe60f;</i>
                    <div class="dropdown-block">
                        <ul style="width: 200px;" aria-labelledby="dropdownMenu1" id="select-account">
                          <li><a href="#"><div><i></i>上海凯淳测试号<span class="pull-right text-muted small">上海凯淳实业股份有限公司</span></div></a></li>
                        </ul>
                    </div>
                </li>
                <li class="">
                    <p>测试号管理员</p>
                </li>
                <li style="cursor: pointer;" class="">
                    <i class="iconfont">&#xe607;</i>
                    <div class="dropdown-block">
                        <input type="hidden" id="hidExpireDate" value="2018/5/2 14:15:10">
                        <ul style="width: 160px;">
                            <li class="">
                                <p>修改密码</p>
                            </li>
                            <li onclick="window.location.href = '/Kaytune/User/Logout'" class="">
                                <p>退出</p>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.nav-top {
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    background-color: #373D41;
    width: 100%;
    min-width: 870px;
    box-shadow: 0 0 5px #D6D8DB;
    z-index: 9;
    color: #fff;
    font-size: 14px;
    .nav-top-logo {
        height: 100%;
        float: left;
        padding: 5px;
        border-right: 1px solid #2A2F32;
        cursor: pointer;
        width: 50px;

        img {
            max-height: 40px;
        }
    }
    .nav-top-list {
        float: right;
        height: 100%;
        line-height: 50px;
        ul {
            float: right;
            > li {
                float: left;
                text-align: center;
                color: #fff;
                position: relative;
                border-right: 1px solid #2A2F32;
                height: 50px;
                padding: 0 20px;
                .iconfont {
                    color: #fff;
                    font-size: 24px;
                }
            }
        }
    }
}
.dropdown-block {
    background: #fff;
    border-width: 0 1px 1px;
    border-color: #F5F5F6;
    border-style: solid;
    position: absolute;
    top: 50px;
    right: 0;
    padding: 0;
    font-size: 12px;
    display: none;
    ul {
        list-style: none;
        color: #000;
    }
}
</style>
