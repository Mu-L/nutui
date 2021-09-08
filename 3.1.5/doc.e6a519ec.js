import{e as s,o as a,G as n}from"./vendor.3379a4e5.js";const l={class:"markdown-body"},t=[n('<h1>Checkbox 复选按钮</h1><h3>介绍</h3><p>多选按钮用于选择。</p><h3>安装</h3><pre><code class="language-ts"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">// vue</span>\n<span class="hljs-keyword">import</span> { Checkbox,CheckboxGroup,Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">// taro</span>\n<span class="hljs-keyword">import</span> { Checkbox,CheckboxGroup,Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Checkbox);\napp.use(CheckboxGroup);\napp.use(Icon);\n</code></pre><h2>基本用法</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox1&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;复选框&quot;</span>&gt;</span>复选框<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox2&quot;</span> <span class="hljs-attr">text-position</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>复选框<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>\n</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">return</span> {\n    <span class="hljs-attr">checkbox1</span>: <span class="hljs-literal">false</span>,\n    <span class="hljs-attr">checkbox2</span>: <span class="hljs-literal">false</span>,\n  };\n}\n</code></pre><h2>禁用状态</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox3&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>未选时禁用状态<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox4&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>选中时禁用状态<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>\n</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">return</span> {\n    <span class="hljs-attr">checkbox3</span>: <span class="hljs-literal">false</span>,\n    <span class="hljs-attr">checkbox4</span>: <span class="hljs-literal">true</span>,\n  };\n}\n</code></pre><h2>自定义尺寸</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox5&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;25&quot;</span>&gt;</span>自定义尺寸25<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox6&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;10&quot;</span>&gt;</span>自定义尺寸10<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>\n</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">return</span> {\n    <span class="hljs-attr">checkbox5</span>: <span class="hljs-literal">true</span>,\n    <span class="hljs-attr">checkbox6</span>: <span class="hljs-literal">false</span>,\n  };\n}\n\n</code></pre><h2>自定义图标</h2><p>这里建议同时设置 <code>icon-name</code> 和 <code>icon-active-name</code> 属性</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox7&quot;</span> <span class="hljs-attr">icon-name</span>=<span class="hljs-string">&quot;checklist&quot;</span> <span class="hljs-attr">icon-active-name</span>=<span class="hljs-string">&quot;checklist&quot;</span>&gt;</span>自定义图标<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>\n</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">return</span> {\n    <span class="hljs-attr">checkbox7</span>: <span class="hljs-literal">true</span>,\n  };\n}\n\n</code></pre><h2>change事件</h2><p>值发生变化时，将触发change事件</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox8&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;changeBox3&quot;</span>&gt;</span>change复选框<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>\n</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">const</span> checkbox = ref(<span class="hljs-literal">false</span>);\n  <span class="hljs-keyword">const</span> changeBox3= <span class="hljs-function">(<span class="hljs-params">checked: <span class="hljs-built_in">boolean</span>, label: <span class="hljs-built_in">string</span></span>) =&gt;</span> {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;change事件触发&#39;</span> + checked, label);\n\t}  \n  <span class="hljs-keyword">return</span> {\n    checkbox,\n    changeBox3\n  };\n}\n</code></pre><h2>checkboxGroup使用</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkboxgroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkboxgroup1&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox9&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>组合复选框<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox10&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>组合复选框<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox11&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>组合复选框<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox12&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;4&quot;</span>&gt;</span>组合复选框<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkboxgroup</span>&gt;</span>\n</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">return</span> {\n    <span class="hljs-attr">checkbox9</span>: <span class="hljs-literal">false</span>,\n    <span class="hljs-attr">checkbox10</span>: <span class="hljs-literal">false</span>,\n    <span class="hljs-attr">checkbox11</span>: <span class="hljs-literal">false</span>,\n    <span class="hljs-attr">checkbox12</span>: <span class="hljs-literal">false</span>,\n    <span class="hljs-attr">checkboxgroup1</span>: [<span class="hljs-string">&#39;2&#39;</span>, <span class="hljs-string">&#39;3&#39;</span>],\n  };\n}\n</code></pre><h2>checkboxGroup 全选/取消</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkboxgroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkboxgroup3&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;group&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;changeBox4&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox15&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>组合复选框<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox16&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>组合复选框<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkboxgroup</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;btn&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleAll(true)&quot;</span>&gt;</span>全选<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleAll(false)&quot;</span>&gt;</span>取消<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n  <span class="hljs-keyword">const</span> group = ref(<span class="hljs-literal">null</span>);\n  <span class="hljs-keyword">const</span> changeBox4 = <span class="hljs-function">(<span class="hljs-params">label: <span class="hljs-built_in">any</span>[]</span>) =&gt;</span> {\n    Toast.text(<span class="hljs-string">`<span class="hljs-subst">${label.length ? <span class="hljs-string">&#39;全选&#39;</span> : <span class="hljs-string">&#39;取消全选&#39;</span>}</span>`</span>);\n  };\n\n  <span class="hljs-keyword">const</span> toggleAll = <span class="hljs-function">(<span class="hljs-params">f: <span class="hljs-built_in">boolean</span></span>) =&gt;</span> {\n    (group.value <span class="hljs-keyword">as</span> <span class="hljs-built_in">any</span>).toggleAll(f);\n  };\n  <span class="hljs-keyword">return</span> {\n    <span class="hljs-attr">checkbox15</span>: <span class="hljs-literal">false</span>,\n    <span class="hljs-attr">checkbox16</span>: <span class="hljs-literal">false</span>,\n    <span class="hljs-attr">changeBox4</span>: <span class="hljs-literal">false</span>,\n    <span class="hljs-attr">checkbox12</span>: <span class="hljs-literal">false</span>,\n    <span class="hljs-attr">checkboxgroup3</span>: [<span class="hljs-string">&#39;2&#39;</span>],\n    group,\n    changeBox4,\n    toggleAll\n  };\n}\n</code></pre><h2>Checkbox</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>是否处于选中状态</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用选择</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>text-position</td><td>文本所在的位置，可选值：<code>left</code>,<code>right</code></td><td>String</td><td><code>right</code></td></tr><tr><td>icon-size</td><td><a href="#/icon">图标尺寸</a></td><td>String、Number</td><td><code>18</code></td></tr><tr><td>icon-name</td><td><a href="#/icon">图标名称</a>，选中前(建议和<code>icon-active-name</code>一起修改)</td><td>String</td><td><code>&#39;check-normal&#39;</code></td></tr><tr><td>icon-active-name</td><td><a href="#/icon">图标名称</a>，选中后(建议和<code>icon-name</code>一起修改)</td><td>String</td><td><code>&#39;checked&#39;</code></td></tr><tr><td>label</td><td>复选框的文本内容</td><td>String</td><td>-</td></tr></tbody></table><h2>CheckboxGroup</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前选中项的标识符，和 <code>label</code> 相对应</td><td>String</td><td>-</td></tr><tr><td>disabled</td><td>是否禁用选择,将用于其下的全部复选框</td><td>Boolean</td><td><code>false</code></td></tr></tbody></table><h2>Checkbox Event</h2><table><thead><tr><th>字段</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>值变化时触发</td><td>(state, label),<code>state</code>代表当前状态，<code>label</code>表示当前选中的值</td></tr></tbody></table><h2>CheckboxGroup Event</h2><table><thead><tr><th>字段</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>值变化时触发</td><td>label,<code>label</code>返回一个数组，表示当前选中项的集合</td></tr></tbody></table>',36)],p={setup:(n,{expose:p})=>(p({frontmatter:{}}),(n,p)=>(a(),s("div",l,t)))};export{p as default};
