import React, { useState } from 'react';
import Form from '../components/Form_xx';
import Items from '../components/Items_xx';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';


function GroceryPage_61() {
  return (
    <section className="section-center">
      <Form />
      <Items />
    </section>
  );
}

export default GroceryPage_61;
