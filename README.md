# Amazon Clone Project

A multi-page front-end clone of Amazon, featuring a completely styled homepage, product view, shopping cart, and fully interactive authentication pages (Sign-In & Sign-Up) with live client-side form validation.

## 🔗 Live Demo
👉 **[Click here to view the Live Website](Link updated here)**

---

## 🚀 Features

- **Multi-Page Architecture:** Includes Home, Product, Cart, Sign-In, and Registration pages.
- **Dedicated Authentication CSS:** Sign-In and Sign-Up share an independent `auth.css` stylesheet, protecting the main homepage styles (`style.css`) from getting messed up.
- **Pixel-Perfect UI:** Emulates Amazon's official colors (`#ffd814`), layouts, borders, and clean typography using the `Outfit` font family.
- **Form Validation Logic:** Vanilla JavaScript code that actively checks inputs before letting users submit forms.

---

## 📂 Project Structure

Based on the actual workspace layout:

```text
FUTURE_FS_03/
├── assets/            # Contains local media, images, and logos
├── .gitattributes     # Git configuration file
├── auth.css           # Dedicated CSS for Sign-In & Sign-Up pages
├── cart.css           # Styling for the shopping cart page
├── cart.html          # Shopping Cart page
├── index.html         # Main E-commerce Homepage
├── main.js            # Core JavaScript for global site functionality
├── product.css        # Styling for the single product layout
├── product.html       # Individual product detail page
├── signin.html        # Amazon User Login page
├── signup.html        # Amazon Account Creation page
└── style.css          # Main stylesheet dedicated to the homepage
