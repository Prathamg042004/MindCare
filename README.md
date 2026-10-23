# MindCare

**A browser-based wellbeing interface prototype.**

MindCare explores how chat, music, video resources, and a consultation-style interface can fit into one accessible web experience. It is a single-file HTML/CSS/JavaScript project.

> **Prototype status:** the chat uses keyword-based responses. The consultation screen simulates interactions; it does not connect users to a clinician. This is not a trained AI model, a clinical product, or a medical service.

## Explore locally

```sh
git clone https://github.com/Prathamg042004/MindCare.git
cd MindCare
python -m http.server 8000
```

Open http://localhost:8000/mindcare.html. You can also open `mindcare.html` directly for basic interface exploration. External media requires internet access.

## Included experiences

| Area | Implementation |
| --- | --- |
| Account screens | Login, registration, and recovery interface flows |
| Chat | JavaScript keyword matching with predefined replies |
| Music and video | Media-oriented wellbeing resource interfaces |
| Consultation | Simulated call interface and local camera/microphone controls |
| Profile settings | Browser-local interface preferences and photo handling |

## Project structure

| File | Purpose |
| --- | --- |
| `mindcare.html` | Complete interface, styling, navigation, and interaction logic |
| `README.md` | Setup and project scope |

## Data and permissions

This is a frontend demonstration, not secure authentication. Use fictional details and a throwaway demo password. Browser-local storage is not suitable for sensitive health information. Camera and microphone features require explicit browser permission; they are optional for exploring the rest of the interface.

## Development direction

- Separate HTML, styles, and JavaScript into maintainable modules.
- Improve keyboard navigation, focus management, and accessible form feedback.
- Add automated checks for navigation and account-screen flows.
- Clearly distinguish simulated interactions from connected services in the interface.
- Add a real backend and appropriate privacy controls before considering real accounts.

## Related repository

[`mind-care`](https://github.com/Prathamg042004/mind-care) is the earlier starter repository. This repository contains the actual frontend prototype.

## Maintainer

[Pratham Gupta](https://github.com/Prathamg042004)
