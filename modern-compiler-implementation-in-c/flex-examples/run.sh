flex -o wc1.c wc1.l
gcc wc1.c -o wc1
echo "hello world" | ./wc1
