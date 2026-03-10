# shiftpdt

A community blog about building software products — the strategy, the craft, the mess, and the occasional epiphany.

**Live site:** https://gibbygee.github.io/shiftpdt

---

## Contributing

All submissions welcome. Open a pull request with your post and author files.

See `templates/` for ready-to-use starter files.

### 1. Add your author profile

**`_authors/your-name.md`** — creates your public author page:

```yaml
---
layout: author
name: Your Name
bio: "One sentence about you."
website: "https://yoursite.com"
---
```

**`_data/authors.yml`** — add an entry so your name appears on posts and the authors list:

```yaml
your-name:
  name: Your Name
  bio: "One sentence about you."
  website: "https://yoursite.com"
```

The key (`your-name`) must match your author filename (without `.md`) and the `author` field in your posts.

### 2. Add your post

Create `_posts/YYYY-MM-DD-your-title.md`:

```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
author: your-name
---

Your content here.
```

### 3. Open a PR

Push your branch to GitHub and open a pull request at https://github.com/gibbygee/shiftpdt.

---

## Local development

**Requirements:** Ruby 3+, Bundler

```bash
git clone https://github.com/gibbygee/shiftpdt.git
cd shiftpdt
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000/shiftpdt
