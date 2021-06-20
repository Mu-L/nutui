System.register(["./vendor-legacy.20dce152.js"],(function(t){"use strict";var n,l,a,e,u;return{setters:[function(t){n=t.c,l=t.f,a=t.t,e=t.B,u=t.o}],execute:function(){const o={class:"markdown-body"},g=e('<h1>Tab 选项卡</h1><p>常用于平级区域大块内容的的收纳和展现，支持内嵌标签形式和渲染循环数据形式。</p><h2>基础样式</h2><pre><code class="language-html">&lt;nut-tab&gt;\n  &lt;nut-tab-panel tab-title=&quot;全部&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签全部内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;待付款&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签待付款内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;待收获&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签待收获内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;已完成&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签已完成内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n&lt;/nut-tab&gt;\n</code></pre><h2>默认显示tab：</h2><p>defaultIndex设置默认显示tab switchTab监听切换tab返回事件</p><pre><code class="language-html">&lt;nut-tab  :defaultIndex=&quot;1&quot; @switchTab=&quot;switchTab&quot;&gt;\n  &lt;nut-tab-panel tab-title=&quot;全部&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签全部内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;待付款&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签待付款内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;待收获&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签待收获内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;已完成&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签已完成内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n&lt;/nut-tab&gt;\n&lt;script lang=&quot;ts&quot;&gt;\nimport { createComponent } from &#39;../../utils/create&#39;;\nconst { createDemo } = createComponent(&#39;tab&#39;);\nexport default createDemo({\n  setup() {\n    function switchTab(activeInddex:number,event:MouseEvent){\n      console.log(activeInddex,event);\n    }\n    return {\n      switchTab\n    };\n  }\n});\n&lt;/script&gt;\n</code></pre><h2>animatedTime 开启切换标签内容时的转场动画时间</h2><pre><code class="language-html">&lt;nut-tab :animatedTime=&quot;500&quot;&gt;\n  &lt;nut-tab-panel tab-title=&quot;全部&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签全部内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;待付款&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签待付款内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;待收获&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签待收获内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;已完成&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签已完成内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n&lt;/nut-tab&gt;\n</code></pre><h2>禁止tab内容滑动</h2><pre><code class="language-html">&lt;nut-tab :no-swiping=&quot;true&quot;&gt;\n  &lt;nut-tab-panel tab-title=&quot;全部&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签全部内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;待付款&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签待付款内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;待收获&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签待收获内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;已完成&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签已完成内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n&lt;/nut-tab&gt;\n</code></pre><h2>标签数量超过 5 个时，标签栏可以在水平方向上滚动</h2><p>切换时会自动将当前标签居中。</p><pre><code class="language-html">&lt;nut-tab :animatedTime=&quot;500&quot;&gt;\n  &lt;nut-tab-panel tab-title=&quot;全部&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签全部内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;待付款&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签待付款内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;待收获&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签待收获内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;已完成&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签已完成内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;已取消&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签已取消内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;待评价&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签待评价内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n&lt;/nut-tab&gt;\n</code></pre><h2>设置slot:header可以自定义标签</h2><pre><code class="language-html">&lt;nut-tab&gt;\n  &lt;nut-tab-panel tab-title=&quot;全部&quot;&gt;\n    &lt;template v-slot:header&gt;&lt;nut-icon name=&quot;dongdong&quot;&gt;&lt;/nut-icon&gt;&lt;/template&gt;\n    &lt;p class=&quot;content&quot;&gt;这里是页签全部内容&lt;/p&gt;\n  &lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;待付款&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签待付款内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;待收获&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签待收获内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;已完成&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签已完成内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;已取消&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签已取消内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;待评价&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签待评价内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n&lt;/nut-tab&gt;\n</code></pre><h2>左右tab布局</h2><pre><code class="language-html">&lt;nut-tab direction=&quot;vertical&quot; :animatedTime=&quot;500&quot; :defaultIndex=&quot;2&quot;&gt;\n  &lt;nut-tab-panel tab-title=&quot;页签一&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签一内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;页签二&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签二内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;页签三&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签三内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;页签四&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签四内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;页签五&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签五内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;页签六&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签六内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n  &lt;nut-tab-panel tab-title=&quot;页签七&quot;&gt;&lt;p class=&quot;content&quot;&gt;这里是页签七内容&lt;/p&gt;&lt;/nut-tab-panel&gt;\n&lt;/nut-tab&gt;\n</code></pre><h2>异步操作</h2>',19),p={class:"language-html"},b=e("<h3>Prop</h3><h3>nut-tab</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>direction</td><td>页签栏的分布，可选值 horizontal/vertical</td><td>String</td><td>horizontal</td></tr><tr><td>default-index</td><td>默认选中的页签栏</td><td>Number</td><td>0</td></tr><tr><td>animated-time</td><td>开启切换标签内容时的转场动画时间</td><td>Number</td><td>0</td></tr><tr><td>no-swiping</td><td>禁止tab内容滑动</td><td>Boolean</td><td>false</td></tr></tbody></table><h3>nut-tab-panel</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>tab-title</td><td>页签的标题</td><td>String</td><td>‘’</td></tr><tr><td>slot:header</td><td>页签title的自定义slot</td><td>vnode</td><td>–</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>switch-tab</td><td>切换页签时触发事件</td><td>点击的索引值和触发元素</td></tr></tbody></table>",7);t("default",{expose:[],setup:t=>(t,e)=>(u(),n("div",o,[g,l("pre",null,[l("code",p,'<nut-tab :animatedTime="500" v-if="editList.length>0">\n    <nut-tab-panel :tab-title="item.title" v-for="(item,index) in editList" :key="index">\n      <p class="content">这里是页签'+a(t.index)+"内容</p>\n    </nut-tab-panel>\n</nut-tab>\n<nut-button type=\"primary\" @click=\"changeList\">改变数据</nut-button>\n</div>\n<script lang=\"ts\">\nimport { ref , reactive,toRefs } from \"vue\";\nimport { createComponent } from '../../utils/create';\nconst { createDemo } = createComponent('tab');\nexport default createDemo({\n  setup() {\n    const resData = reactive({\n      editList:[\n        {\n          title:'标签一'\n        },\n        {\n          title:'标签二'\n        }\n      ]\n    });\n    function changeList(){\n      resData.editList.push({\n        title:'标签'+resData.editList.length\n      })\n    }\n    return {\n      ...toRefs(resData),\n      changeList\n    };\n  }\n});\n<\/script>\n",1)]),b]))})}}}));
