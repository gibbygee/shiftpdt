---
layout: page
title: All Posts
permalink: /writing/
---

{% assign posts = site.posts | sort: 'date' | reverse %}
<ul class="post-list">
{% for post in posts %}
  {% assign author = site.data.authors[post.author] %}
  <li class="post-list-item">
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="post-list-meta">{{ post.date | date: "%b %d, %Y" }}{% if author %} · {{ author.name }}{% endif %}</span>
  </li>
{% endfor %}
</ul>
