<ul>
  <li>Ajax</li>
</ul>

# Ajax #

ajax 返回的东西都是<b>字符串</b>形式，原生 JS 可以用 <code>JSON.parse()</code> 来把字符串转换成 JSON 格式（不要用 eval），jQuery 的话直接 dataType: json 就可以了。

HTTP请求方法

GET：会把数据放到 URL 后面(通过网址，网址容量 4k~10k)；有缓存

POST: 通过 http content；容量：2G；无缓存