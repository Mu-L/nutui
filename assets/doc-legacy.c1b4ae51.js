System.register(["./vendor-legacy.2cbae777.js"],(function(t){"use strict";var e,n,c;return{setters:[function(t){e=t.c,n=t.o,c=t.B}],execute:function(){const d={class:"markdown-body"},o=c('<h1>Switch组件</h1><h3>介绍</h3><p>用来打开或关闭选项。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Switch } from &#39;@nutui/nutui&#39;;\nconst app = createApp();\napp.use(Switch);\n\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><pre><code class="language-html">&lt;nut-switch v-model=&quot;checked&quot; /&gt;\n</code></pre><pre><code class="language-javascript">import { ref } from &#39;vue&#39;;\nexport default {\n  setup() {\n    const checked = ref(true);\n    return { checked };\n  },\n};\n</code></pre><h3>禁用状态</h3><pre><code class="language-html">&lt;nut-switch v-model=&quot;checked&quot; disable /&gt;\n</code></pre><h3>change事件</h3><pre><code class="language-html">&lt;nut-switch v-model=&quot;checked&quot; @change=&quot;change&quot; /&gt;\n</code></pre><pre><code class="language-javascript">import { ref, getCurrentInstance } from &#39;vue&#39;;\nexport default {\n  setup() {\n    let { proxy } = getCurrentInstance() as any;\n    const checked = ref(true);\n    const change = (value: boolean, event: Event) =&gt; {\n      proxy.$toast.text(`触发了change事件，开关状态：${value}`);\n    };\n    return {\n      checked,\n      change\n    };\n  }\n};\n</code></pre><h3>异步控制</h3><pre><code class="language-html">&lt;nut-switch :model-value=&quot;checkedAsync&quot; @change=&quot;changeAsync&quot; /&gt;\n</code></pre><pre><code class="language-javascript">import { ref, getCurrentInstance } from &#39;vue&#39;;\nexport default {\n  setup() {\n    let { proxy } = getCurrentInstance() as any;\n    const checkedAsync = ref(true);\n    const changeAsync = (value: boolean, event: Event) =&gt; {\n      proxy.$toast.text(`2秒后异步触发 ${value}`);\n      setTimeout(() =&gt; {\n        checkedAsync.value = value;\n      }, 2000);\n    };\n    \n    return {\n      checkedAsync,\n      changeAsync\n    };\n  }\n};\n</code></pre><h3>自定义颜色</h3><pre><code class="language-html">&lt;nut-switch v-model=&quot;checked&quot; @change=&quot;switchChange&quot; active-color=&quot;blue&quot; /&gt;\n</code></pre><h3>支持文字</h3><pre><code class="language-html">&lt;nut-switch v-model=&quot;checked&quot; @change=&quot;switchChange&quot; active-text=&quot;开&quot; inactive-text=&quot;关&quot; /&gt;\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>开关状态</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>disable</td><td>禁用状态</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>active-color</td><td>打开时的背景颜色</td><td>String</td><td><code>#fa2c19</code></td></tr><tr><td>inactive-color</td><td>关闭时的背景颜色</td><td>String</td><td><code>#ebebeb</code></td></tr><tr><td>active-text</td><td>打开时文字描述</td><td>String</td><td>-</td></tr><tr><td>inactive-text</td><td>关闭时文字描述</td><td>String</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>切换开关时触发</td><td>(value: boolean,event: Event)</td></tr></tbody></table>',26);t("default",{expose:[],setup:t=>(t,c)=>(n(),e("div",d,[o]))})}}}));
