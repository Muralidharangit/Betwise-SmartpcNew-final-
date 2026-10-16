# Betwise Smart PC — Release Notes (v1.0.2)

## Overview
- **Application Name**: Betwise Smart PC Dedicated Gaming Terminal
- **Product Identifier**: `com.betwise.smartpc`
- **Application Version**: `1.0.2`
- **Build Timestamp**: 2026-10-16
- **Architecture**: `x86_64` / `amd64`

---

## Release Packages

### 1. Linux Debian Package (`.deb`)
- **File Path**: `release-builds/linux/betwise-smartpc_1.0.2_amd64.deb`
- **Package Size**: `25.84 MiB` (`27,095,582 bytes`)
- **SHA-256 Checksum**: `d82099b42e216780afc425609427cdc6a8dbf4cf19bdb051cb46f4b6394f67e1`
- **Architecture**: `amd64`
- **Target OS**: Linux (Ubuntu / Debian / Linux Mint 20.04+, 22.04+, 24.04+)
- **System Dependencies**:
  - `libwebkit2gtk-4.1-0` | `libwebkit2gtk-4.0-37`
  - `libgtk-3-0`
  - `libsoup-3.0-0` | `libsoup2.4-1`
- **Packaging Scripts Included**:
  - `preinst`: Kills running instances (`betwise-smartpc`, `winbet-smart-pc`) before extraction.
  - `postinst`: Cleans stale WebKit cache across user profiles (`~/.cache/com.betwise.smartpc`).
  - `postrm`: Purges cache artifacts upon removal.
- **Verification Status**:
  - Compiled with Rust 1.99.0 & Tauri CLI 2.12.1.
  - All shared libraries dynamically linked and verified via `ldd` (`0 missing libraries`).
  - Embedded frontend assets verified: New navy blue theme CSS, Betwise brand assets (`betwise-logo.png`), banners, Spribe game cards, icons, and chunked JS bundles.

### 2. Windows NSIS Installer (`.exe`)
- **File Path**: `release-builds/windows/betwise-smartpc_1.0.2_x64-setup.exe`
- **Package Size**: `22.65 MiB` (`23,746,265 bytes`)
- **SHA-256 Checksum**: `12399578bd8e25dfdf85e4b946c8e82b67d8592af825935b863c6d57232ad2e2`
- **Target OS**: Windows 10, Windows 11 (x64)
- **Installer Hook**: `installer_hooks.nsh`
  - Automated termination of existing instances (`betwise-smartpc.exe`).
  - WebView2 profile cache cleanup (`%LOCALAPPDATA%\com.betwise.smartpc`).
  - Full uninstaller sweep.
- **CI/CD Workflow**: Configured in `.github/workflows/build-windows.yml` for automated GitHub Actions MSVC compilation (`x86_64-pc-windows-msvc`).

---

## Theme & Design System Migration Summary
- **Color Tokens**:
  - Primary Background: `#063B63` (Deep Navy Blue)
  - Secondary Background: `#073F68` (Dark Ocean Blue)
  - Header & Sidebar: `#06385D`
  - Card & Container Border: `#0B4A70`
  - Primary Action / Accent: `#009D50` with `#35E52D` neon borders
  - Active Highlights: `#35E52D` / `#42F52B`
  - Brand Typography: `#FFFFFF` (White) and `#D8E2EC` (Light Gray)
- **Assets Updated**:
  - Brand Logo: High-res Betwise brand vector/PNG logo (`/assets/images/betwise-logo.png`).
  - Background: Full HD dark navy mesh artwork (`/assets/images/bg-1.png`).
  - Hero Carousel: High-res championship and jackpot banners (`/assets/banner/bn1.png`, `2.png`, `3.png`).
  - Game Grid: Chamfered cards, hover elevations, provider filter buttons, and game detail modal styling.
- **Application Workflows Preserved**:
  - Terminal Machine Registration & Code Setup
  - Smart PC Game Lobby & Provider Filtering (Spribe, etc.)
  - In-Game Theater & Modal Viewports
  - Ticket Cashout & Barcode Thermal Printer Commands
  - Live Winners Real-Time Ticker
  - Kiosk Hotkey Guard (suppressing Alt+Tab, WinKey, Ctrl+Esc)
