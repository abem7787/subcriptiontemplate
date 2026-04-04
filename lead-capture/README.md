# Lead Capture App

A beautiful Next.js application for capturing leads with an embedded Google Form, designed for the AI Sales Assistant system.

## Features

- 🎨 **Premium Design**: Gradient backgrounds with glassmorphism effects
- 📱 **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- ⚡ **Fast & Modern**: Built with Next.js 16 and React 19
- 🎯 **Embedded Google Form**: Seamlessly integrated lead capture
- 🌙 **Dark Mode Ready**: Automatic dark mode support

## Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Project Structure

```
lead-capture-app/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles with Tailwind
├── package.json         # Dependencies
└── tsconfig.json        # TypeScript configuration
```

## Technologies Used

- **Next.js 16**: React framework for production
- **React 19**: Latest React with improved performance
- **Tailwind CSS 4**: Utility-first CSS framework
- **TypeScript**: Type-safe development
- **Google Forms**: Embedded form for lead capture

## Integration

This app integrates with the n8n automation workflows:
- Leads are captured via Google Forms
- Data flows to Google Sheets
- n8n workflow validates and processes leads
- Vapi AI initiates discovery calls
- Gemini AI qualifies leads

## Customization

### Update Form URL

Edit `app/page.tsx` and replace the iframe `src` with your Google Form URL:

```tsx
<iframe 
  src="YOUR_GOOGLE_FORM_URL?embedded=true"
  // ...
/>
```

### Modify Design

- Colors: Edit Tailwind classes in `app/page.tsx`
- Fonts: Update `app/layout.tsx` with custom fonts
- Styles: Modify `app/globals.css` for global changes

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## License

MIT
