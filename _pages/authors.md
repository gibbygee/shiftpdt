---
layout: page
title: Authors
permalink: /authors/
---

<div class="authors-list">
{% for author_page in site.authors %}
  {% assign author = site.data.authors[author_page.slug] %}
  <div class="authors-item">
    <p><strong>{{ author.name }}</strong></p>
    {% if author.bio %}
      <p>{{ author.bio }}</p>
      {% if author.website %}
        <p><a href="{{ author.website }}" target="_blank" rel="noopener">{{ author.website | remove: "https://" }}</a></p>
      {% endif %}
    {% endif %}
  </div>
{% endfor %}
</div>
