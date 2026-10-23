# MindCare

**A browser-based wellbeing interface demonstration.**

Explore predefined chat replies, music/video resources, and a simulated consultation interface. This frontend does not connect to a clinician or provide medical care.

## Run

```sh
python -m http.server 8000
```

Open http://localhost:8000/mindcare.html and choose **Enter demo**. No account, email, phone number, or password is required. Camera/microphone controls are optional and need browser permission. External media requires internet access.

## Security changes

- Chat renders visitor and bot messages as text, so supplied HTML does not become executable markup.
- The old browser-only registration and plaintext password storage have been removed. This remains a demo, not an authentication system.
- **Clear data from older demos** removes legacy account/photo entries from this browser only when the visitor chooses it. Old builds may have stored demo passwords; discard any password reused in that build.
- Video IDs are validated before embedding.

## Test

```sh
npm ci
npm test
```

Three DOM-based regressions check demo entry/exit, safe chat rendering, and visitor-requested cleanup. jsdom is a development dependency; it is not required to open the page.

## Structure

| File | Purpose |
| --- | --- |
| `mindcare.html` | Interface, styling, and browser interactions |
| `security.test.cjs` | DOM security regression tests |
| `package.json` / `package-lock.json` | Reproducible development test setup |

## Further work

Separate styles and scripts, improve keyboard/focus behavior, and review external media/privacy. Any real accounts or health information need a properly designed backend and privacy controls.

[Pratham Gupta](https://github.com/Prathamg042004)
