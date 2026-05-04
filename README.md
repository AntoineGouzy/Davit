# ⚓ Davit

**An ultra-lightweight and native graphical interface to manage Docker on Windows via WSL 2.**

Davit was born from a simple observation: current container management tools on Windows consume too many resources (RAM/CPU) in the background, often for features that are not essential for daily development. 

Davit focuses on the **bare minimum**: managing your containers, images, volumes, and Docker Compose projects with a near-zero memory footprint (< 50 MB), leaving your machine's power for your actual applications.

---

## ✨ Key Features

*   🪶 **Ultra-lightweight:** Native interface built with Go and [Fyne](https://fyne.io/). No Electron, no hidden web browser in the background.
*   ⚡ **Zero network bloat:** Davit communicates directly with the API of your Docker daemon inside WSL. No CPU-hungry internal VPN proxy.
*   📦 **Daily essentials:** Visual management of Containers, Images, Networks, and Volumes.
*   🛠️ **Docker Compose support:** Start and stop your multi-container environments with a single click.
*   🔒 **Separated & Secure:** A dedicated setup executable (`Setup.exe`) handles the WSL configuration (requires admin rights), while the main dashboard runs safely with standard user privileges.

## 🚀 Prerequisites

*   Windows 10 or Windows 11.
*   WSL 2 enabled with a Linux distribution (e.g., Ubuntu).
*   Docker Engine installed inside WSL.

## 🛠️ Installation & Getting Started

*(Instructions coming soon in the first release)*

## 🏗️ Technical Architecture

This project is built around two main components:
1.  **The Backend (WSL 2):** The standard Docker engine (`dockerd`) configured to expose its API on TCP port `2375`.
2.  **The Frontend (Windows):** The Fyne GUI using the official Docker SDK for Go (`github.com/docker/docker/client`) to orchestrate the environment.

## 📄 License & Terms

This project is distributed under the **MIT License**. 

The use of this software is provided "as is", without warranty of any kind. You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, subject to the conditions of the MIT License. See the `LICENSE` file for more details.

---
*Built with ❤️ to give resources back to developers.*
