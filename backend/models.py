from extensions import db

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    ProductCode = db.Column(db.String(80), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float, nullable=False)
    location = db.Column(db.String(120), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'ProductCode': self.ProductCode,
            'quantity': self.quantity,
            'price': self.price,
            'location': self.location,
        }
