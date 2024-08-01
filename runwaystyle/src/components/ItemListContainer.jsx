// ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import '../styles/styles.css';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const q = categoryId 
        ? query(collection(db, 'items'), where('category', '==', categoryId))
        : collection(db, 'items');

      const querySnapshot = await getDocs(q);
      setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    getItems();
  }, [categoryId]);

  return (
    <div className="container">
      <h1>{categoryId ? categoryId : 'Todos los productos'}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
