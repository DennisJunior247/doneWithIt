import React from 'react';
import {useFormikContext} from 'formik';

import ErrorMessage from './ErrorMessage';
import ImageInputList from '../imageInputList';

function FormImagePicker({name}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name,[uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri),
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
