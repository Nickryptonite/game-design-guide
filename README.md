# 🎮 Game Design Roadmap (Zero to Job-Ready)

Welcome to the ultimate open-source Next.js 32-Week Game Design tracking companion. This project was built to help aspiring game designers securely track, follow, and accomplish a rigorous 32-week curriculum spanning design fundamentals, prototyping, game jams, and portfolio building.

![Game Design App Demo](public/window.svg)

## ✨ Core Features
*   **Structured 32-Week Scope**: From mechanics and MDA frameworks to active Unity prototyping and launching on itch.io.
*   **Live Cloud Synchronization**: Uses Upstash Redis securely cache and persist progress live across any device instantly (iPad, Phone, PC).
*   **Zero Authentication Needed**: Operates via random generated 'Sync Keys' protecting user anonymity while keeping multi-device environments flawless.
*   **Global Bookmarks**: Fixed top-level repository tabs (GDC, GMTK, etc) specifically modeled around standard daily consumption.
*   **Day & Week Tracking Metrics**: Complete fluid tracking algorithms that intelligently filter between phases mapping global progress locally.

---

## 🛠️ How to Deploy & Customize This For Yourself
You can fork this repository and host it entirely for free on Vercel without tweaking any complex systems!

### Step 1: Clone & Install Local
```bash
git clone https://github.com/Nickryptonite/game-design-guide.git
cd game-design-guide
npm install
```

### Step 2: Configure the Database (2 Minutes)
To make tracking work across all your mobile platforms simultaneously, you need a free Redis cloud instance.
1. Make an account at [Upstash Redis](https://upstash.com/).
2. Click **Create Database**, pick your server region, name it `gamesync`.
3. Scroll to the **REST API** configuration section on the dashboard and click the **`.env`** tab.
4. Create a `.env.local` file in your root folder and paste the generated lines exactly like this:
   ```env
   UPSTASH_REDIS_REST_URL="https://some-endpoint.upstash.io"
   UPSTASH_REDIS_REST_TOKEN="your-secure-token"
   ```

### Step 3: Customizing the Curriculum
All text, data, resource links, and descriptions are loaded cleanly from one single data layer located here:
👉 `src/data/curriculumData.ts`

If you want to add an entirely new Week or re-write the daily schedule, simply add a block under the `weeks` array. 
The application dynamically calculates total progress, phases, and day intervals (e.g. Day 1 - Day 7) automatically based on whatever data you provide it within that file!

### Step 4: Host It Live
Once you're satisfied with any data changes, just push to GitHub and link it to Vercel.
Ensure you go into the Vercel Dashboard -> Settings -> Environment Variables and paste those 2 Upstash variables you generated before deploying, otherwise cloud syncing won't fire!

---

## 💻 Tech Stack
- [Next.js (App Router)](https://nextjs.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Upstash Redis SDK](https://upstash.com/)
- [Lucide Icons](https://lucide.dev/)
