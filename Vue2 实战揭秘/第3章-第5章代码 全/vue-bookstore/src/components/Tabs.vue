<template>
    <div class="tabs">
        <ul>
            <router-link :to="{name: 'Home'}" tag="li" exact>
                <div>
                    <img src="../assets/images/home.svg">
                </div>
                <div>首页</div>
            </router-link>
            <router-link :to="{name: 'Categories'}" tag="li">
                <div>
                    <img src="../assets/images/category.svg">
                </div>
                <div>分类</div>
            </router-link>
            <router-link :to="{name: 'ShoppingCart'}" tag="li">
                <div>
                    <img src="../assets/images/cart.svg">
                </div>
                <div>购物车</div>
            </router-link>
            <router-link :to="{name: 'Me'}" tag="li">
                <div>
                    <img src="../assets/images/me.svg">
                </div>
                <div>我</div>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {}
</script>
<style lang="less">
.tabs {
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    box-shadow: 0 2px 4px #000;
    width: 100%;
    & > ul,
    & > ul > li {
        margin: 0;
        padding: 0;
    }
    ul {
        display: table;
        width: 100%;
        & > li {
            text-align: center;
            font-size: 10px;
            display: table-cell;
            padding: 8px 12px;
            &.active {
                color: #d0021b;
            }
        }
    }
}
</style>
