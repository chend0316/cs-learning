//
//  main.c
//  ASLDemo
//
//  Created by chendong on 2023/1/26.
//

#include <stdio.h>
#include <asl.h>

int main(int argc, const char * argv[]) {
    // insert code here...
    printf("Hello, World!\n");
    asl_object_t client = asl_open("asl_demo", "user", ASL_OPT_STDERR);
    asl_log(client, NULL, ASL_LEVEL_ERR, "this is msg from asl_demo %d", 111);
    asl_close(client);
    return 0;
}
