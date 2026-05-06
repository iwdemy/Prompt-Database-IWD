import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use((req, res, next) => {
    // console.log(`[REQ] ${req.method} ${req.url}`);
    next();
  });

  app.use(express.json({ limit: '10mb' }));

  // Endpoint to download the file directly
  app.get("/api/download-html", (req, res) => {
    const filePath = path.join(process.cwd(), "public", "PromptsDatabase.html");
    if (!fs.existsSync(filePath)) {
      return res.status(404).send("File not found. Please wait a moment while it compiles, or trigger a rebuild.");
    }
    
    // Set headers to force download
    res.setHeader('Content-disposition', 'attachment; filename=PromptsDatabase.html');
    res.setHeader('Content-type', 'text/html');
    
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });

  // Serve raw text so the user can copy-paste it
  app.get("/api/raw-html", (req, res) => {
    const filePath = path.join(process.cwd(), "public", "PromptsDatabase.html");
    if (!fs.existsSync(filePath)) {
      return res.status(404).send("File not found. Please wait a moment while it compiles, or trigger a rebuild.");
    }
    
    res.setHeader('Content-type', 'text/plain');
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.use((err: any, req: any, res: any, next: any) => {
    console.error("Express Global Error:", err);
    res.status(500).json({ error: "Global Express Error", details: err.message, stack: err.stack });
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
