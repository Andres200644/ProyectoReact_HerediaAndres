import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import '../styles/styles.css';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const getItem = async () => {
            const docRef = doc(db, 'items', itemId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setItem({ id: docSnap.id, ...docSnap.data() });
            }
        };

        getItem();
    }, [itemId]);

    return (
        <div className="container">
            {item && <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;
