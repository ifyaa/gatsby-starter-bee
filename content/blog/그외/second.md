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

또에러!!　netlify.com에 데이타가 올라가지 않는 불상사 2020-07-24
git를 clone하고 에러가 너무 많이나와서.. 재설치하려고 했고..그거도 아니다 싶어 애당초 
처음 코딩했던 1004로 가려다가 혹시나 싶어
date를 수정(삭제)했다 
별쏘를 다보여주다가..결국 다시 pull하고 다시 push해서 실행했다..시간이 더 소비되지 않아 다행
```js
      markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 280)
      html
      frontmatter {
        title
        date ####이게 문제라...이해가 안되...네
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTg3ODkyNTAsLTExODU4MjMwNTYsLTEyMT
I2OTE2NzJdfQ==
-->