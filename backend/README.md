# Skill Mapper Backend
## 各ディレクトリの役割
### common/models
モデルの作成を行っています。

1. Skillモデル
    - テーブル名 : モデル
    - id : Primary Key, Autoincrement, integer
    - skill : string(100)
    - color : string(100)

    skillはPythonなどの各技術が入る。
    colorはグラフに表示する際の色が入る。

2. UserSkillモデル
    - id : Primary Key, Autoincrement, integer
    - user_id : Foreign Key, intger
    - skill : string(100)
    - level : intger
    - color : string(100)
    - created_at : string(100)
    - updated_at : string(100)

3. Userモデル
    - id : Primary Key, Autoincrement, integer
    - name : string(100)
    - email : string(100)
    - password : string(100)
    - github : string(100)
    - qiita : string(100)
    - zenn : string(100)
    - create_at : string(100)
    - updated_at : string(100)

    GitHub、Qiita、Zennのアカウント名を保存できる（がここは実装できていない）。

UserモデルとUserSkillモデルは1対多の関係にある。

つまりUserは複数のUserSkillを持つ可能性がある。

### config
設定ファイルを置くためのディレクトリ

基本設定、ローカル設定、本番環境設定用のファイルがあるが、デプロイしていないため、基本設定にのみ記述している状態

### controllers
フロントエンドからリクエストに対する処理を記述

### db
sqliteファイルを置いているだけ

### interceptors
サインアップ、ログイン用の処理をここに記述している

### utils
JSONファイルから色をとり出したり、スキルレベルの計算アルゴリズムを記述している。
