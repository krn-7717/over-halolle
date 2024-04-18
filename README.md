# over-halolle

## Quick Start

1. コンテナを起動
    ```
    docker compose up --build
    ```

2. フロントエンドコンテナに入る
    ```
    docker compose exec frontend bash
    ```

3. ライブラリをインストール
    ```
    npm ci
    ```

3. webサーバを起動
    ```
    npm run dev
    ```

2. ローカルホストにアクセス

* バックエンド

    http://localhost:5000/

* フロントエンド

    http://localhost:5173/

## Usage

### Backend
#### Pythonパッケージのインストール
1. コンテナに入る
    ```
    docker compose exec backend bash
    ```
2. パッケージのインストール
    ```
    pip install パッケージ名
    ```
3. `./docker/python_context/requirements.txt`にインストールしたパッケージ名とバージョンを書く