# WhatsApp Redirect - Template para Envios Masivos

Redirector simple y rápido a WhatsApp optimizado para Vercel.

## 🚀 Uso

### Opción 1: HTML Simple (GitHub Pages)
Solo sube el archivo `index.html` a GitHub Pages y funciona sin dependencias.

```
https://tudominio.com
```

Redirige automáticamente a: `https://wa.link/270hkk`

### Opción 2: Next.js + Vercel (Recomendado para envios masivos)

#### Instalación Local
```bash
npm install
npm run dev
```

#### Deploy en Vercel
1. Sube el repositorio a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Conecta tu repositorio
4. Click en Deploy

#### URLs Personalizadas
Puedes pasar parámetros en la URL (preparado para futuras mejoras):

```
https://tudominio.com?phone=34123456789&message=Hola
```

## 📝 Para Envios Masivos

Reemplaza `https://wa.link/270hkk` en:
- `app/page.js` (para Next.js)
- `index.html` (para HTML simple)

Con tu link de WhatsApp personalizado.

## 📦 Estructura

```
.
├── index.html          # Versión HTML simple
├── package.json        # Dependencias Node.js
├── next.config.js      # Configuración Next.js
├── app/
│   └── page.js        # Página principal (Next.js)
└── .gitignore         # Archivos a ignorar en Git
```

## 🔗 Notas

- Usa `index.html` para máxima simplicidad
- Usa `Next.js` si necesitas lógica más compleja o análitica
- Ambas versiones funcionan en Vercel

---

¡Listo para desplegarse! 🎉
