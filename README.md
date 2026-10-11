# Electiva 2 - Primer Parcial

Repositorio para la práctica del Primer Parcial de **Electiva 2**.

Implementación de una página web estática con integración continua (CI/CD) utilizando **GitHub Actions** y despliegue automatizado en **Surge.sh**.

## 🚀 Enlace del Despliegue
- **Surge.sh:** [https://nikkoban-primer-parcial.surge.sh](https://nikkoban-primer-parcial.surge.sh)
- **Repositorio GitHub:** [https://github.com/NikkoBan/primer-parcial](https://github.com/NikkoBan/primer-parcial)

---

## 🛠️ Tecnologías Utilizadas
- **HTML5 & CSS3:** Estructura y diseño responsivo moderno con tema oscuro y glassmorphism.
- **JavaScript:** Interactividad y métricas en tiempo real.
- **Surge.sh:** Servicio de hosting y publicación de sitios estáticos.
- **GitHub Actions:** Pipeline de CI/CD para despliegue automatizado en cada `git push`.

---

## ⚙️ Configuración del Pipeline de CI/CD

El flujo de trabajo se encuentra en `.github/workflows/main.yml`.

### Secretos Requeridos en GitHub (Settings -> Secrets and variables -> Actions)
Para que el workflow de GitHub Actions pueda publicar en Surge.sh sin exponer credenciales:

| Secreto | Descripción |
|---|---|
| `SURGE_TOKEN` | Token de autenticación obtenido mediante `npx surge token` |
| `SURGE_LOGIN` | Correo electrónico de la cuenta de Surge |
| `SURGE_DOMAIN` *(Opcional)* | Dominio personalizado en Surge (por defecto: `nikkoban-primer-parcial.surge.sh`) |

---

## 📦 Flujo de Trabajo
1. Se realiza un cambio en el código fuente (`index.html`, `style.css`, etc.).
2. Se realiza commit y push a la rama `main`:
   ```bash
   git add .
   git commit -m "feat: actualización de la página"
   git push origin main
   ```
3. GitHub Actions activa automáticamente el workflow y despliega la última versión a Surge.sh.
