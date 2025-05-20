from flask import Flask, jsonify, request
from flask_cors import CORS
from extensions import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///inventory.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
CORS(app, supports_credentials=True)

from models import Product  # import after db initialized

@app.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([p.to_dict() for p in products])

@app.route('/products', methods=['POST'])
def add_product():
    data = request.get_json()
    product = Product(**data)
    db.session.add(product)
    db.session.commit()
    return jsonify(product.to_dict()), 201

@app.route('/products/<int:id>', methods=['DELETE'])
def delete_product(id):
    product = Product.query.get_or_404(id)
    db.session.delete(product)
    db.session.commit()
    return '', 204

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
