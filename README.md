# react-native-signature

[![xcode config](https://raw.githubusercontent.com/CLuRoad/react-native-signature/master/demo.gif)](#demo)


## react-native-signature 简单介绍
这是一个基于H5来编写的签名组件，同时支持iOS和Android，签名或者涂画完毕后，提供了保存和取消两个点击事件。

-------
## 如何使用react-native-signature


1.安装react-native-signature

`yarn add react-native-signature`

react-native-signature  中加入了横屏组件`react-native-orientation`,在签名的过程中会自动横屏，签名完毕可以变成竖屏。

2.导入文件
```
import { StackNavigator, TabNavigator } from "react-navigation";
import SignatureView from "react-native-signature";
```
3.使用代码,点击“开始签名按钮”使用"react-navigation"跳转页面。 callback回调保存的图片，然后显示在当前页面使用

```
nav.navigate("SignatureView", {
      title: "签字",
      callback: (data) => {
        this.setState({
          signature: data
        });
      }
    });
  }
```

## 如何运行demo
1.先下载demo https://github.com/CLuRoad/react-native-signature.git

2.`npm install`

3.`react-native link react-native-orientation`

有任何问题欢迎指正，觉得对自己有帮助可以给星支持😁
