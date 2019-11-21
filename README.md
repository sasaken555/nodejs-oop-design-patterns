# Apply OOP design patterns to Node.js

## About

Learn patterns for OOP design patterns.

This repository references the book "Node.js Design Pattern". 
For more information, check the link below.

* [Node.jsデザインパターン 第2版](https://www.oreilly.co.jp/books/9784873118734/)

## Design Patterns

Patterns are listed below.

* Factory
* Revealing constructor
* Proxy
* Decorator
* Adapter
* Strategy
* State
* Template
* Middleware
* Command

## Usage

```bash
$ yarn install
$ node patterns/{design-pattern}/{file-name}
```

## Detail

### Proxy

既存のオブジェクトと全く同じインターフェイスを持ちながら機能を拡張させる。

全く同じインターフェイスを持つため、Proxyを通したオブジェクトと既存のオブジェクトは入れ替え可能(=透過的)。

共通の関心事(Logging, Transaction, etc...)の実装でよく利用される。

### Decorator

既存のオブジェクトにインターフェイス+処理を追加して拡張する。

Proxyパターンとの違いは、
既存のインターフェイス自体の振る舞いは変更せずに処理を委譲すること。

また、必要に応じてProxyパターンと同時に使用することで、
既存のインターフェイスをそのままに処理を変更可能。

### Adaptor

既存のオブジェクトとは全く異なるインターフェイスを持ちながら、
既存のオブジェクトの処理を呼び出す。
