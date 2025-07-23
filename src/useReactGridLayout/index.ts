/**
 * 相关元素信息
 */
const elementKeys = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd'
}

/**
 * 页面相关元素的配置信息，从页面上量出来的高度，单位px
 */
const elementProps = {
    [`${elementKeys.a}Height`]: 100,
    [`${elementKeys.b}Height`]: 200,
    [`${elementKeys.c}Height`]: 300,
    [`${elementKeys.c}Height`]: 400,
}

/**
 * layout的配置基础数据
 */

const cols = 12
const marginX = 0
const marginY = 4 // px
const rowHeight = 50
const commonProps = {
    minH: 1,
    minW: cols,
    resizeHandles: ['s', 'n'],
}

/**
 *  基础的layout数据，其他数据需要动态计算补进来，咱们本次的处理只针对高度，所以 w 都是 cols 的值，h 和 y 需要根据元素本身的尺寸信息和元素的位置信息动态计算出来
 */
const baseLayout = [
    {
        i: elementKeys.a,
        x: 0,
        w: cols,
        ...commonProps,
    },
    {
        i: elementKeys.b,
        x: 0,
        w: cols,
        ...commonProps,
    },
    {
        i: elementKeys.c,
        x: 0,
        w: cols,
        ...commonProps,
    },
    {
        i: elementKeys.d,
        x: 0,
        w: cols,
        ...commonProps,
    },
]

/**
 * 动态计算后的补全了的layout配置
 */
const baseLayoutWithH = baseLayout.map((item, index) => {
    const elementHeight = elementProps[`${item.i}Height`]
    return {
        ...item,
        // h 根据尺寸和行高动态计算
        h: elementHeight / rowHeight,
    }
})
const computedLayout = baseLayoutWithH.map((item, index) => {
    const baseElements = baseLayoutWithH.slice(0, index)
    const y =
        baseElements.reduce((acc, item2) => {
            return acc + item2.h
        }, 0) +
        (baseElements.length * marginY) / rowHeight
    return {
        ...item,
        y,
    }
})

export default function useReactGridLayout() {
    return {
        layout: computedLayout,
        cols,
        rowHeight,
        margin: [marginX, marginY],
        autoSize: false,
    }
}
