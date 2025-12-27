# Copilot Instructions - Zadania Matematyka

## Project Overview

**Zadania Matematyka** is a React-based educational platform offering curated math problems organized by Polish school levels:
- **Podstawówka** (Primary school)
- **Średnia** (Secondary school)  
- **Matura** (High school exams - Polish national exam)
- **Studia** (University)

The site uses **MathJax** for rendering mathematical notation and **Canvas API** for interactive diagrams.

## Architecture

### Core Structure

**Routing & Pages** (`src/pages/`)
- Main route tree defined in `src/index.js` with `BrowserRouter` + `Routes`
- Each school level has a page component (e.g., `srednia.jsx`, `podstawowka.jsx`)
- Page components use `TopNavi`, `LeftNavi`, and `RightSide` layout pattern
- Model parameter passed down: `"a"` (basic), `"b"` (secondary), `"c"` (matura), `"d"` (university)

**Data Layer** (`src/data/`)
- Large datasets in `data.js`, `srednia.js`, `srednia2.js`, etc. (~12,500+ lines of problem objects)
- Each problem is a standardized object with fields: `tags`, `dzial` (section), `numer` (number), `tresc` (content), `podpunkty` (subtasks), `plot`, `canvas`, `answer`
- Data indexed by `dzial` (section ID) + `poddzial` (subsection) + optional `typ` (type: "powtorka", "kielbasa")

**Task Rendering** (`src/components/worksList/`)
- `WorksList.jsx`: Routes data based on `dzial`/`typ` parameters → selects appropriate viewer
- `WievTask.jsx`: Main task display (25 tasks per page, pagination)
- `WievTaskPowt.jsx`, `WievTaskKsiazki.jsx`, `WievTaskSP.jsx`: Specialized viewers for different problem types
- `WievArkusz.jsx`: Worksheet format

**UI Components**
- `LeftNavi.jsx`: Sidebar navigation (switches content based on `model`)
- `RightSide.jsx`: Quick-access menu links
- `TopNavi.jsx`: Header with model selector
- All styled with SCSS modules + `styled-components`

### Data Flow

1. User selects school level → Page component loads with `model` prop
2. `LeftNavi` / `RightSide` display navigation for that level
3. Click on topic → URL changes, `WorksList` receives `dzial`/`model` props
4. `WorksList` filters data using `.filter()` loops on `dzial` + `poddzial` match
5. Filtered data passed to viewer component (e.g., `WievTask`)
6. Viewer renders problems with MathJax + Canvas visuals

## Key Patterns & Conventions

### Problem Data Structure

```javascript
{
  tags: nanoid(),           // Unique ID
  dzial: "1",              // Section ID (string)
  poddzial: "liniowa",     // Subsection key (string)
  numer: "1.1",            // Problem number
  tresc: "\\( equation \\)", // LaTeX in MathJax format
  podpunkty: [],           // Sub-questions array
  plot: [],                // Plotly graph configs (optional)
  canvas: ["r1"],          // Canvas ID references
  answer: [],              // Solution data
  typ: ["powtorka"]        // Problem type (optional)
}
```

### Navigation Model Parameter

- Pages pass `model="a"|"b"|"c"|"d"` to control component rendering
- Used in `switch` statements in `LeftNavi`, `RightSide`, `TopNavi`
- **Does NOT use Redux** - it's prop-drilled through layout components

### Data Selection Pattern

Data filtering uses simple imperative loops (not `.filter()`):
```javascript
for (let i = 0; i < d; i++) {
  if (data[i].dzial === dzial && data[i].poddzial === model) {
    zadania.push(data[i])
  }
}
```

### Canvas Diagrams

- `funkcjeCanvas.js`: Switch case with 100+ Canvas drawing functions
- Diagrams referenced by ID in problem's `canvas` array (e.g., `"r1"`)
- Called by `Canvas` component with `id`, `width`, `height` props

### Math Rendering

- MathJax integration: `better-react-mathjax` package + `MathJaxContext` wrapper
- LaTeX in problem text: `\\(expression\\)` for inline, `\\[expression\\]` for display
- Example: `"A train costs \\(£182\\). George gets \\(30\\%\\) discount."`

## Build & Deployment

**Commands** (in `package.json`):
- `npm start` → Dev server on `http://localhost:3000`
- `npm run build` → Production build (CRA default)
- `npm run lint:js` → ESLint check on `src/**/*.{js,jsx}`

**Deployment**: Netlify (see `README.md` project page link)

## Important Gotchas

1. **No global state**: No Redux store actively used (Redux installed but minimal usage of `nanoid`)
2. **Imperative data filtering**: Don't refactor to `.filter()` without testing - current loops accumulate into `zadania` array
3. **Direct DOM manipulation**: `WievTask.jsx` queries DOM with `document.querySelector` for pagination styling
4. **Hardcoded routes**: URLs hardcoded in navigation components - update both `LeftNavi` + `RightSide` + routing table if adding sections
5. **LaTeX escaping**: Must use `\\(` not `$` in problem text; check MathJax renders correctly
6. **Canvas scaling**: Canvas width/height passed as props - affects diagram size, not responsive by default

## Adding New Problem Content

1. Add problem objects to appropriate data file (`src/data/[level]/[topic].js`)
2. Ensure `dzial` matches page's section ID and `poddzial` key exists
3. Format LaTeX as `\\(...)\\)` 
4. If diagram needed, add Canvas case in `funkcjeCanvas.js`, reference ID in `canvas` array
5. Update navigation links in `LeftNavi` + `RightSide` if adding new top-level section
6. Test with `npm start`

## File Reference

- **Entry point**: `src/index.js` (routing table)
- **Layout template**: `src/pages/[level]/[level].jsx`
- **Task viewer logic**: `src/components/worksList/wievTask.jsx`
- **Problem datasets**: `src/data/` (subdirectory per level/type)
- **Styling**: Module files (`.module.scss`) + `styled-components` in `.styled.js` files
