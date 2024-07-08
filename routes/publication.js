// importaciones 
import { Router } from "express";
const router = Router();
import { ensureAuth } from "../middlewares/auth.js";
import { deletePublication, publicationsUser, savePublication, showPublication, testPublication, uploadMedia } from "../controllers/publication.js";
import multer from "multer";

// Configuración de subida de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/publications/");
  },
  filename: (req, file, cb) => {
    cb(null, "pub-" + Date.now() + "-" + file.originalname);
  }
});

// Middleware para subida de archivos
const uploads = multer({ storage });

//Define las rutas
router.get('/test-publication', testPublication);
router.post('/publication', ensureAuth, savePublication);
router.get('/show-publication/:id', ensureAuth, showPublication);
router.delete('/delete-publication/:id', ensureAuth, deletePublication);
router.get('/publications-user/:id/:page?', ensureAuth, publicationsUser);
router.post('/upload-media/:id', [ensureAuth, uploads.single("file0")], uploadMedia);

// Exporta el router
export default router;
