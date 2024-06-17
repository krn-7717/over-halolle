<div align="center">
    <h1 align="center">Skill Mapper</h1>
    <p>
        <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=typescript,tailwind,react,nodejs,python,flask,sqlite,docker&theme=light" />
        </a>
    </p>
    <img width="800" alt="スクリーンショット 2024-04-28 13 13 07" src="https://github.com/krn-7717/over-halolle/assets/103473179/3ec5b069-c08e-4e33-ab2a-7a0789b19d59">
</div>


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

## Overview
エンジニアの各スキル（例: Python, Dockerなど）を自信度、理解度（この2つは0から100の整数値）などを入力し独自のアルゴリズムでスキルレベルを計算します。


計算したレベルを元にグラフに表示する。


本アプリにはサインアップ機能、ログイン機能もあります。