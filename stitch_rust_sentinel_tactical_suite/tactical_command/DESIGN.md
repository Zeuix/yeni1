---
name: Tactical Command
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#dcc1b1'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a48c7d'
  outline-variant: '#564337'
  surface-tint: '#ffb783'
  primary: '#ffb783'
  on-primary: '#4f2500'
  primary-container: '#e67e22'
  on-primary-container: '#502600'
  inverse-primary: '#944a00'
  secondary: '#ffb4a9'
  on-secondary: '#690001'
  secondary-container: '#950c09'
  on-secondary-container: '#ff9f91'
  tertiary: '#92ccff'
  on-tertiary: '#003351'
  tertiary-container: '#3fa0e4'
  on-tertiary-container: '#003452'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcc5'
  primary-fixed-dim: '#ffb783'
  on-primary-fixed: '#301400'
  on-primary-fixed-variant: '#713700'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4a9'
  on-secondary-fixed: '#410000'
  on-secondary-fixed-variant: '#910807'
  tertiary-fixed: '#cce5ff'
  tertiary-fixed-dim: '#92ccff'
  on-tertiary-fixed: '#001d31'
  on-tertiary-fixed-variant: '#004b73'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  data-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: '0'
  data-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

The design system is engineered for high-stakes gaming environments where millisecond precision and data clarity are paramount. The aesthetic is **Industrial Minimalist** with a **Tactile Tech** edge, drawing inspiration from military avionics and heavy-duty hardware interfaces. It targets an elite user base that values performance over decoration.

The UI should feel like a piece of high-end equipment rather than a standard consumer app. Surfaces are deep and non-reflective, accents are purposeful and high-visibility, and the overall emotional response is one of focus, urgency, and absolute control. Visual depth is achieved through layering and subtle outlines rather than traditional shadows, emphasizing a "rugged digital" construction.

## Colors

This design system utilizes a high-contrast, dark-first palette designed for low-light gaming environments.

- **Primary (Safety Orange):** Reserved for primary actions, critical status changes, and active selection states. It provides the highest level of visual "cut-through."
- **Secondary (Alert Red):** Used exclusively for destructive actions, critical errors, and lethal health thresholds.
- **Tertiary (Intel Blue):** Used for informational readouts, secondary data points, and non-critical system updates.
- **Neutrals:** A range of industrial grays (#121212 to #2E2E2E) form the structural backbone. The background is nearly black to minimize eye strain and maximize the pop of high-visibility accents.

## Typography

The typography system prioritizes legibility under duress. It uses a dual-font approach: 
1. **Inter** for structural UI and body copy to ensure high-speed readability.
2. **JetBrains Mono** for all numerical data, telemetry, and technical labels, providing a distinct "instrumentation" feel.

On mobile devices, `headline-lg` should scale down to 24px to maintain layout integrity. All labels and data readouts should utilize the monospace stack to prevent layout shifting during real-time value updates.

## Layout & Spacing

The layout is based on a rigid **4px grid system**, ensuring that all elements align with mathematical precision. 

- **Grid:** A 12-column fluid grid for desktop and a 4-column grid for mobile.
- **Rhythm:** Information density is high. Use `sm` (8px) for internal component spacing and `md` (16px) for spacing between related groups.
- **Containers:** Content is housed in modular "blocks" with fixed gutters of 16px. This reinforces the "racked hardware" aesthetic where components look like they can be slid in or out of a chassis.

## Elevation & Depth

This design system rejects soft shadows in favor of **Tonal Layering** and **Structural Outlines**. 

- **Level 0 (Base):** Deep black (#0A0A0A) representing the system floor.
- **Level 1 (Surface):** Charcoal (#1A1A1A) with a 1px border (#2E2E2E) used for primary cards and modules.
- **Level 2 (Overlay):** Slightly lighter grey (#252525) for modals and dropdowns, using a higher contrast border (#404040) to simulate physical elevation.
- **Active State:** Elements in an active state do not gain "height" through shadows; instead, they receive a 1px inner glow or a solid 2px left-accent border in Safety Orange.

## Shapes

The shape language is aggressive and geometric. All containers use a "Soft" (0.25rem) corner radius, which provides just enough refinement to avoid looking primitive while maintaining a serious, industrial silhouette. Buttons and interactive elements should never be fully rounded; they must maintain their rectangular integrity to reflect the "modular" brand personality.

## Components

- **Buttons:** Primary buttons are solid Safety Orange with black text. Secondary buttons are ghost-style with a 1px grey border that shifts to orange on hover. Text is always bold and centered.
- **Inputs:** Darker than the surface level (#121212) with a 1px bottom-border. On focus, the border transitions to Safety Orange with a faint 2px outer glow.
- **Chips:** Small, rectangular modules using JetBrains Mono. They represent status (e.g., "ONLINE", "ACTIVE"). Backgrounds are low-opacity versions of the status color (e.g., 10% Orange background with 100% Orange text).
- **Cards/Modules:** Defined by a 1px border (#2E2E2E). Header areas of cards should have a subtle diagonal-stripe pattern or a different background tint to distinguish "control" from "data."
- **Status Indicators:** 8px solid circles or squares. Pulse animations are used for "Searching" or "Live" states.
- **Lists:** Clean, horizontal rows separated by 1px dividers. Hover states should highlight the entire row with a subtle #FFFFFF (5%) overlay.