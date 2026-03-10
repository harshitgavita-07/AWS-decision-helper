<div align="center">

# ☁️ AWS Decision Helper

### Stop guessing Lambda vs EC2. Let the logic decide.

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com)
[![No Backend](https://img.shields.io/badge/Backend-None%20(runs%20in%20browser)-brightgreen?style=for-the-badge)]()

</div>

---

## 🎯 The Problem

Every developer starting with AWS hits the same wall: **Lambda or EC2?**

The internet says "it depends." That's useless. This tool makes the decision based on your actual constraints.

---

## 💡 How It Works

Answer 5 questions about your workload:

1. **Traffic pattern** — Spiky/unpredictable or steady/constant?
2. **Execution time** — Under 15 minutes per request or longer?
3. **State requirements** — Stateless or stateful?
4. **Ops overhead tolerance** — Can you manage servers or prefer hands-off?
5. **Cost model** — Pay per request or reserved capacity?

The tool scores your answers and returns a **clear recommendation with reasoning** — not just "Lambda is good for X."

---

## 🚀 Run It

No install. No build step. No backend.

```bash
git clone https://github.com/harshitgavita-07/AWS-decision-helper.git
cd AWS-decision-helper
open index.html   # macOS
# or just double-click index.html
```

Or open `index.html` directly in any browser.

---

## 🧠 Decision Logic

```
Spiky traffic + stateless + short exec → Lambda ✅
Steady traffic + stateful + long exec  → EC2 ✅
GPU workload + ML inference            → EC2 (g-series) ✅
Event-driven + async + cost-sensitive  → Lambda ✅
```

The full scoring matrix is in `script.js` — transparent and hackable.

---

## 📁 Structure

```
AWS-decision-helper/
├── index.html     # UI + questions
├── script.js      # Decision logic + scoring
└── building-a-brain/  # Architecture notes
```

---

<div align="center">

*Built by [Harshit Gavita](https://github.com/harshitgavita-07)*

</div>
