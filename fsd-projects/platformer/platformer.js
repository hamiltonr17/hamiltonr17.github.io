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
    createPlatform();
    createBadPlatform(0, 700, 1400, 0.1);
    createPlatform(50,349,40,10,"pink")
    createPlatform(5,260,4,500,"cyan")
    createPlatform(110,260,1,350,"cyan")
    createPlatform(50,450,40,10,"pink")
    createPlatform()
    // TODO 3 - Create Collectables
    createCollectable("excel",115.5,50)
    createCollectable("word",500,500)

    // TODO 4 - Create Cannons

    createCannon("top", 200, 300);
    createCannon("left", 196, 4000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
