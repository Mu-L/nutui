import{e as s,o as a,G as t}from"./vendor.f7062dc0.js";const n={class:"markdown-body"},l=[t('<h1>Collapse 折叠面板</h1><h3>介绍</h3><p>将内容放置在多个折叠面板中，点击面板标题可展开或收缩内容。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">// vue</span>\n<span class="hljs-keyword">import</span> { Collapse } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">// taro</span>\n<span class="hljs-keyword">import</span> { Collapse } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Collapse);\n</code></pre><h2>代码演示</h2><h2>基本用法</h2><p>通过<code>v-model</code>控制展开的面板列表，<code>activeNames</code>为数组格式</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active1&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;down-arrow&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:mTitle</span>&gt;</span>\n      {{title1}}\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    NutUI是一套拥有京东风格的轻量级的 Vue 组件库\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title2&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n    在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title3&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">const</span> activeNames = reactive([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]);\n  <span class="hljs-keyword">const</span> title = reactive({\n    <span class="hljs-attr">title1</span>: <span class="hljs-string">&#39;标题1&#39;</span>,\n    <span class="hljs-attr">title2</span>: <span class="hljs-string">&#39;标题2&#39;</span>,\n    <span class="hljs-attr">title3</span>: <span class="hljs-string">&#39;标题3&#39;</span>,\n  })\n  <span class="hljs-keyword">return</span> {\n    activeNames,\n    ...toRefs(title)\n  };\n}\n</code></pre><h3>无icon样式</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;activeName&quot;</span> <span class="hljs-attr">:accordion</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title1&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\n   引入Vue3新特性 Composition API、Teleport、Emits 等\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title2&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n    全面使用 TypeScipt\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">const</span> activeName = ref(<span class="hljs-number">1</span>);\n  <span class="hljs-keyword">const</span> title = reactive({\n    <span class="hljs-attr">title1</span>: <span class="hljs-string">&#39;标题1&#39;</span>,\n    <span class="hljs-attr">title2</span>: <span class="hljs-string">&#39;标题2&#39;</span>,\n    <span class="hljs-attr">title3</span>: <span class="hljs-string">&#39;标题3&#39;</span>,\n  })\n  <span class="hljs-keyword">return</span> {\n    activeName,\n    ...toRefs(title)\n  };\n}\n</code></pre><h3>手风琴</h3><p>通过<code>accordion</code>可以设置为手风琴模式，最多展开一个面板，此时<code>activeName</code>为字符串格式；<code>subTitle</code>可以设置副标题的内容</p><pre><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;activeName&quot;</span> <span class="hljs-attr">:accordion</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;down-arrow&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title1&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\n    基于京东设计语言体系，构建场景\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title2&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">:sub-title</span>=<span class="hljs-string">&quot;subTitle&quot;</span>&gt;</span>\n   提高界⾯的模块化通用程度\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title3&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\n  采用组合式 API Composition 语法重构，结构清晰，功能模块化\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">const</span> activeName = ref(<span class="hljs-number">1</span>);\n  <span class="hljs-keyword">const</span> subTitle = <span class="hljs-string">&#39;副标题&#39;</span>;\n  <span class="hljs-keyword">const</span> title = reactive({\n    <span class="hljs-attr">title1</span>: <span class="hljs-string">&#39;标题1&#39;</span>,\n    <span class="hljs-attr">title2</span>: <span class="hljs-string">&#39;标题2&#39;</span>,\n    <span class="hljs-attr">title3</span>: <span class="hljs-string">&#39;标题3&#39;</span>,\n  })\n  <span class="hljs-keyword">return</span> {\n    activeName,\n    subTitle,\n    ...toRefs(title)\n  };\n}\n</code></pre><h3>自定义折叠图标</h3><p>通过icon设置自定义图标，rotate设置图标旋转的角度</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse</span>\n  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;activeName&quot;</span>\n  <span class="hljs-attr">:accordion</span>=<span class="hljs-string">&quot;true&quot;</span>\n  <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;arrow-right2&quot;</span>\n  <span class="hljs-attr">rotate</span>=<span class="hljs-string">&quot;90&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title1&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:sTitle</span>&gt;</span>\n      文本测试\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    NUTUI3.0重新思考其内在的一致性和可组合性\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title2&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">sub-title</span>=<span class="hljs-string">&quot;文本内容&quot;</span>&gt;</span>\n    提⾼产研输出对接的效率，降低输出工作量\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">const</span> activeName = ref(<span class="hljs-number">1</span>);\n<span class="hljs-keyword">const</span> title = reactive({\n  <span class="hljs-attr">title1</span>: <span class="hljs-string">&#39;标题1&#39;</span>,\n  <span class="hljs-attr">title2</span>: <span class="hljs-string">&#39;标题2&#39;</span>,\n})\n<span class="hljs-keyword">return</span> {\n  activeName,\n  ...toRefs(title)\n};\n</code></pre><h3>自定义标题图标</h3><p>通过icon设置自定义图标，rotate设置图标旋转的角度</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse</span>\n  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;activeName&quot;</span>\n  <span class="hljs-attr">title-icon</span>=<span class="hljs-string">&quot;issue&quot;</span>\n  <span class="hljs-attr">title-icon-color</span>=<span class="hljs-string">&quot;red&quot;</span>\n  <span class="hljs-attr">title-icon-size</span>=<span class="hljs-string">&quot;20px&quot;</span>\n  <span class="hljs-attr">title-icon-position</span>=<span class="hljs-string">&quot;left&quot;</span>\n  <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;down-arrow&quot;</span>\n  <span class="hljs-attr">:accordion</span>=<span class="hljs-string">&quot;true&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title1&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\n  组件 emits 事件单独提取，增强代码可读性\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title2&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">sub-title</span>=<span class="hljs-string">&quot;文本内容&quot;</span>&gt;</span>\n  使用 Teleport 新特性重构挂载类组件\n  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse</span>&gt;</span>\n</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">const</span> activeName = ref(<span class="hljs-number">1</span>);\n<span class="hljs-keyword">const</span> title = reactive({\n  <span class="hljs-attr">title1</span>: <span class="hljs-string">&#39;标题1&#39;</span>,\n  <span class="hljs-attr">title2</span>: <span class="hljs-string">&#39;标题2&#39;</span>,\n})\n<span class="hljs-keyword">return</span> {\n  activeName,\n  ...toRefs(title)\n};\n</code></pre><h2>Collapse Prop</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前展开面板的 name</td><td>手风琴模式：string | number<br>非手风琴模式：(string | number)[]</td><td>-</td></tr><tr><td>accordion</td><td>是否开启手风琴模式</td><td>boolean</td><td>false</td></tr><tr><td>icon</td><td>图标链接/或使用 NutUI 的 icon</td><td>string</td><td>‘’</td></tr><tr><td>icon-size</td><td>图标大小</td><td>string</td><td>16px</td></tr><tr><td>icon-color</td><td>图标颜色</td><td>string</td><td>‘’</td></tr><tr><td>title-icon</td><td>标题图标链接/或使用 NutUI 的 icon</td><td>string</td><td>‘’</td></tr><tr><td>title-icon-size</td><td>标题图标大小</td><td>string</td><td>16px</td></tr><tr><td>title-icon-color</td><td>标题图标颜色</td><td>string</td><td>’‘</td></tr><tr><td>title-icon-position</td><td>标题图标位置</td><td>string</td><td>‘left’</td></tr><tr><td>rotate</td><td>点击折叠和展开的旋转角度,在自定义图标模式下生效</td><td>string \\ number</td><td>180</td></tr></tbody></table><h3>CollapseItem Prop</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>唯一标识符，必填</td><td>string \\ number</td><td>-1</td></tr><tr><td>title</td><td>标题栏左侧内容，支持插槽传入（props传入的优先级更高）</td><td>string</td><td>-</td></tr><tr><td>sub-title</td><td>标题栏副标题，支持插槽传入（props传入的优先级更高）</td><td>string</td><td>-</td></tr><tr><td>disabled</td><td>标题栏是否禁用</td><td>boolean</td><td>false</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>切换面板时触发</td><td>类型与 v-model 绑定的值一致</td></tr></tbody></table>',31)],p={setup:(t,{expose:p})=>(p({frontmatter:{}}),(t,p)=>(a(),s("div",n,l)))};export{p as default};
