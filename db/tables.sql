-- SQLite Table Definitions for ShopSphere Entities
-- Generated based on entity markdown specs

-- User Table
CREATE TABLE User (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    passwordHash TEXT NOT NULL,
    role TEXT NOT NULL, -- Customer, Seller, Admin
    createdAt TEXT NOT NULL,
    updatedAt TEXT NOT NULL,
    isActive INTEGER NOT NULL CHECK (isActive IN (0,1))
);

-- UserProfile Table
CREATE TABLE UserProfile (
    id TEXT PRIMARY KEY,
    userId TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    address TEXT,
    phone TEXT,
    avatarUrl TEXT,
    dateOfBirth TEXT,
    FOREIGN KEY (userId) REFERENCES User(id)
);

-- ProductCategory Table
CREATE TABLE ProductCategory (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    description TEXT
);

-- ProductSubcategory Table
CREATE TABLE ProductSubcategory (
    id TEXT PRIMARY KEY,
    categoryId TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    UNIQUE (categoryId, name),
    FOREIGN KEY (categoryId) REFERENCES ProductCategory(id)
);

-- Product Table
CREATE TABLE Product (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL,
    categoryId TEXT NOT NULL,
    subcategoryId TEXT NOT NULL,
    sellerId TEXT NOT NULL,
    createdAt TEXT NOT NULL,
    updatedAt TEXT NOT NULL,
    isActive INTEGER NOT NULL CHECK (isActive IN (0,1)),
    FOREIGN KEY (categoryId) REFERENCES ProductCategory(id),
    FOREIGN KEY (subcategoryId) REFERENCES ProductSubcategory(id),
    FOREIGN KEY (sellerId) REFERENCES User(id)
);

-- ProductVariant Table
CREATE TABLE ProductVariant (
    id TEXT PRIMARY KEY,
    productId TEXT NOT NULL,
    sku TEXT NOT NULL UNIQUE,
    attributes TEXT,
    price REAL,
    stock INTEGER NOT NULL,
    FOREIGN KEY (productId) REFERENCES Product(id)
);

-- ShoppingCart Table
CREATE TABLE ShoppingCart (
    id TEXT PRIMARY KEY,
    userId TEXT UNIQUE,
    sessionId TEXT,
    createdAt TEXT NOT NULL,
    updatedAt TEXT NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(id)
);

-- CartItem Table
CREATE TABLE CartItem (
    id TEXT PRIMARY KEY,
    cartId TEXT NOT NULL,
    variantId TEXT NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    price REAL NOT NULL,
    FOREIGN KEY (cartId) REFERENCES ShoppingCart(id),
    FOREIGN KEY (variantId) REFERENCES ProductVariant(id)
);

-- Order Table
CREATE TABLE "Order" (
    id TEXT PRIMARY KEY,
    userId TEXT NOT NULL,
    status TEXT NOT NULL,
    totalAmount REAL NOT NULL,
    paymentId TEXT,
    shippingId TEXT,
    createdAt TEXT NOT NULL,
    updatedAt TEXT NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(id)
);

-- OrderItem Table
CREATE TABLE OrderItem (
    id TEXT PRIMARY KEY,
    orderId TEXT NOT NULL,
    variantId TEXT NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    price REAL NOT NULL,
    FOREIGN KEY (orderId) REFERENCES "Order"(id),
    FOREIGN KEY (variantId) REFERENCES ProductVariant(id)
);

-- Payment Table
CREATE TABLE Payment (
    id TEXT PRIMARY KEY,
    orderId TEXT NOT NULL UNIQUE,
    userId TEXT NOT NULL,
    amount REAL NOT NULL,
    method TEXT NOT NULL,
    status TEXT NOT NULL,
    transactionId TEXT,
    createdAt TEXT NOT NULL,
    FOREIGN KEY (orderId) REFERENCES "Order"(id),
    FOREIGN KEY (userId) REFERENCES User(id)
);

-- ShippingAddress Table
CREATE TABLE ShippingAddress (
    id TEXT PRIMARY KEY,
    userId TEXT NOT NULL,
    orderId TEXT,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    postalCode TEXT NOT NULL,
    country TEXT NOT NULL,
    phone TEXT,
    FOREIGN KEY (userId) REFERENCES User(id),
    FOREIGN KEY (orderId) REFERENCES "Order"(id)
);

-- Review Table
CREATE TABLE Review (
    id TEXT PRIMARY KEY,
    userId TEXT NOT NULL,
    productId TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    createdAt TEXT NOT NULL,
    isApproved INTEGER NOT NULL CHECK (isApproved IN (0,1)),
    FOREIGN KEY (userId) REFERENCES User(id),
    FOREIGN KEY (productId) REFERENCES Product(id)
);

-- Refund Table
CREATE TABLE Refund (
    id TEXT PRIMARY KEY,
    orderId TEXT NOT NULL,
    paymentId TEXT NOT NULL,
    amount REAL NOT NULL,
    reason TEXT,
    status TEXT NOT NULL,
    createdAt TEXT NOT NULL,
    FOREIGN KEY (orderId) REFERENCES "Order"(id),
    FOREIGN KEY (paymentId) REFERENCES Payment(id)
);

-- Promotion Table
CREATE TABLE Promotion (
    id TEXT PRIMARY KEY,
    code TEXT,
    description TEXT,
    type TEXT NOT NULL,
    value REAL NOT NULL,
    startDate TEXT NOT NULL,
    endDate TEXT NOT NULL,
    isActive INTEGER NOT NULL CHECK (isActive IN (0,1)),
    usageLimit INTEGER,
    minOrderValue REAL
);

-- PromotionBanner Table
CREATE TABLE PromotionBanner (
    id TEXT PRIMARY KEY,
    imageUrl TEXT NOT NULL,
    linkUrl TEXT,
    altText TEXT,
    startDate TEXT NOT NULL,
    endDate TEXT NOT NULL,
    isActive INTEGER NOT NULL CHECK (isActive IN (0,1))
);
