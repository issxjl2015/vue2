<template>
    <div class="dialog-wrapper" :class="{'open': isOpen}">
        <div class="overlay" @click="close()"></div>
        <div class="dialog">
            <div class="heading">
                <slot name="heading"></slot>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
<style lang="less">
.dialog-wrapper {
    &.open {
        display: block;
    }
    height: 100%;
    display: none;
    &>.overlay {
        background: rgba(0, 0, 0, .3);
        z-index: 1;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    &> .dialog {
        z-index: 10;
        background: #fff;
        position: fixed;
        top:24px;
        left:24px;
        right:24px;
        bottom: 24px;
        padding: 24px 14px;
        box-shadow:  0 0 10px rgba(0,0,0, .8);
        & heading {
            padding: 12px;
        }
    }
}
</style>

<script>
export default {
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        open() {
            this.isOpen = true
            this.$emit('dialogopen')
        },
        close() {
            this.isOpen = false
            this.$emit('dialogclose')
        }
    }
}
</script>

