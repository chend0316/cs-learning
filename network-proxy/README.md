# Shadowsocks
shadowsocks 服务端: https://wangchujiang.com/handbook/CentOS/%E6%90%AD%E5%BB%BAShadowsocks%E6%9C%8D%E5%8A%A1%E5%99%A8.html

`ssserver -c /vagrant/shadowsocks.json -d start`
`ssserver -d stop`

shadowsocks 客户端: https://wylu.me/posts/eed37a90/

# Nginx

## 编译
`./configure --help`，使用 `--with-xxx` 可以启用模块，使用 `--without-xxx` 可以禁用模块。

## 正向代理 forward proxy
nginx -c /vagrant/etc/nginx-forward-proxy.conf
nginx -s reload
nginx -s quit

curl --proxy localhost:8888 http://www.baidu.com
curl --proxy localhost:8888 https://www.baidu.com
curl --socks5 localhost:9999 http://www.baidu.com
curl --socks5 localhost:9999 https://www.baidu.com

参考资料
介绍了 Nginx 如何实现7层和4层隧道代理: https://developer.aliyun.com/article/706196
Nginx 7层隧道代理的实现: https://www.cnblogs.com/yanjieli/p/15229907.html
socks5 正向代理: https://cppdig.com/c/socks-proxy-server-based-on-nginx-stream-module-implementation
nginx 极简入门: https://github.com/dunwu/nginx-tutorial
http://tengine.taobao.org/book/
