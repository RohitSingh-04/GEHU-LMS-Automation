# GEHU LMS Automation Helper 🎓

A lightweight Chrome extension that **automatically advances to the next course video** on the [GEU LMS](https://lms.geuonline.com) platform once the current video finishes playing.  

---

## 🚀 Features
- Detects when a course video ends.  
- Automatically clicks the **“Next Course Item”** button to move to the next lecture.  
- Loops continuously until all videos in the course are completed.  
- Works seamlessly in the background — no manual clicks needed!

---

## 🧩 How It Works
The extension injects a simple content script (`content.js`) into the LMS website:
1. It waits for a video element (`<video>`) and the “Next Course Item” button (`#nextCourseItemBtn`) to appear.  
2. Once both are found, it listens for the video’s `ended` event.  
3. When the video finishes, it automatically triggers a click on the “Next” button and repeats the process for the next video.

---

## 📂 File Structure
```
GEHU-LMS-Automation/
│
├── manifest.json       # Extension configuration (Manifest v3)
├── content.js          # Main automation logic
└── README.md           # Project documentation
```

---

## ⚙️ Installation (Developer Mode)
1. Download or clone this repository:
   ```bash
   git clone https://github.com/RohitSingh-04/GEHU-LMS-Automation.git
   ```
2. Open **Google Chrome** and go to:
   ```
   chrome://extensions/
   ```
3. Enable **Developer mode** (toggle on the top-right).
4. Click **Load unpacked** and select the project folder.
5. Visit the LMS website:
   ```
   https://lms.geuonline.com/
   ```
6. Start a video — the extension will automatically take care of advancing to the next one! 🎥

---

## 🧠 Code Overview

### `content.js`
```js
function perform() {
    setTimeout(() => {
        let v = document.querySelector("video");
        let b = document.getElementById("nextCourseItemBtn");
        if (v && b) {
            v.addEventListener("ended", () => {
                console.log("video ended!");
                b.click();
                perform();
            });
            console.log("waiting the video to finish");
        }
    }, 5000);
}

perform();
```

- Waits 5 seconds to ensure elements are loaded.
- Adds an event listener to detect when the video ends.
- Automatically clicks the next button and re-runs itself recursively.

---

## 🧾 manifest.json
```json
{
    "manifest_version": 3,
    "name": "GEHU LMS Automation Helper",
    "version": "1.0",
    "description": "Automatically advances to the next course video after the video ends.",
    "content_scripts": [{
        "matches": ["https://lms.geuonline.com/*"],
        "js": ["content.js"]
    }]
}
```

Defines how the extension integrates with Chrome and specifies where the script runs.

---

## 🧑‍💻 Author
**Rohit Singh**  
💼 Python & Web Developer  
🌐 [GitHub](https://github.com/RohitSingh-04) | [LinkedIn](https://linkedin.com/in/rohiyaa)

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

### 💡 Tip
If the next video doesn’t load automatically, refresh the page once — the script re-initializes after each course item.
