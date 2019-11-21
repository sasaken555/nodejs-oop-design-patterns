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

既存のオブジェクトと全く同じインターフェイスを持ちながら、機能を拡張させる。

全く同じインターフェイスを持つため、Proxyを通したオブジェクトと既存のオブジェクトは入れ替え可能(=透過的)。

### Decorator

既存のオブジェクトの振る舞いを動的に拡張する。

既存のオブジェクトに新しい機能を与えるが、
既存のインターフェイス自体の振る舞いは変更せずに処理を委譲するケースが多い。
必要に応じて、Proxyパターンと同時に使って既存のインターフェイスをそのままに処理を変更可能。

### Adaptor

