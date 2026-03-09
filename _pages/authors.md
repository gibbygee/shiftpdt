---
layout: page
title: Authors
permalink: /authors/
---

<div class="authors-list">
{% for author_page in site.authors %}
  {% assign author = site.data.authors[author_page.slug] %}
  <div class="authors-item">
    <a href="{{ author_page.url | relative_url }}">{{ author_page.name }}</a>
    {% if author_page.bio %}
      <p>{{ author_page.bio }}</p>
    {% endif %}
  </div>
{% endfor %}
</div>
