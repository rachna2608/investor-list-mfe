investor-list-mfe
This is a microfrontend (MFE) built with Vite + React. It displays a table of investors and exposes a federated module consumed by the main container app.

Federation Config
Exposed Module	             Path
InvestorTable	              ./src/components/InvestorTable.tsx

How to Run
npm install
npm run build
npm run preview -- --port 3001


This MFE is consumed by the main container at: http://localhost:4173