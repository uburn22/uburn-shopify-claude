---
name: 21st-dev-builder
description: Build websites using 21st.dev component library — the largest marketplace of shadcn/ui-based React Tailwind components. Use when user mentions "21st.dev", "21st", "ใช้ 21st", "build with 21st", "21st component", or wants to use components from 21st.dev. Do NOT trigger for general web development — only when 21st.dev is explicitly mentioned.
---

# 21st.dev Web Builder

Build production-ready websites using [21st.dev](https://21st.dev) — the largest marketplace of shadcn/ui-based React Tailwind components, blocks, and hooks. You are an expert at discovering, selecting, and integrating 21st.dev components to create polished web applications.

## What This Skill Does

You are a specialist in building websites with 21st.dev components. You can:

1. **Analyze requirements** — Break down what the user wants into component needs
2. **Discover components** — Search 21st.dev live for the latest, best-fit components
3. **Select intelligently** — Choose the right components based on popularity, recency, and design consistency
4. **Install & integrate** — Set up the project and install components end-to-end
5. **Compose pages** — Assemble components into cohesive, well-structured pages

## Core Knowledge: 21st.dev

### What is 21st.dev?
An open-source community registry for React UI components built on shadcn/ui. Components are installed with full source code ownership — not as opaque npm packages.

### Tech Stack
- **Framework**: React / Next.js
- **Styling**: Tailwind CSS
- **Primitives**: Radix UI
- **Language**: TypeScript
- **Install method**: `npx shadcn@latest add "https://21st.dev/r/{author}/{component}"`

### Component Categories (1000+ components)

**Landing Page / Section Components:**
| Category | Count | Search slug |
|----------|-------|-------------|
| Hero sections | 73+ | `hero` |
| Texts / Typography | 58+ | `texts` |
| Hooks | 31+ | `hooks` |
| Images | 26+ | `images` |
| Scroll Areas | 24+ | `scroll-areas` |
| Pricing Sections | 17+ | `pricing` |
| Testimonials | 15+ | `testimonials` |
| Shaders | 15+ | `shaders` |
| Navigation Menus | 11+ | `navigation-menus` |
| Videos | 9+ | `videos` |
| Navbars | varies | `navbars` |
| Footers | varies | `footers` |
| Features | varies | `features` |
| CTA | varies | `cta` |
| Backgrounds | varies | `backgrounds` |
| Announcements | varies | `announcements` |

**UI Components:**
| Category | Count | Search slug |
|----------|-------|-------------|
| Buttons | 130+ | `buttons` |
| Inputs | 102+ | `inputs` |
| Cards | 79+ | `cards` |
| Selects | 62+ | `selects` |
| Sliders | 45+ | `sliders` |
| Accordions | 40+ | `accordions` |
| Tabs | 38+ | `tabs` |
| Dialogs/Modals | 37+ | `dialogs` |
| Calendars | 34+ | `calendars` |
| AI Chats | 30+ | `ai-chats` |
| Tables | 30+ | `tables` |
| Badges | 25+ | `badges` |
| Dropdowns | 25+ | `dropdowns` |
| Alerts | 23+ | `alerts` |
| Forms | 23+ | `forms` |
| Popovers | 23+ | `popovers` |
| Text Areas | 22+ | `text-areas` |
| Radio Groups | 22+ | `radio-groups` |
| Spinner/Loaders | 21+ | `spinner-loaders` |
| Pagination | 20+ | `paginations` |
| Checkboxes | 19+ | `checkboxes` |
| Menus | 18+ | `menus` |
| Numbers | 18+ | `numbers` |
| Avatars | 17+ | `avatars` |
| Carousels | 16+ | `carousels` |
| Links | 13+ | `links` |
| Toggles | 12+ | `toggles` |
| Date Pickers | 12+ | `date-pickers` |
| Tooltips | 28+ | `tooltips` |
| Toasts | varies | `toasts` |
| Sidebars | 10+ | `sidebar` |
| Sign Ins | 4+ | `sign-ins` |
| Sign Ups | 4+ | `sign-ups` |
| File Uploads | 7+ | `file-uploads` |
| File Trees | 2+ | `file-trees` |
| Icons | 10+ | `icons` |

## Workflow

### Phase 1: Project Readiness Check

Before building, verify the project is ready for 21st.dev components:

```
Check for:
1. package.json exists?
2. Next.js or React project?
3. Tailwind CSS configured?
4. shadcn/ui initialized? (components.json exists?)
```

**If project doesn't exist yet**, scaffold it:
```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd my-app
npx shadcn@latest init -d
```

**Check MCP availability:**
- If `@21st-dev/magic` MCP tools are available → use them as primary method
- If not → use WebSearch + WebFetch + npx commands as fallback (works perfectly fine)

### Phase 2: Requirement Analysis

Break down the user's request into component needs:

1. **Identify page type**: Landing page? Dashboard? Auth flow? Blog? E-commerce?
2. **List required sections**: What sections does the page need?
3. **Map sections to categories**: Use the Component Selection Guide below

#### Component Selection Guide

| User wants... | Search these 21st.dev categories |
|---------------|----------------------------------|
| Landing page | `hero`, `features`, `pricing`, `testimonials`, `cta`, `footers`, `navbars`, `backgrounds` |
| Dashboard | `sidebar`, `cards`, `tables`, `tabs`, `stats`, `buttons`, `menus` |
| Auth pages | `sign-ins`, `sign-ups`, `forms`, `inputs`, `buttons` |
| Blog / Content | `cards`, `texts`, `images`, `paginations` |
| E-commerce | `cards`, `carousels`, `badges`, `buttons`, `dialogs`, `inputs` |
| Form-heavy app | `inputs`, `selects`, `checkboxes`, `radio-groups`, `date-pickers`, `forms`, `text-areas` |
| AI / Chat app | `ai-chats`, `inputs`, `buttons`, `cards` |
| Settings page | `forms`, `inputs`, `toggles`, `tabs`, `selects`, `checkboxes` |

### Phase 3: Component Discovery (ALWAYS SEARCH LIVE)

**CRITICAL: Always search 21st.dev live for each build session.** Components are constantly being added and updated. Never rely on cached knowledge alone.

#### How to search:

**Method 1: MCP (if available)**
Use the `@21st-dev/magic` MCP tools to search and generate components.

**Method 2: WebSearch + WebFetch (primary fallback)**

For each needed category, search using these patterns:

```
WebSearch: "site:21st.dev {category} component"
WebFetch: https://21st.dev/s/{category-slug}
WebFetch: https://21st.dev/community/components/s/{category-slug}
```

Example searches:
- `WebFetch("https://21st.dev/s/hero")` → browse hero components
- `WebFetch("https://21st.dev/s/navbars")` → browse navbar components
- `WebSearch("site:21st.dev animated button component")` → find specific styles

#### For each required section:
1. Search the relevant category on 21st.dev
2. Find 2-3 candidate components
3. Evaluate based on:
   - **Visual quality** — Does it look polished and modern?
   - **Popularity** — How many likes/downloads?
   - **Recency** — Recently updated components may use better patterns
   - **Completeness** — Dark mode, responsive, accessible?
   - **Author consistency** — Using components from the same author improves visual consistency
4. Present candidates to the user with preview links: `https://21st.dev/r/{author}/{component}`
5. Let the user choose (or pick the best if user says "you decide")

### Phase 4: Installation & Integration

#### Install selected components:
```bash
npx shadcn@latest add "https://21st.dev/r/{author}/{component-name}"
```

This command:
- Downloads component source code into the project
- Installs required dependencies
- Updates Tailwind config if needed
- Creates component files (usually in `components/ui/` or `components/`)

#### If npx install fails:
1. Try fetching the component code directly from 21st.dev and creating files manually
2. Check if dependencies are missing and install them
3. If all fails, suggest an alternative component from the same category

#### Compose the page:
After installing components, create/edit page files to:
- Import installed components
- Pass appropriate props and content
- Add layout structure (spacing, grid, sections)
- Customize colors, text, and images to match the user's needs

### Phase 5: Verification

After building, verify:
- [ ] `npm run dev` starts without errors
- [ ] No console errors in browser
- [ ] All components render correctly
- [ ] Responsive layout works (mobile/tablet/desktop)
- [ ] Dark mode works if applicable
- [ ] Interactive elements function properly

Use preview tools if available to take screenshots and verify visually.

## Page Composition Patterns

### Landing Page Formula
```
Navbar (sticky)
  → Hero section
  → Features / Benefits (alternate bg)
  → Social proof / Stats
  → Pricing (alternate bg)
  → Testimonials
  → CTA section (alternate bg)
  → Footer
```

### Dashboard Formula
```
SidebarProvider
  → Sidebar navigation
  → Main content area
    → Header / toolbar
    → Stats cards grid
    → Data table or content area
```

### Auth Flow
```
Centered container (min-h-screen, flex items-center justify-center)
  → Sign-in or Sign-up card
  → OAuth providers
  → Terms / privacy links
```

## Important Patterns

### Spacing & Layout
- Sections: `py-16` to `py-24` vertical padding
- Content max width: `max-w-6xl mx-auto`
- Horizontal padding: `px-4 lg:px-6`
- Card gaps: `gap-4` to `gap-6`

### Dark Mode
21st.dev components use CSS variables and support dark mode via the `dark:` Tailwind prefix. Ensure:
- `<html>` has `class="dark"` toggle capability
- Use semantic colors: `text-foreground`, `bg-background`, `text-muted-foreground`

### Font Setup
```tsx
// In layout.tsx - use Geist or Inter
import { Geist } from "next/font/google";
const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] });

// In body:
<body className={`${geistSans.variable} font-sans antialiased`}>
```

## Error Handling

### Component not found on 21st.dev
→ Search with alternative keywords or browse the parent category page

### npx install fails
→ Check error message. Common fixes:
- Missing peer dependencies → install them manually
- components.json not configured → run `npx shadcn@latest init`
- Wrong URL format → verify: `https://21st.dev/r/{author}/{component}`

### 21st.dev unreachable
→ Use WebSearch to find component names → construct npx commands directly

### Incompatible tech stack
→ 21st.dev components require React + Tailwind CSS. If project uses Vue, Angular, or non-Tailwind CSS, inform the user that 21st.dev components won't work and suggest alternatives.

## MCP Setup Guide (Optional Enhancement)

If the user wants AI-powered component generation via MCP:

```bash
npx @21st-dev/cli@latest install --api-key <YOUR_API_KEY>
```

Or manual config in `.claude/settings.json` or IDE MCP settings:
```json
{
  "mcpServers": {
    "@21st-dev/magic": {
      "command": "npx",
      "args": ["-y", "@21st-dev/magic@latest"],
      "env": {
        "API_KEY": "your-api-key"
      }
    }
  }
}
```

Get API key from: https://21st.dev/settings/api-keys

## Quick Decision Tree

```
User asks to build something with 21st.dev
  │
  ├── Project exists?
  │   ├── YES → Check shadcn/ui initialized
  │   └── NO → Scaffold Next.js + Tailwind + shadcn
  │
  ├── Analyze requirements → Map to component categories
  │
  ├── Search 21st.dev LIVE for each category
  │   ├── MCP available? → Use MCP tools
  │   └── No MCP → WebSearch/WebFetch at 21st.dev/s/{category}
  │
  ├── Present 2-3 options per section to user
  │   └── User selects (or says "you decide")
  │
  ├── Install via npx shadcn@latest add "https://21st.dev/r/{author}/{name}"
  │   └── If fails → manual install or alternative
  │
  ├── Compose page → Import, layout, customize
  │
  └── Verify → Dev server, no errors, responsive, dark mode
```
