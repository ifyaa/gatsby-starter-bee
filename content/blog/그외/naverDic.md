---
title: "네이버한자사전 선택"
date: 2019-1-3 16:21:13
category: "그외"
draft: true
---

한자를 선택하여 바로 네이버 한자사전으로 이동하는 방법

구글 오른쪽 마우스 클릭하면 바로 이동하는 방법입니다.

맥북에서 automator을 오픈
파일에서 신규
![](https://i.ibb.co/ts0xCdp/auto-01.png)
![](https://i.ibb.co/cbcvvZ6/auto-02.png)

![](https://i.ibb.co/VLm5jBV/auto-03.png)

```js
on run {input, parameters}
return "https://hanja.dict.naver.com/search?query=" & (input as string)
end run
```

![](https://i.ibb.co/ggRXPR1/auto-04.png)

![](https://i.ibb.co/Gc5YW0R/auto-05.png)
[한자사전](https://hanja.dict.naver.com/)
