---
title: "코드에러 해결"
date: 2020-07-21
category: "그외"
draft: false
---

코드가 문제발생
netlify에 업데이터 에러가 발생했고 clone로 컴에 설치한후 thumbnail를 실행불가로 처리한 후 push하지 제대로 실행되었다..왜 이런 문제가 발생했는지는 모르겠다 ...이미지 문제같은데...

```js
      html
      frontmatter {
        title
        // date(formatString: "MMMM DD, YYYY")
        # thumbnail {
        #   childImageSharp {
        #     fixed(width: 800) {
        #       src
        #     }
        #   }
        # }
      }
    }
  }
```

![](https://i.ibb.co/zZ1sTbz/image.png)

또에러!!　netlify.com에 데이타가 올라가지 않는 불상사

```
markdownRemark(fields: { slug: { eq: $slug } }) {

id

excerpt(pruneLength: 280)

html

frontmatter {

title

date
``
---

Second Post

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTI4NDEyODE3MywtMTE4NTgyMzA1NiwtMT
IxMjY5MTY3Ml19
-->