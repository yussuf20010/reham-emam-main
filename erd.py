import matplotlib.pyplot as plt
import networkx as nx

# Define entities and relationships
entities = {
    'User': ['UserID', 'UserName', 'Email', 'Password', 'FirstName', 'LastName', 'Address', 'Phone'],
    'Brand': ['BrandID', 'BrandName', 'Description', 'Country', 'Website', 'LogoURL', 'FoundedYear', 'SocialMediaLinks'],
    'Product': ['ProductID', 'ProductName', 'Description', 'Price', 'StockQuantity', 'SKU', 'ReleaseDate', 'DiscountPercentage', 'Rating', 'ImageURL'],
    'Category': ['CategoryID', 'CategoryName', 'Description', 'ParentCategoryID'],
    'Order': ['OrderID', 'UserID', 'OrderDate', 'TotalAmount', 'PaymentStatus', 'ShippingAddress'],
    'OrderItem': ['OrderItemID', 'OrderID', 'ProductID', 'Quantity', 'Subtotal', 'DiscountAmount'],
    'ShippingMethod': ['ShippingMethodID', 'ShippingMethodName', 'EstimatedDeliveryTime', 'Cost'],
    'Wishlist': ['WishlistID', 'UserID', 'ProductID', 'AddedDate'],
    'PaymentMethod': ['PaymentMethodID', 'UserID', 'CardNumber', 'ExpiryDate', 'CVV', 'PaymentType'],
    'Review': ['ReviewID', 'UserID', 'ProductID', 'Rating', 'Comment', 'ReviewDate']
}

relationships = [
    ('User', 'Order', 'UserID'),
    ('Order', 'OrderItem', 'OrderID'),
    ('Product', 'OrderItem', 'ProductID'),
    ('User', 'Wishlist', 'UserID'),
    ('Product', 'Wishlist', 'ProductID'),
    ('User', 'PaymentMethod', 'UserID'),
    ('User', 'Review', 'UserID'),
    ('Product', 'Review', 'ProductID')
]

# Create a directed graph
G = nx.DiGraph()

# Add nodes for entities
for entity, attributes in entities.items():
    G.add_node(entity, label='\n'.join(attributes), shape='box')

# Add edges for relationships
for source, target, label in relationships:
    G.add_edge(source, target, label=label)

# Draw the graph
pos = nx.spring_layout(G)
labels = nx.get_edge_attributes(G, 'label')
nx.draw(G, pos, with_labels=True, node_size=700, node_color='skyblue', font_size=8, font_color='black')
nx.draw_networkx_edge_labels(G, pos, edge_labels=labels, font_color='red')

plt.title('Fashion Website ERD')
plt.show()
