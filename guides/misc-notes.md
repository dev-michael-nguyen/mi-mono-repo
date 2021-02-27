# MISC NOTES

## Git Commands

```git
// list local/remote branches
git branch
git branch -r
git fetch -p

// delete local/remote branches
git branch -d <branch-name>
git push origin --delete <branch-name>

// git list all remote branches that already merged to develop order by oldest commit
git for-each-ref --sort=committerdate --format=%(committerdate)%09%(refname) --merged develop refs/remotes
```

## Case Naming Standard

```text
SomeSymbol; // pascal
someSymbol; // camel
some_symbol; // snake
some-symbol; // lisp
```
