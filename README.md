<!DOCTYPE html>
<html lang="es">

<body>
    <header>
        <h1>Lienzos Vivos - Documentación del Proyecto</h1>
    </header>
    <main>
        <section>
            <h2>URL Vercel</h2> <a href="https://react-tpfinal-n5hrp62qn-leon-marins-projects.vercel.app/" target:"_black">https://react-tpfinal-n5hrp62qn-leon-marins-projects.vercel.app/</a>
            <h2>Descripción</h2>
            <p>
                <strong>Lienzos Vivos</strong> es una aplicación web diseñada para la venta de cuadros personalizados. Ofrece una experiencia fluida para que los usuarios puedan explorar una galería de productos, ver detalles específicos de cada cuadro y contactarse con el administrador. Además, cuenta con un dashboard exclusivo para los administradores, donde pueden gestionar productos y controlar la base de datos conectada con Firebase.
            </p>
        </section>
        <section>
            <h2>Funcionalidades del Proyecto</h2>
            <h3>Página de Inicio:</h3>
            <ul>
                <li>Muestra una galería de productos.</li>
                <li>Cada producto incluye su imagen, nombre y precio.</li>
                <li>Los productos son obtenidos dinámicamente desde Firebase Firestore.</li>
            </ul>
            <h3>Página de Detalle del Producto:</h3>
            <ul>
                <li>Muestra información detallada del producto seleccionado.</li>
                <li>Datos disponibles:
                    <ul>
                        <li>Imagen.</li>
                        <li>Nombre.</li>
                        <li>Precio.</li>
                        <li>Descripción.</li>
                        <li>Tamaño.</li>
                        <li>Material del marco.</li>
                        <li>Artista.</li>
                        <li>Edición o exclusividad.</li>
                    </ul>
                </li>
                <li>Los datos se obtienen mediante el <code>id</code> del producto desde Firebase Firestore.</li>
            </ul>
            <h3>Página de Contacto:</h3>
            <ul>
                <li>Permite a los usuarios enviar consultas a los administradores.</li>
            </ul>
            <h3>Dashboard Administrativo:</h3>
            <ul>
                <li>Exclusivo para usuarios autenticados.</li>
                <li>Funcionalidades:
                    <ul>
                        <li>Agregar productos a la base de datos.</li>
                        <li>Editar productos existentes.</li>
                        <li>Eliminar productos.</li>
                    </ul>
                </li>
            </ul>
            <h3>Autenticación:</h3>
            <ul>
                <li>Login y registro de usuarios mediante Firebase Authentication.</li>
                <li>Acceso restringido al dashboard solo para usuarios autenticados.</li>
            </ul>
        </section>
        <section>
            <h2>Tecnologías Usadas</h2>
            <h3>Frontend:</h3>
            <ul>
                <li>React: Librería principal para construir la interfaz de usuario.</li>
                <li>Vite: Herramienta para desarrollar y construir aplicaciones rápidas.</li>
                <li>React Router DOM: Gestión de rutas y navegación en la aplicación.</li>
                <li>React Hook Form: Manejo de formularios.</li>
                <li>Bootstrap & React-Bootstrap: Estilización y diseño responsivo.</li>
            </ul>
            <h3>Backend y Base de Datos:</h3>
            <ul>
                <li>Firebase Authentication: Autenticación de usuarios.</li>
                <li>Firebase Firestore: Base de datos en tiempo real para gestionar productos.</li>
            </ul>
            <h3>Herramientas de Desarrollo:</h3>
            <ul>
                <li>ESLint: Linter para mantener la calidad del código.</li>
                <li>Vite: Para la configuración de entorno y construcción eficiente.</li>
            </ul>
        </section>
        <section>
            <h2>Modo de Instalación</h2>
            <h3>Requisitos Previos</h3>
            <ul>
                <li>Tener Node.js instalado (versión 18 o superior recomendada).</li>
                <li>Tener un proyecto de Firebase configurado con:
                    <ul>
                        <li>Firebase Authentication habilitado.</li>
                        <li>Firestore configurado con una colección llamada <code>productos</code>.</li>
                    </ul>
                </li>
            </ul>
            <h3>Pasos de Instalación</h3>
            <ol>
                <li>
                    <strong>Clona el Repositorio</strong>
                    <pre><code>git clone https://github.com/Lealmf23/reactTPfinal.git
cd reactTPfinal
</code></pre>
                </li>
                <li>
                    <strong>Instala las Dependencias</strong>
                    <pre><code>npm install</code></pre>
                </li>
                <li>
                    <strong>Configura Firebase</strong>
                    <p>Crea un archivo <code>.env</code> en la raíz del proyecto y agrega las credenciales de tu proyecto Firebase:</p>
                    <pre><code>VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
</code></pre>
                </li>
                <li>
                    <strong>Ejecuta en Modo Desarrollo</strong>
                    <pre><code>npm run dev</code></pre>
                    <p>Abre tu navegador en <a href="http://localhost:5173" target="_blank">http://localhost:5173</a> para ver la aplicación.</p>
                </li>
                <li>
                    <strong>Genera una Build para Producción</strong>
                    <pre><code>npm run build</code></pre>
                </li>
                <li>
                    <strong>Visualiza la Build</strong>
                    <pre><code>npm run preview</code></pre>
                </li>
            </ol>
        </section>
    </main>
</body>
</html>
