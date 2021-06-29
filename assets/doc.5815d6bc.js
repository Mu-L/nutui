import{c as t,o as d,C as e}from"./vendor.870c33cc.js";const o={class:"markdown-body"},r=e('<h1>Overlay 遮罩层</h1><h3>介绍</h3><p>创建一个遮罩层，通常用于阻止用户进行其他操作</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\n//vue\nimport { OverLay } from &#39;@nutui/nutui&#39;;\n//taro\nimport { OverLay } from &#39;@nutui/nutui@taro&#39;;\n\nconst app = createApp();\napp.use(OverLay);\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><pre><code class="language-html">&lt;nut-overlay v-model:visible=&quot;state.show&quot; :z-index=&quot;2000&quot;&gt;&lt;/nut-overlay&gt;\n</code></pre><h3>嵌套内容</h3><pre><code class="language-html">&lt;nut-overlay v-model:visible=&quot;state.show2&quot; :z-index=&quot;2000&quot;&gt;\n  &lt;div class=&quot;wrapper&quot;&gt;\n    &lt;div class=&quot;content&quot;&gt;这里是正文&lt;/div&gt;\n  &lt;/div&gt;\n&lt;/nut-overlay&gt;\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:visible</td><td>当前组件是否显示</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>z-index</td><td>遮罩层级</td><td>String, Number</td><td><code>2000</code></td></tr><tr><td>duration</td><td>动画时长，单位秒</td><td>String, Number</td><td><code>0.3</code></td></tr><tr><td>overlay-class</td><td>自定义遮罩类名</td><td>String</td><td>-</td></tr><tr><td>overlay-style</td><td>自定义遮罩样式</td><td>CSSProperties</td><td>-</td></tr><tr><td>lock-scroll</td><td>背景是否锁定</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>close-on-click-overlay</td><td>是否点击遮罩关闭</td><td>Boolean</td><td><code>true</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击时触发</td><td>event: Event</td></tr></tbody></table>',15),a={expose:[],setup:e=>(e,a)=>(d(),t("div",o,[r]))};export default a;
