#include <stdlib.h>
#include <string.h>

typedef char *String;
typedef struct tree *T_tree;

struct tree {
  T_tree left;
  String key;
  T_tree right;
};

T_tree Tree(T_tree l, String k, T_tree r) {
  T_tree t = malloc(sizeof(*t));
  t->left = l; t->right = r; t->key = k;
  return t;
}

// 非函数式
T_tree insert(String key, T_tree t) {
  if (t == NULL) {
    return Tree(NULL, key, NULL);
  } else if (strcmp(key, t->key) < 0) {
    t->left = insert(key, t->left);
  } else if (strcmp(key, t->key)) {
    t->right = insert(key, t->right);
  }
  return t;
}

bool member(String key, T_tree t) {
  if (t == NULL) return false;
  if (strcmp(key, t->key) < 0) {
    return member(key, t->left);
  } else if (strcmp(key, t->key) > 0) {
    return member(key, t->right);
  } else {
    return true;
  }
}

int main() {
  T_tree t = NULL;
  t = insert("t", t);
  insert("s", t);
  insert("p", t);
  insert("i", t);
  insert("p", t);
  insert("f", t);
  insert("b", t);
  insert("s", t);
  insert("t", t);
  return 0;
}
