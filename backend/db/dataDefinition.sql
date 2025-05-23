DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Salon;
DROP TABLE IF EXISTS Event;
DROP TABLE IF EXISTS Payment;
DROP TABLE IF EXISTS EventCustomization;
DROP TABLE IF EXISTS Employee;
DROP TABLE IF EXISTS EmployeeEvent;
DROP TABLE IF EXISTS Inventary;
DROP TABLE IF EXISTS InventoryEvent;
DROP TABLE IF EXISTS Review;
DROP TABLE IF EXISTS Notification;

CREATE TABLE IF NOT EXISTS User (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    type ENUM('admin', 'user') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Salon (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    location VARCHAR(255) NOT NULL,
    capacity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS Event(
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    salon_id INT NOT NULL,
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    event_type ENUM('wedding', 'birthday', 'corporate', 'other') NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (salon_id) REFERENCES Salon(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Payment(
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    event_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    payment_method ENUM('credit_card', 'debit_card', 'cash', 'paypal', 'other') NOT NULL,
    status ENUM('pending', 'completed', 'failed') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (event_id) REFERENCES Event(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS EventCustomization(
  id INT PRIMARY KEY AUTO_INCREMENT,
  event_id INT NOT NULL,
  type ENUM('music', 'decoration', 'meal', 'other') NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (event_id) REFERENCES Event(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Employee(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(20),
    position VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS EmployeeEvent(
    id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT NOT NULL,
    event_id INT NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES Employee(id) ON DELETE CASCADE,
    FOREIGN KEY (event_id) REFERENCES Event(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Inventary(
    id INT PRIMARY KEY AUTO_INCREMENT,
    item_name ENUM('table', 'chair', 'flowers', 'dish','glasses','tablecloth', 'other') NOT NULL,
    quantity INT NOT NULL
);

CREATE TABLE IF NOT EXISTS InventoryEvent(
    id INT PRIMARY KEY AUTO_INCREMENT,
    inventory_id INT NOT NULL,
    event_id INT NOT NULL,
    quantity_used INT NOT NULL,
    FOREIGN KEY (inventory_id) REFERENCES Inventary(id) ON DELETE CASCADE,
    FOREIGN KEY (event_id) REFERENCES Event(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Review(
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    event_id INT NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (event_id) REFERENCES Event(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Notification(
    id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES Employee(id) ON DELETE CASCADE
);