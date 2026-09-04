$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms

    // createPlatform(x, y, long, tall, color);

    createPlatform(55, 150, 150, 55, "lime");
    createPlatform(55, 97, 73, 1, "cyan");
    createPlatform(170, 50, 10, 100, "blue");
    createPlatform(160, 150, 56, 50, "lime");
    createBadPlatform(0, 730, 1400, 20, "#b0ece1");
    createFakePlatform(50,349,40,10,"pink");
    createPlatform(5,260,9,500,"cyan");
    createFakePlatform(110,260,1,350,"cyan");
    createFakePlatform(50,450,40,10,"pink");
    createPlatform(230,700,70,10,"yellow",200,500,100);
    createBadPlatform(50,710,60,10,"blue");
    createBadPlatform(30,539,85,10);
    createPlatform(200,200,10,400,"#00b3ff");
    createPlatform(110,710,70,10,"blue");
    createPlatform(630,700,70,10,"red",600,700,200);
    createPlatform(810,700,150,10,"darkgreen",900,1100,1,400,700);
    createPlatform(1100,300,100,10,"red");
    createPlatform(1000,480,80,10,"blue");
    createPlatform(950,350,100,10,"pink");
    createPlatform(1250,500,70,10,"crimson",1200,1250,1,100,500)

    
    // invisible platform color
    // "#b0ece1"


    
    // TODO 3 - Create Collectables
    createCollectable("excel",115.5,50);
    createCollectable("word",50,620);
    createCollectable("onenotey", 1350, 50);

    // TODO 4 - Create Cannons

    createCannon("top", 200, 4000);
    createCannon("left", 196, 40000);
    createCannon("left", 350,40000)

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
