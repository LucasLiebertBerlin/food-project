# 🇰🇷 Country Food Switcher (Tailwind + Vanilla JS)

## 📦 Project Structure

```
BEWERBUNGS-PROJEKT/
├── assets/
│   └── images/
│       ├── beef.avif               # Chinese food
│       ├── charcuteriboard.avif    # Thai food
│       ├── ramen.avif              # Japanese food
│       └── sushi.avif              # Korean food
├── index.html                      # Main HTML entry point
├── script.js                       # JavaScript logic (country switcher)
```

---

## 🎯 Purpose

This project was built as part of a **frontend developer application**. It showcases a clean, responsive, animated UI where users can switch between food cultures from different countries.

Built with:

* ✅ Tailwind CSS (via CDN)
* ✅ Vanilla JavaScript (no framework)
* ✅ Full accessibility and semantic HTML
* ✅ Lazy image loading via preloading
* ✅ Smooth transitions between countries

---

## 🖼 Features

* Dropdown button at the top right showing the current country flag
* Flag-based menu to switch between 4 Asian countries
* Dynamic rendering of each country (title, image, call-to-action)
* Responsive full-screen image background
* Animated transitions on country change (fade + scale)

---

## 🌐 Languages & SEO

* `lang="de"` for German support
* Meta tags include:

  * `description`
  * `title`
  * Open Graph (`og:title`, `og:image`, `og:description`, etc.)
  * Twitter Cards

---

## ♿ Accessibility Highlights

* `aria-label` on all interactive elements
* `role="menu"`, `role="menuitem"` on the dropdown
* `alt` tags on all images and flags
* `aria-expanded` and keyboard accessibility for toggle button

---

## 🧠 How It Works

1. `countries[]` is an array of metadata (ID, name, flag URL, image path, alt text)
2. JS dynamically renders the dropdown from this array
3. `showCountry()` preloads the image and animates in the new section
4. Button hover is animated via Tailwind `group-hover` and `translate-x`

---

## 🚀 Getting Started

### 1. Clone or unzip the folder

```bash
cd BEWERBUNGS-PROJEKT
```

### 2. Open `index.html` in your browser

All required assets are local or loaded via CDN.

---

## ⚠️ Notes

* Images must remain in the `assets/images/` folder
* Image filenames must match those used in `script.js`
* Requires no build tools, no framework, no npm

---

## 📄 License

Use for educational/demo purposes only. All food images used are assumed to be free-to-use stock art or placeholders.

---

## 👤 Author

Frontend Developer Applicant

---

> Designed for clarity, performance, and simplicity.
>
> Feedback welcome.
