#環境立ち上げ時作業

```
ホスト/ip　・・・　n.local/127.100.100.50
```

### hostsファイルにホスト名を設定(例)
```bash
127.100.100.50	n.local
```

### .envをコピー
```bash
cp .env.sample .env
```

### .envファイルにホストを設定(例)
```dotenv
WEB_IP=127.100.100.50
HTTP_CONF_SERVER_NAME=n.local
```

### コマンドでSSL証明書作成
```bash
bash docker_config/web/create_ssl_files.sh
```
### docker環境立ち上げ
```bash
bash compose_up.sh
```

### コンテナに接続
```bash

#インストール
cd next_front
npm install

#実行
npm run start

###初回作成時
#タイプスクリプトのテンプレートでnextアップを立ち上げ
npx create-next-app --example with-typescript next_front
#muiのテンプレートを取りこみ
https://mui.com/store/items/devias-kit/
```
