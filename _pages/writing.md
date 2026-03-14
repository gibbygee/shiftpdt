---
layout: page
title: All Posts
permalink: /writing/
hide_title: true
---

<nav class="post-nav">
  <a href="{{ '/' | relative_url }}" class="post-nav-back">← Home</a>
  <span class="post-nav-sep">/</span>
  <span class="post-nav-back">All posts</span>
</nav>

<header class="page-header">
  <h1>{{ page.title }}</h1>
</header>

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
