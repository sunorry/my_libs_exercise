_.template(templateString, [data], [settings])
//1
var compiled = _.template("hello: <%= name %>");
compiled({name: 'sunorry'});

//2 <%%>分别包住 function 的左边和右边，中间数据再包，标签不用包
var list = "<% _.each(people, function(name){ %> <li><%= name %></li> <%});%>";
_.template(list, {people: [1,2,3,4,5,6,7]});

//3 如果里面有需要转移的，把 = 换成 -
var template = _.template("<b><%- value %></b>");
_.template({value:'<script>'});



var context = {
    people: [
      { firstName: "Yehuda", lastName: "Katz" },
      { firstName: "Carl", lastName: "Lerche" },
      { firstName: "Alan", lastName: "Johnson" }
    ]
  };
//把空格去掉可运行成功
var list = "<ul>
              <% _.each(people, function(name){ %>
                <li><%= name.firstName %> <%= name.lastName %> </li>
              <%});%>
            </ul>";
var template = _.template(list);
template({people: context.people})