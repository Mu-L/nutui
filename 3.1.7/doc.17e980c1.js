import{e as a,o as t,G as n}from"./vendor.36d75c4a.js";const p={class:"markdown-body"},l=n(`<h1>Pagination \u5206\u9875</h1><h3>\u4ECB\u7ECD</h3><p>\u5F53\u6570\u636E\u91CF\u8F83\u591A\u65F6\uFF0C\u91C7\u7528\u5206\u9875\u7684\u5F62\u5F0F\u5206\u9694\u957F\u5217\u8868\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { Pagination,Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Pagination).use(Icon);
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><p>\u901A\u8FC7 v-model \u6765\u7ED1\u5B9A\u5F53\u524D\u9875\u7801\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentPage&quot;</span> <span class="hljs-attr">:total-items</span>=<span class="hljs-string">&quot;25&quot;</span> <span class="hljs-attr">:items-per-page</span>=<span class="hljs-string">&quot;5&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;pageChange&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">currentPage</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">currentPage1</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">currentPage2</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">currentPage3</span>: <span class="hljs-number">1</span>
    });
    <span class="hljs-keyword">const</span> pageChange = <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(value);
    };

    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      pageChange
    };
  }
};
</code></pre><h3>\u7B80\u5355\u6A21\u5F0F</h3><p>\b\u5C06 mode \u8BBE\u7F6E\u4E3A simple \u6765\u5207\u6362\u5230\u7B80\u5355\u6A21\u5F0F\uFF0C\u6B64\u65F6\u5206\u9875\u5668\u4E0D\u4F1A\u5C55\u793A\u5177\u4F53\u7684\u9875\u7801\u6309\u94AE\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentPage1&quot;</span> <span class="hljs-attr">:page-count</span>=<span class="hljs-string">&quot;12&quot;</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;simple&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;pageChange&quot;</span> /&gt;</span>
</code></pre><h3>\u663E\u793A\u7701\u7565\u53F7</h3><p>\u8BBE\u7F6E force-ellipses \u540E\u4F1A\u5C55\u793A\u7701\u7565\u53F7\u6309\u94AE\uFF0C\u70B9\u51FB\u540E\u53EF\u4EE5\u5FEB\u901F\u8DF3\u8F6C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentPage2&quot;</span> <span class="hljs-attr">:total-items</span>=<span class="hljs-string">&quot;125&quot;</span> <span class="hljs-attr">:show-page-size</span>=<span class="hljs-string">&quot;3&quot;</span>  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;pageChange&quot;</span>  <span class="hljs-attr">force-ellipses</span>/&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u6309\u94AE</h3><p>\u8BBE\u7F6E force-ellipses \u540E\u4F1A\u5C55\u793A\u7701\u7565\u53F7\u6309\u94AE\uFF0C\u70B9\u51FB\u540E\u53EF\u4EE5\u5FEB\u901F\u8DF3\u8F6C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentPage3&quot;</span> <span class="hljs-attr">:total-items</span>=<span class="hljs-string">&quot;500&quot;</span>  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;pageChange&quot;</span>  <span class="hljs-attr">:show-page-size</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">prev-text</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;left&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;10px&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">next-text</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;right&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;10px&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">page</span>=<span class="hljs-string">&quot;{ item }&quot;</span>&gt;</span>
        {{ item.number == 3 ? &#39;hot&#39; : item.text }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-pagination</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5F53\u524D\u9875\u7801</td><td>Number</td><td>1</td></tr><tr><td>mode</td><td>\u663E\u793A\u6A21\u5F0F,\u53EF\u9009\u503C\u4E3A simple</td><td>String</td><td>multi</td></tr><tr><td>prev-text</td><td>\u4E0A\u4E00\u9875\u6309\u94AE\u6587\u5B57</td><td>String</td><td>\u4E0A\u4E00\u9875</td></tr><tr><td>next-text</td><td>\u4E0B\u4E00\u9875\u6309\u94AE\u6587\u5B57</td><td>String</td><td>\u4E0B\u4E00\u9875</td></tr><tr><td>page-count</td><td>\u603B\u9875\u6570</td><td>String,Number</td><td>\u4F20\u5165/\u6839\u636E\u9875\u6570\u8BA1\u7B97</td></tr><tr><td>total-items</td><td>\u603B\u8BB0\u5F55\u6570</td><td>String,Number</td><td>0</td></tr><tr><td>items-per-page</td><td>\u6BCF\u9875\u8BB0\u5F55\u6570</td><td>String,Number</td><td>10</td></tr><tr><td>show-page-size</td><td>\u663E\u793A\u7684\u9875\u7801\u4E2A\u6570</td><td>String,Number</td><td>5</td></tr><tr><td>force-ellipses</td><td>\u662F\u5426\u663E\u793A\u7701\u7565\u53F7</td><td>Boolean</td><td>false</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9875\u7801\u6539\u53D8\u65F6\u89E6\u53D1</td><td>value</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>prev-text</td><td>\u81EA\u5B9A\u4E49\u4E0A\u4E00\u9875\u6309\u94AE\u5185\u5BB9</td><td>-</td></tr><tr><td>next-text</td><td>\u81EA\u5B9A\u4E49\u4E0B\u4E00\u9875\u6309\u94AE\u5185\u5BB9</td><td>-</td></tr><tr><td>page</td><td>\u81EA\u5B9A\u4E49\u9875\u7801</td><td>-</td></tr></tbody></table>`,25),e=[l],g={setup(r,{expose:s}){return s({frontmatter:{}}),(c,d)=>(t(),a("div",p,e))}};export{g as default};
