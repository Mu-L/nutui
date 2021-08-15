import{e as t,o as e,G as u}from"./vendor.bcce97f3.js";const n={class:"markdown-body"},o=[u('<h1>Swipe 滑动手势</h1><h3>介绍</h3><p>常用于单元格左滑删除等手势操作</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\n//vue\nimport { Swipe } from &#39;@nutui/nutui&#39;;\n//taro\nimport { Swipe } from &#39;@nutui/nutui-taro&#39;;\n\nconst app = createApp();\napp.use(Swipe);\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><pre><code class="language-html">&lt;nut-swipe&gt;\n    &lt;nut-cell round-radius=&quot;0&quot; desc=&quot;左滑删除&quot; /&gt;\n    &lt;template #right&gt;\n        &lt;nut-button shape=&quot;square&quot; style=&quot;height:100%&quot; type=&quot;danger&quot;&gt;删除&lt;/nut-button&gt;\n    &lt;/template&gt;\n&lt;/nut-swipe&gt;\n</code></pre><h3>禁止滑动</h3><pre><code class="language-html">&lt;nut-swipe disabled&gt;\n    &lt;nut-cell round-radius=&quot;0&quot; desc=&quot;禁止滑动&quot; /&gt;\n    &lt;template #right&gt;\n        &lt;nut-button shape=&quot;square&quot; style=&quot;height:100%&quot; type=&quot;danger&quot;&gt;删除&lt;/nut-button&gt;\n    &lt;/template&gt;\n&lt;/nut-swipe&gt;\n</code></pre><h3>左右滑动</h3><pre><code class="language-html">&lt;nut-swipe&gt;\n    &lt;template #left&gt;\n        &lt;nut-button shape=&quot;square&quot; style=&quot;height:100%&quot; type=&quot;success&quot;&gt;选择&lt;/nut-button&gt;\n    &lt;/template&gt;\n    &lt;nut-cell round-radius=&quot;0&quot; desc=&quot;左滑右滑都可以哦&quot; /&gt;\n    &lt;template #right&gt;\n        &lt;nut-button shape=&quot;square&quot; style=&quot;height:100%&quot; type=&quot;danger&quot;&gt;删除&lt;/nut-button&gt;\n        &lt;nut-button shape=&quot;square&quot; style=&quot;height:100%&quot; type=&quot;info&quot;&gt;收藏&lt;/nut-button&gt;\n    &lt;/template&gt;\n&lt;/nut-swipe&gt;\n</code></pre><h3>异步控制</h3><pre><code class="language-html">&lt;nut-swipe ref=&quot;refSwipe&quot; @open=&quot;open&quot; @close=&quot;close&quot;&gt;\n    &lt;nut-cell title=&quot;异步打开关闭&quot;&gt;\n    &lt;template v-slot:link&gt;\n        &lt;nut-switch v-model=&quot;checked&quot; @change=&quot;changSwitch&quot; active-text=&quot;开&quot; inactive-text=&quot;关&quot; /&gt;\n    &lt;/template&gt;\n    &lt;/nut-cell&gt;\n    &lt;template #right&gt;\n        &lt;nut-button shape=&quot;square&quot; style=&quot;height:100%&quot; type=&quot;danger&quot;&gt;删除&lt;/nut-button&gt;\n    &lt;/template&gt;\n&lt;/nut-swipe&gt;\n</code></pre><pre><code class="language-typescript">    setup() {\n        const refSwipe = ref&lt;HTMLElement&gt;();\n        const checked = ref(false);\n        const changSwitch = (value: boolean) =&gt; {\n            if (value) {\n                refSwipe.value?.open(&#39;left&#39;);\n            } else {\n                refSwipe.value?.close();\n            }\n        };\n         const open = (obj: any) =&gt; {\n            console.log(obj);\n            checked.value = true;\n        };\n        const close = () =&gt; {\n            checked.value = false;\n        };\n        return { checked, changSwitch, refSwipe, open, close };\n    }\n</code></pre><h3>自定义</h3><pre><code class="language-html">&lt;nut-swipe&gt;\n    &lt;template #left&gt;\n        &lt;nut-button shape=&quot;square&quot; style=&quot;height:100%&quot; type=&quot;success&quot;&gt;选择&lt;/nut-button&gt;\n    &lt;/template&gt;\n    &lt;nut-cell title=&quot;商品描述&quot;&gt;\n    &lt;template v-slot:link&gt;\n        &lt;nut-inputnumber v-model=&quot;number&quot; /&gt;\n    &lt;/template&gt;\n    &lt;/nut-cell&gt;\n    &lt;template #right&gt;\n        &lt;nut-button shape=&quot;square&quot; style=&quot;height:100%&quot; type=&quot;danger&quot;&gt;删除&lt;/nut-button&gt;\n        &lt;nut-button shape=&quot;square&quot; style=&quot;height:100%&quot; type=&quot;info&quot;&gt;收藏&lt;/nut-button&gt;\n    &lt;/template&gt;\n&lt;/nut-swipe&gt;\n</code></pre><pre><code class="language-typescript">    setup() {\n        const number = ref(0);\n        return { number };\n    }\n</code></pre><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>唯一标识</td><td>String</td><td>-</td></tr><tr><td>disabled</td><td>是否禁用滑动</td><td>String</td><td>false</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>open</td><td>打开时触发</td><td>{type:‘left or right’}</td></tr><tr><td>close</td><td>关闭时触发</td><td>{type:‘left or right’}</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>left</td><td>左侧滑动内容</td></tr><tr><td>default</td><td>自定义内容</td></tr><tr><td>right</td><td>右侧滑动内容</td></tr></tbody></table><h3>方法</h3><p>通过 ref 可以获取到 Swipe 实例并调用实例方法。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>open</td><td>打开单元格侧边栏</td><td>left or right</td></tr><tr><td>close</td><td>收起单元格侧边栏</td><td></td></tr></tbody></table>',27)],l={setup:u=>(u,l)=>(e(),t("div",n,o))};export{l as default};
