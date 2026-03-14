---
layout: page
title: Authors
permalink: /authors/
hide_title: true
---

<nav class="post-nav" style="visibility: hidden;">
  <a href="{{ '/' | relative_url }}" class="post-nav-back">← Home</a>
  <span class="post-nav-sep">/</span>
  <span class="post-nav-back">Authors</span>
</nav>

<header class="page-header">
  <h1>{{ page.title }}</h1>
</header>

<table class="authors-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Bio</th>
      <th>Website</th>
    </tr>
  </thead>
  <tbody>
    {% for author_page in site.authors %}
      {% assign author = site.data.authors[author_page.slug] %}
      <tr>
        <td><a href="{{ author_page.url | relative_url }}">{{ author.name }}</a></td>
        <td>{% if author.bio %}{{ author.bio }}{% endif %}</td>
        <td>{% if author.website %}<a href="{{ author.website }}" target="_blank" rel="noopener">{{ author.website | remove: "https://" }}</a>{% endif %}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
