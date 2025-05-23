CREATE TABLE IF NOT EXISTS User (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Salon (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description TEXT,

);

CREATE TABLE IF NOT EXISTS Dish (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
);

CREATE TABLE IF NOT EXISTS Decoration (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
);
CREATE TABLE IF NOT EXISTS Music (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
);

CREATE TABLE IF NOT EXISTS Event_Details(
    id INT PRIMARY KEY AUTO_INCREMENT,
    cantidad_mesas INT NOT NULL,
    id_salon INT,
    id_dish INT,
    id_decoration INT,
    id_music INT,
    FOREIGN KEY (id_salon) REFERENCES Salon(id),
    FOREIGN KEY (id_dish) REFERENCES Dish(id),
    FOREIGN KEY (id_decoration) REFERENCES Decoration(id),
    FOREIGN KEY (id_music) REFERENCES Music(id)
);

CREATE TABLE IF NOT EXISTS Event (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_user INT,
    fecha_evento DATE NOT NULL,
    hora_evento TIME NOT NULL,
    
    costo_total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_user) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS Payment (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_event INT,
    metodo_pago VARCHAR(50) NOT NULL,
    fecha_pago TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_event) REFERENCES Event(id)
);

