📊 Mini Creator Dashboard

This project is a small dashboard built using Next.js, TypeScript, and shadcn/ui.
It displays a list of creators and allows sorting, filtering, and viewing summary metrics.

This was built as part of a Tech Intern assignment to demonstrate:

frontend fundamentals

clean separation of logic and UI

and basic unit testing

🚀 Tech Stack

Next.js (App Router)

TypeScript

shadcn/ui (used for all UI components)

Tailwind CSS

Vitest (for unit testing)

No external table, sorting, or filtering libraries were used.

📦 Getting Started
1️⃣ Clone the repository
git clone https://github.com/krishna-131326/Mini-Creator-Dashboard.git
cd Mini-Creator-Dashboard

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev


Open http://localhost:3000
 in your browser.

4️⃣ Run unit tests
npm test

📁 Project Structure
src/
├─ app/
│  └─ page.tsx               # Main dashboard page
├─ components/
│  ├─ CreatorTable.tsx       # Table component
│  └─ SummaryCards.tsx       # Summary metric cards
├─ components/ui/            # shadcn UI components only
├─ data/
│  └─ creators.ts            # Hardcoded creator data
├─ lib/
│  └─ creators.ts            # Sorting, filtering, metrics logic
└─ __tests__/
   └─ creators.test.ts       # Unit tests for core logic

🧠 Key Design Decisions
1️⃣ Separation of Logic and UI

All business logic such as:

sorting

filtering

calculating metrics

is kept inside:

src/lib/creators.ts


UI components only use the results from these functions.
This makes the code:

easier to test

easier to understand

easier to maintain

2️⃣ Sorting

Sorting is implemented manually using Array.sort

Supported fields:

followers

revenue

Both ascending and descending sorting are supported

Tie-breaking rule:
If two creators have the same value, they are sorted by name (ascending).
This ensures consistent and predictable ordering.

3️⃣ Filtering

Two filters are supported:

Search by name (case-insensitive)

Active-only toggle

Both filters work together.
Filtering is applied before sorting so the sorted result always matches the filtered list.

4️⃣ Derived Metrics

The dashboard shows:

Total creators

Active creators

Total revenue

Average revenue per active creator

Edge case handling:

If there are 0 active creators, average revenue is shown as 0 to avoid divide-by-zero errors.

5️⃣ Empty State

If no creators match the selected filters:

A clear empty message is shown

An empty table is not displayed

This improves user experience and avoids confusion.

🧪 Testing Strategy

Unit tests are written using Vitest

Only pure logic inside lib/creators.ts is tested

UI components are intentionally not tested to keep tests stable

Tests cover:

Sorting followers (ascending & descending)

Sorting revenue (ascending & descending)

Stable sorting when values are equal

Combined filtering (search + active)

Average revenue calculation when no active creators exist

📈 Scaling to 10,000 Creators (Future Improvements)

If this app needed to support a much larger dataset, I would:

Memoize calculations
Use useMemo to avoid unnecessary recalculations

Move logic to the backend
Perform sorting and filtering on the server

Add pagination or virtualization
Render only visible rows for better performance

Debounce search input
Reduce filtering frequency while typing

Use indexed database queries
Index fields like name, active status, and followers

✅ Assignment Checklist

 Next.js App Router

 TypeScript

 shadcn/ui only

 Manual sorting and filtering

 Stable sorting

 Derived metrics

 Empty state handling

 Unit tests for core logic

 Clean project structure

 Clear README with explanations

👤 Author

Krishna Choudhary