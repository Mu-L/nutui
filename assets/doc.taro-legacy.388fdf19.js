System.register(["./vendor-legacy.608378ec.js"],(function(t){"use strict";var d,e,o;return{setters:[function(t){d=t.c,e=t.o,o=t.C}],execute:function(){const s={class:"markdown-body"},n=o('<h1>Toast 吐司</h1><p>轻提示。</p><h3>介绍</h3><p>用于轻提示。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Toast } from &#39;@nutui/nutui@taro&#39;;\n\nconst app = createApp();\napp.use(Toast);\n</code></pre><h2>代码示例</h2><pre><code class="language-html">&lt;nut-toast :msg=&quot;page.state.msg&quot; v-model:visible=&quot;page.state.show&quot; :type=&quot;page.state.type&quot; @closed=&quot;page.methods.onClosed&quot; :cover=&quot;page.state.cover&quot; /&gt;\n&lt;nut-cell title=&quot;Text 文字提示&quot; is-link @click=&quot;page.methods.openToast(&#39;text&#39;,&#39;网络失败，请稍后再试~&#39;)&quot;&gt;&lt;/nut-cell&gt;\n&lt;nut-cell title=&quot;Success 成功提示&quot; is-link @click=&quot;page.methods.openToast(&#39;success&#39;,&#39;成功提示&#39;)&quot;&gt;&lt;/nut-cell&gt;\n&lt;nut-cell title=&quot;Error 失败提示&quot; is-link @click=&quot;page.methods.openToast(&#39;fail&#39;,&#39;失败提示&#39;)&quot;&gt;&lt;/nut-cell&gt;\n&lt;nut-cell title=&quot;Warning 警告提示&quot; is-link @click=&quot;page.methods.openToast(&#39;warn&#39;,&#39;警告提示&#39;)&quot;&gt;&lt;/nut-cell&gt;\n&lt;nut-cell title=&quot;Loading 加载提示&quot; is-link @click=&quot;page.methods.openToast(&#39;loading&#39;,&#39;加载中&#39;)&quot;&gt;&lt;/nut-cell&gt;\n&lt;nut-cell title=&quot;Loading 带白色背景遮罩&quot; is-link @click=&quot;page.methods.openToast(&#39;loading&#39;,&#39;加载中&#39;,true)&quot;&gt;&lt;/nut-cell&gt;\n</code></pre><pre><code class="language-javascript">import { reactive } from &#39;vue&#39;;\nexport default {\n  setup() {\n    const page = {\n      state: reactive({\n        msg: &#39;toast&#39;,\n        type: &#39;text&#39;,\n        show: false,\n        cover: false\n      }),\n      methods: {\n        openToast: (type: string, msg: string, cover: boolean = false) =&gt; {\n          page.state.show = true;\n          page.state.msg = msg;\n          page.state.type = type;\n          page.state.cover = cover;\n        },\n        onClosed: () =&gt; console.log(&#39;closed&#39;)\n      }\n    };\n    return {\n      page\n    };\n  }\n};\n</code></pre><h3>基本用法</h3><h3>API</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>Toast.text</td><td>展示文字提示</td><td>options/message</td><td>toast 实例</td></tr><tr><td>Toast.success</td><td>展示成功提示</td><td>options/message</td><td>toast 实例</td></tr><tr><td>Toast.fail</td><td>展示失败提示</td><td>options/message</td><td>toast 实例</td></tr><tr><td>Toast.warn</td><td>展示警告提示</td><td>options/message</td><td>toast 实例</td></tr><tr><td>Toast.hide</td><td>关闭提示</td><td>force:boolean</td><td>void</td></tr><tr><td>Toast.loading</td><td>展示加载提示</td><td>options/message</td><td>toast 实例</td></tr></tbody></table><h2>Props</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>msg</td><td>消息文本内容,支持传入HTML</td><td>String/VNode</td><td>“”</td></tr><tr><td>duration</td><td>展示时长（毫秒）<br>值为 0 时，toast 不会自动消失（loading类型默认为0）</td><td>Number</td><td>2000</td></tr><tr><td>center</td><td>是否展示在页面中部（为false时展示在底部）</td><td>Boolean</td><td>true</td></tr><tr><td>bottom</td><td>距页面底部的距离（像素），center为false时生效</td><td>Number</td><td>30</td></tr><tr><td>text-align-center</td><td>多行文案是否居中</td><td>Boolean</td><td>true</td></tr><tr><td>bg-color</td><td>背景颜色（透明度）</td><td>String</td><td>“rgba(0, 0, 0, 0.8)”</td></tr><tr><td>custom-class</td><td>自定义类名</td><td>String</td><td>“”</td></tr><tr><td>icon</td><td>自定义图标，<strong>对应icon组件，支持图片链接</strong></td><td>String</td><td>“”</td></tr><tr><td>size</td><td>文案尺寸，<strong>small</strong>/<strong>base</strong>/<strong>large</strong>三选一</td><td>String</td><td>“base”</td></tr><tr><td>cover</td><td>是否显示遮罩层，loading类型默认显示</td><td>Boolean</td><td>loading类型true/其他类型false</td></tr><tr><td>cover-color</td><td>遮罩层颜色，默认透明</td><td>String</td><td>“rgba(0,0,0,0)”</td></tr><tr><td>loading-rotate</td><td>loading图标是否旋转，仅对loading类型生效</td><td>Boolean</td><td>true</td></tr><tr><td>on-close</td><td>关闭时触发的事件</td><td>function</td><td>null</td></tr><tr><td>close-on-click-overlay</td><td>是否在点击遮罩层后关闭提示</td><td>Boolean</td><td>false</td></tr><tr><td>toast-style</td><td>提示框style</td><td>object</td><td>{}</td></tr><tr><td>toast-class</td><td>提示框class</td><td>String</td><td>“”</td></tr></tbody></table>',14);t("default",{expose:[],setup:t=>(t,o)=>(e(),d("div",s,[n]))})}}}));
