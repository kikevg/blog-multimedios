let tags = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'PHP' },
    { name: 'Node.js' },
    { name: 'Laravel' },
    { name: 'MySQL' },
    { name: 'PostgreSQL' },
    { name: 'Linux' },
    { name: 'Windows' },
    { name: 'Java' }
];

let news = [
    {
        id: '64ac476d-1ffc-499d-9c3f-61bff25f830e',
        title: '¿Cómo instalar el OpenJDK en Ubuntu y derivados?',
        autor: 'David Vigil',
        date: '19/02/2021',
        tags: [tags[8], tags[10]],
        read: '2 min',
        likes: 8,
        content: `
        <p>OpenJDK es la versi&oacute;n libre de la plataforma de desarrollo Java bajo concepto de lenguaje orientado a objetos. Es el resultado de esfuerzos constantemente realizados por la empresa denominada Sun Microsystems. Esta implementaci&oacute;n se encuentra catalogada dentro de la licencia GPL de GNU con una excepci&oacute;n de enlaces, por lo que algunos de los componentes de los folders de clases y sitios web de Java se ultiman de los t&eacute;rminos de la licencia para poder ser considerados dentro de la versi&oacute;n estipulada como GNU.</p>

        <h3><strong>Pasos.</strong></h3>
        
        <p>1. Verificar si se tiene instalada alguna version del software con el siguiente comando.</p><pre>~$: java --version</pre>
        
        <p>2. Instalar la version que se requiere</p><pre>~$: sudo apt install openjdk-11-jdk</pre>
        
        <p>3. Verificar si se instal&ograve;&nbsp;</p><pre>~$: java --version &amp;&amp; javac</pre>             
        `,
        img: 'img/OpenJDK.jpg'
    },
    {
        id: '99fe914e-cf0e-40a1-891d-9da65170de5a',
        title: '¿Cómo instalar MySQL en Ubuntu 20.04?',
        autor: 'Enrique Vigil',
        date: '12/02/2021',
        tags: [tags[8], tags[6]],
        read: '3 min',
        likes: 3,
        content: `
        <p>MySQL es un gestor de bases de datos mantenido por Oracle. Es uno de las bases de datos relacionales m&aacute;s populares del mercado.</p>

        <p>Hoy vamos a ver c&oacute;mo podemos instalarlo en Ubuntu.</p>
        
        <p>Sigue estos pasos para poder instalar MySQL.</p>
        
        <h3><strong>Pasos</strong></h3>
        
        <p>Abre una terminal en tu sistema operativo (presiona la combinaci&oacute;n de teclas &quot;Shift + Alt + T&quot;), cuando ya tengas la terminal, ejecuta los siguientes comandos.</p><pre>~$: sudo apt update</pre>
        
        <p>Este comando actualiza todos los repositorios del sistema operativo.</p><pre>~$: sudo apt install mysql-server mysql-client -y</pre>
        
        <p>Este comando instala MySQL en tu sistema operativo. Adem&aacute;s lo agrega a las variables de entorno autom&aacute;ticamente.</p>
        
        <h3><strong>&iquest;C&oacute;mo puedo saber si se instal&oacute;?</strong></h3>
        
        <p>Ejecuta el siguiente comando para verificar su instalaci&oacute;n</p><pre>~$: mysql --version</pre>
        
        <p>Este comando debera imprimier la versi&oacute;n de MySQL que se instal&oacute; en el sistema operativo. Algo como esto.</p>
        
        <p>Grazie mile.</p>
        `,
        img: 'img/mysql.png'
    },
];
