import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import ImagePreview from "./ImagePreview";
import { useFormikContext } from "formik";

function ImageUpload() {
  const [files, setFiles] = useState([]);
  const { values, setFieldValue } = useFormikContext();
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      setFiles([
        ...files,
        ...acceptedFiles.map(file => ({
          ...file,
          preview: URL.createObjectURL(file),
          key: `${file.name}${Math.random()}`
        }))
      ]);
      setFieldValue("imageUrls", values.imageUrls.concat(acceptedFiles));
    }
  });

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <div>
      <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <ImagePreview files={files} />
      </section>
    </div>
  );
}

export default ImageUpload;
