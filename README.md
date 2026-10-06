# RoboNav

**Simple Control. Smart Robots.**

RoboNav is a single-page dashboard for controlling and monitoring a robot. It runs entirely in the browser with a simulated robot, so it needs no server, no build step and no robot hardware.

**Live demo:** https://YOUR-USERNAME.github.io/robonav/

## Features

**Home**
- Live map with 2D and 3D views, a moving robot and route preview
- Status row: robot status, battery, current location, connection, robot health
- START and STOP buttons on the map
- Go To Location: pick a saved place, or click the map to set a goal
- Voice Assistant: speak or type commands such as "Go to Home"
- Manual Control: hold-to-drive arrows, keyboard arrow keys, speed slider
- Quick Actions, Live Telemetry, Pre-trip Check and Recent History
- Trip stats: destinations reached, distance driven, drive time
- Draw obstacles with a pencil, brush or eraser, and the robot replans around them

**Other tabs**
- **Routes:** save multi-stop trips and run them in one tap. Also holds the **Maps** card (Robotics Lab, Corridor, Warehouse, and your own maps via + Add map)
- **History:** full filterable log of trips, stops, alerts and voice commands
- **Battery:** simulated drain and charging, trend line, low-battery alert, optional auto-return to the charging station
- **Obstacles:** undo, redo, clear, and save or load named obstacle layouts
- **Schedule:** daily trips (runs while the page is open)
- **Safety:** Student Mode speed limit and keep-out zones
- **Learn:** how path planning works, plus practice challenges
- **Settings:** engineer tools

## Run it

Open `index.html` in any modern browser. Nothing to install.

## Deploy with GitHub Pages

1. Put `index.html` and this `README.md` in a repository.
2. Go to **Settings → Pages**.
3. Set Source to **Deploy from a branch**, choose **main** and **/ (root)**, then save.
4. Your site will be at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

## Push with Git

```bash
git init
git add index.html README.md
git commit -m "Add RoboNav dashboard"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/robonav.git
git push -u origin main
```

## Good to know

- The robot, battery and connection are **simulated**. The page does not connect to real hardware.
- Saved locations, obstacles, routes, schedules, history and settings are stored in the viewer's own browser (`localStorage`). They are not shared between people or devices.
- Voice input uses the browser's speech recognition, which works best in Chrome and Edge.
- The extra maps (Corridor, Warehouse, added maps) are generated layouts, not scans of real spaces.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The whole app: HTML, CSS and JavaScript in one file |
| `README.md` | This file |
