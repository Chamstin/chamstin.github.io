---
layout: home
class: 'custom-home'

hero:
  name: 岩倉玲音の小屋
  text: Welcome to CYBERIA。
  tagline: 欢迎来到Lain#cham的个人博客. <br>「どこにいたって、人は繋がっているのよ」.
  image:
    src: ../public/cyberia.JPG
    alt: CYBERIA
  actions:
    - theme: brand
      text: Get Started
      link: /example
    - theme: alt
      text: Visit Github
      link: https://github.com/Chamstin

---

<style scoped>
/* 使用特定页面类名限制样式作用范围 */
.custom-home .VPHero {
  display: grid !important;
  /* 可以调整这里的比例来改变左右两栏的宽度占比 */
  grid-template-columns: 0.8fr 1.2fr !important;
  gap: 2rem;
  padding: 0 24px;
}

.custom-home .VPHero .image {
  grid-column: 2;
  display: flex !important;
  justify-content: center;
  align-items: center;
  margin: 0 !important;
  /* 添加最小高度确保图片区域足够大 */
  min-height: 400px;
}

.custom-home .VPHero .image img {
  /* 设置最小宽度 */
  min-width: 400px;
  /* 设置最大宽度 */
  max-width: 800px;
  /* 保持宽高比 */
  height: auto;
  /* 可选：添加缩放效果 */
  transform: scale(1.2);
}

/* 保持移动端响应式布局 */
@media (max-width: 768px) {
  .custom-home .VPHero {
    grid-template-columns: 1fr !important;
  }
  
  .custom-home .VPHero .image img {
    /* 移动端下的图片大小 */
    min-width: 300px;
    max-width: 100%;
    transform: scale(1);
  }
}
</style>
