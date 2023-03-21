### local


```
sam build
sam local invoke
```

### deploy

* ECRを作成
* template.yamlのImageUriに設定する

```
sam build
sam deploy --guided
```