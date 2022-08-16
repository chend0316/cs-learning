wget http://nginx.org/download/nginx-1.22.0.tar.gz
tar -xzf nginx-1.22.0.tar.gz
cd nginx-1.22.0
patch -p1 < /vagrant/modules/ngx_http_proxy_connect_module-0.0.3/patch/proxy_connect_rewrite_102101.patch
./configure --prefix=/home/vagrant/nginx \
  --with-http_ssl_module \
  --with-http_stub_status_module \
  --with-http_realip_module \
  --with-threads \
  --with-stream \
  --with-stream_ssl_preread_module \
  --with-stream_ssl_module \
  --add-module=/vagrant/modules/ngx_stream_socks_module-main \
  --add-module=/vagrant/modules/ngx_http_proxy_connect_module-0.0.3
make
make install
echo 'export PATH="$PATH:/home/vagrant/nginx/sbin"' >> /home/vagrant/.bashrc
