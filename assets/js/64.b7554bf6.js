(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{392:function(t,_,v){"use strict";v.r(_);var r=v(4),e=Object(r.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"常见的http状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常见的http状态码"}},[t._v("#")]),t._v(" 常见的http状态码")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th"),t._v(" "),_("th",[t._v("类别")]),t._v(" "),_("th",[t._v("原因")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1XX")]),t._v(" "),_("td",[t._v("information（信息性状态码）")]),t._v(" "),_("td",[t._v("接受的请求正在处理")])]),t._v(" "),_("tr",[_("td",[t._v("2XX")]),t._v(" "),_("td",[t._v("success（成功状态码）")]),t._v(" "),_("td",[t._v("请求正常处理成功")])]),t._v(" "),_("tr",[_("td",[t._v("3XX")]),t._v(" "),_("td",[t._v("redirection（重定向）")]),t._v(" "),_("td",[t._v("需要附加操作以完成请求")])]),t._v(" "),_("tr",[_("td",[t._v("4XX")]),t._v(" "),_("td",[t._v("client error（客户端错误状态码）")]),t._v(" "),_("td",[t._v("服务器无法处理请求")])]),t._v(" "),_("tr",[_("td",[t._v("5XX")]),t._v(" "),_("td",[t._v("server error（服务器错误状态码）")]),t._v(" "),_("td",[t._v("服务器处理请求错误")])])])]),t._v(" "),_("h2",{attrs:{id:"_2xx成功"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2xx成功"}},[t._v("#")]),t._v(" 2xx成功")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("200 ok")])]),t._v(" "),_("p",[t._v("从客户端发起的请求被服务器正常处理")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("201 No Content")]),t._v(" "),_("strong",[t._v("（空内容）")])]),t._v(" "),_("p",[t._v("该状态码表示服务器正常处理请求，但在返回的响应体中不含实体的主体部分。一般在只需要客户端向服务器发送请求，而不需要对客户端发送新信息的内容的情况下使用")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("206 Partical Content")]),t._v(" "),_("strong",[t._v("（范围请求）")])])])]),t._v(" "),_("p",[t._v("​\t\t该状态码表示客户端发起范围请求，服务器成功执行了这部分的GET请求。响应报文中包含"),_("strong",[t._v("Content-Range")]),t._v("指定范围的内容")]),t._v(" "),_("h2",{attrs:{id:"_3xx-重定向"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3xx-重定向"}},[t._v("#")]),t._v(" 3XX 重定向")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("301 Moved Permanently（永久性重定向）")])]),t._v(" "),_("p",[t._v("表示请求的资源已被分配了新的URI，如果已经把资源保存书签了，则应该按照Location首部字段提示的URI重新保存")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("302Found 临时重定向")])]),t._v(" "),_("p",[t._v("表示请求的资源已分配了新的URI，但是不是永久性的")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("303 See Other")])]),t._v(" "),_("p",[t._v("该状态码表示请求对应的资源存在着另一个URI，应使用GET方法定向获取请求的资源")]),t._v(" "),_("p",[t._v("303和302有着相同的功能，但303状态码明确表示客户端应当采用GET方法获取资源。例如使用POST方法发起请求，执行后的处理结果是希望客户端使用GET方法重定向到另一个URI上")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("304 Not Modified")])]),t._v(" "),_("p",[t._v("该状态码表示客户端发送"),_("mark",[t._v("附带条件")]),t._v("的请求时，服务器允许请求访问资源，但未满足条件的情况。")]),t._v(" "),_("p",[t._v("304状态码返回时，不含任何响应的主体部分，304虽然被划分在3XX类别中，但和重定向没有任何关系。")]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),_("p",[t._v("附带条件的请求是指采用GET方法的请求报文中包含If-Match，If-Modified-Since，If-None-Match，If-Range，If-Unmodified-Since中任一首部")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("307 Temporary Redirect（临时重定向）")]),t._v(" 该状态码与302有着相同的含义，尽管302标准禁止POST变成GET，但实际使用时大家并不遵守。307会遵守浏览器标准，不会从POST变为GET")])])]),t._v(" "),_("h2",{attrs:{id:"_4xx-客户端错误"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4xx-客户端错误"}},[t._v("#")]),t._v(" 4xx 客户端错误")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("400 Bad Request")]),t._v(" 表示请求报文中存在语法错误")]),t._v(" "),_("li",[_("strong",[t._v("401 unauthorized")]),t._v(" 该状态表示发送的请求需要HTTP认证")]),t._v(" "),_("li",[_("strong",[t._v("403 Forbidden")]),t._v(" 表示请求的资源被服务器拒绝了，通常是没有访问权限")]),t._v(" "),_("li",[_("strong",[t._v("404 Not Found")]),t._v(" 表示服务器无法找到请求的资源")])]),t._v(" "),_("h2",{attrs:{id:"_5xx-服务器错误"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5xx-服务器错误"}},[t._v("#")]),t._v(" 5xx 服务器错误")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("500 Server Error")])]),t._v(" "),_("p",[t._v("服务器内部错误，也可能是web应用存在的bug或者某些临时故障")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("503 Server Unavailable")])]),t._v(" "),_("p",[t._v("表示服务器暂时处于超负载或者正在停机维护，现在无法处理请求。如果事先得知恢复正常服务的时间，最好写入Retry-After字段在返回给客户端")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);