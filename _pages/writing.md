---
layout: page
title: Writing
permalink: /writing/
---

{% assign posts = site.posts | sort: 'date' | reverse %}
<div class="post-feed">
{% for post in posts %}
  {% assign author = site.data.authors[post.author] %}
  <article class="post-card post-card--compact">
    <div class="post-card-meta">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
      {% if author %}
        <span class="meta-sep">·</span>
        <a href="{{ author.url | relative_url }}" class="post-card-author">{{ author.name }}</a>
      {% endif %}
    </div>
    <h2 class="post-card-title">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h2>
  </article>
{% endfor %}
</div>
