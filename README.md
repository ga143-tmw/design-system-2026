# Design System 2026

Standalone package of the DCD-style design system, saved at `~/workspace/design-system-2026`.

## Contents

- `index.html`: simple landing page
- `kitchen-sink.html`: full visual reference for the system
- `dashboard-demo.html`: mocked DCD Studio dashboard demo with tabs, tables, pipeline, modals, and toasts
- `operator-patterns.html`: 2026 operator-style Dev Tools, wizard, deploy modal, and log references from the latest DCD Studio mocks
- `operator-2026.css`: styles for the operator reference patterns
- `operator-patterns.js`: tiny tab behavior for the operator reference page
- `tokens.css`: theme tokens, reset, base typography, motion
- `components.css`: reusable UI classes
- `theme.js`: dark/light toggle helper

## Included Design Elements

- semantic color tokens
- dark and light theme support
- compact operator-style buttons and inputs
- labels, chips, badges, status dots
- nav tabs and dense app header patterns
- stat strips and table shell patterns
- workflow dots and stepper styling
- card, panel, modal, and toast shells
- floating preview Dev Tools panel styling
- campaign wizard configuration, AC scoring, and review states
- deploy creation modal and dense activity log treatments

## How To Use

1. Open `index.html` or `kitchen-sink.html` in a browser.
2. Open `dashboard-demo.html` for a mocked DCD Studio app-style reference.
3. Open `operator-patterns.html` for the newer operator-heavy mock surfaces.
4. Import `tokens.css` and `components.css` into another project, plus `operator-2026.css` if you want the new operator mock styling.
5. Reuse the documented classes and patterns.

## Notes

This package is framework-agnostic and mirrors the extracted DCD Studio visual language rather than DCD-specific business logic.
