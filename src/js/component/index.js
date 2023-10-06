require('module/polyfill/es6');
var ApplicationCoreFactory = require('module/factory/core/application');

var applicationCore = ApplicationCoreFactory();

applicationCore.start();

// TODO register to rendering strategy through events instead of manually
// TODO: Should be done from the UI and by events

var GalaxyModel = require('module/model/galaxy');
var CelestialModel = require('module/model/celestial');
var PlanetModel = require('module/model/planet');
var SunModel = require('module/model/sun');
var SpaceCoordinates = require('module/coordinates/space');
var DirectionCoordinates = require('module/coordinates/direction');
var StaticMovementStrategy = require('module/movement/strategy/static');
var LineMovementStrategy = require('module/movement/strategy/line');
var OrbitMovementStrategy = require('module/movement/strategy/orbit');
var FollowMovementStrategy = require('module/movement/strategy/follow');
var galaxy, sun, planet, moon, comet, asteroid;
var planets = [];
var i;
var iMax = Math.ceil(2 + Math.random() * 8);

// Galaxy
galaxy = new GalaxyModel();

applicationCore.universeModel.addGalaxy(galaxy);

// Sun
sun = new SunModel('sun', 100, 100);
sun.setMovement(
    new StaticMovementStrategy(
        new SpaceCoordinates(screen.availWidth / 2, screen.availHeight / 2)
    )
);
galaxy.addCelestial(sun);
applicationCore.renderingStrategy.register(sun);

for(i=0; i<iMax; i++) {

    // Comet
    comet = new CelestialModel('comet');
    comet.setMovement(
        new LineMovementStrategy(
            // origin
            new SpaceCoordinates(screen.availWidth / 2, screen.availHeight / 2),
            // direction
            new DirectionCoordinates(
                -1 + Math.random() * 2,
                -1 + Math.random() * 2
            ),
            // speed
            5 + Math.floor(Math.random() * 10)
        )
    );
    galaxy.addCelestial(comet);
    applicationCore.renderingStrategy.register(comet);

    // Planet
    planet = new PlanetModel('planet');
    planet.setMovement(
        new OrbitMovementStrategy(
            // origin
            sun,
            // distance
            150 + Math.floor(Math.random() * 500),
            // speed
            10 + Math.floor(Math.random() * 10)
        )
    );
    galaxy.addCelestial(planet);
    applicationCore.renderingStrategy.register(planet);
    planets.push(planet);

    // Moon
    moon = new CelestialModel('moon');
    moon.setMovement(
        new OrbitMovementStrategy(
            // origin
            planets[Math.floor(Math.random() * planets.length) % planets.length],
            // distance
            50 + Math.floor(Math.random() * 50),
            // speed
            5 + Math.floor(Math.random() * 10)
        )
    );
    galaxy.addCelestial(moon);
    applicationCore.renderingStrategy.register(moon);

    // Asteroid
    asteroid = new CelestialModel('asteroid');
    asteroid.setMovement(
        new FollowMovementStrategy(
            // origin
            new SpaceCoordinates(Math.random() * 1000, Math.random() * 1000),
            // celestial
            planets[Math.floor(Math.random() * planets.length)%planets.length],
            // speed
            10 + Math.floor(Math.random() * 20)
        )
    );
    galaxy.addCelestial(asteroid);
    applicationCore.renderingStrategy.register(asteroid);
}