<h1 align="center">⚓ Davit</h1>
<p align="center"><strong>A lightweight, native Docker management UI for Windows — built to replace Docker Desktop.</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/Go-1.22+-00ADD8?style=flat&logo=go" />
  <img src="https://img.shields.io/badge/Wails-v2-FF3E00?style=flat" />
  <img src="https://img.shields.io/badge/platform-Windows-0078D4?style=flat&logo=windows" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat" />
  <img src="https://img.shields.io/github/stars/AntoineGouzy/Davit?style=flat" />
</p>

---

## Why Davit?

Docker Desktop on Windows is convenient, but it comes at a cost: a heavy Electron UI, a background VM consuming hundreds of megabytes of RAM, and a resource footprint that competes with your actual applications.

**Davit** takes a different approach. It talks directly to the Docker Engine API over the WSL2 socket — no middleware, no virtual machine overhead, no Chromium-embedded browser. Just a native Go binary with a lightweight WebView2 interface.

> The name *Davit* refers to the mechanical arm used to lower lifeboats from a ship — a precise, lightweight tool built to handle containers.

---

## Features

### Dashboard
Real-time overview of your Docker environment: active containers, CPU and memory usage, disk consumption, and a live graph of system metrics.

### Container management
Full container lifecycle control — start, stop, restart, remove, and open an in-app terminal. Containers are grouped by their **docker-compose project**, and dependency chains defined by `depends_on` are resolved automatically: starting a container starts its dependencies in the correct order.

### Image management
List, pull, and remove images. Unused images are identified and can be cleaned up in one click.

### Volume & network management
Inspect, create, and delete volumes and networks with full metadata visibility.

### Settings
Unified configuration panel covering:
- **WSL2** — memory limit, CPU allocation, swap (written to `~/.wslconfig`)
- **Docker client** — socket URL, proxy configuration, private registries (written to `~/.docker/config.json`)
- **Davit** — theme, language, application preferences

All configuration files are accessible directly from the UI with their full path displayed, and can be opened in an external editor. Changes made outside Davit are detected and reloaded automatically.

### Windows installer
A guided installer handles WSL2 setup, Linux distribution installation, and Docker Engine configuration — so you can go from zero to a running Docker environment without touching a terminal.

---

## Architecture

```
Windows host
├── Davit.exe          (Go + Wails / WebView2)
│   ├── Frontend       (HTML/CSS/JS — rendered by WebView2)
│   └── Backend        (Go — communicates with Docker Engine API)
│
└── WSL2
    └── Docker Engine  (dockerd — exposed via Unix socket)
```

Davit communicates with the Docker daemon via the named pipe `//./pipe/docker_engine` on Windows, or directly through the WSL2 Unix socket. No TCP port exposure required.

---

## Tech stack

| Component | Technology |
|---|---|
| GUI framework | [Wails v2](https://wails.io/) (Go + WebView2) |
| Backend | Go 1.22+ |
| Docker API | [docker/docker/client](https://pkg.go.dev/github.com/docker/docker/client) |
| Real-time events | Docker `/events` stream |
| Installer | Wails-based wizard |

---

## Prerequisites

- Windows 10 (build 19041+) or Windows 11
- WSL2 enabled with a Linux distribution
- Docker Engine installed inside WSL2
- WebView2 runtime (included in Windows 11, auto-installed on Windows 10)

> **Don't have WSL2 or Docker Engine yet?** The Davit installer handles the full setup for you.

---

## Installation

Download the latest release from the [Releases page](https://github.com/AntoineGouzy/Davit/releases) and run `Davit-Setup.exe`.

The installer will:
1. Detect your current WSL2 and Docker setup
2. Install any missing components (WSL2, Linux distribution, Docker Engine)
3. Configure WSL2 memory and CPU limits
4. Launch Davit

*First release coming soon.*

---

## Building from source

```bash
# Prerequisites: Go 1.22+, Node.js 18+, Wails CLI
go install github.com/wailsapp/wails/v2/cmd/wails@latest

git clone https://github.com/AntoineGouzy/Davit.git
cd Davit

wails build
```

For development with hot reload:

```bash
wails dev
```

---

## Roadmap

- [x] Project architecture & design
- [ ] Docker Engine API integration (containers, images, volumes, networks)
- [ ] Real-time dashboard with live metrics
- [ ] docker-compose grouping with `depends_on` resolution
- [ ] Settings panel (WSL2, Docker client, Davit config)
- [ ] Windows installer wizard
- [ ] First public release

**Davit-Build** — a separate CLI extension for intelligent Dockerfile cache optimization — is planned as a follow-up project. See [davit-build](https://github.com/AntoineGouzy/davit-build) *(coming soon)*.

---

## Contributing

Contributions are welcome. Please open an issue before submitting a pull request so we can discuss the change.

---

## License

Distributed under the [MIT License](LICENSE).

---

<p align="center"><em>Built to give resources back to developers.</em></p>