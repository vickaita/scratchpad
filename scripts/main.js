require([
    
    'scripts/lib/Three.js'

], function (

) {
// -----------------------------------------------------------------------------

    var camera, scene, renderer,
    geometry, material, mesh, meshes;

    init();
    animate();

    function init() {
        var i;

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1000;
        scene.add( camera );

        meshes = [];
        for (i = 0; i < 10; i++) {
            geometry = new THREE.CubeGeometry( 100, 200, 300 );
            //material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: false } );
            material = new THREE.MeshLambertMaterial( { color: 0xff0000, wireframe: false } );
            mesh = new THREE.Mesh( geometry, material );
            mesh.position.x = 100 * -1 * i;
            mesh.position.y = 100 * -1 * i;
            meshes[i] = mesh;
            scene.add( mesh );
        }

        
        var light = new THREE.PointLight( 0xFFFFFF );
        scene.add(light);
        
        light.position.x = 500;
        light.position.y = 500;
        light.position.z = 500;

        //renderer = new THREE.CanvasRenderer();
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        document.body.appendChild( renderer.domElement );

    }

    function animate() {

        // Include examples/js/RequestAnimationFrame.js for cross-browser compatibility.
        webkitRequestAnimationFrame( animate );
        render();

    }

    function render() {
        var i;

        for (i = 0; i < meshes.length; i++) {
            meshes[i].rotation.x += 0.01 * (i+1);
            meshes[i].rotation.y += 0.02 * (i+1);
            
            meshes[i].position.x += 0.2 * (i+1);
            meshes[i].position.y += 0.2 * (i+1);
        }
        
        renderer.render( scene, camera );
    }

// -----------------------------------------------------------------------------
});