import React, { useState, useEffect } from "react";

import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useDropzone } from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};






const Other = props => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(prev => !prev);
  };
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      if (acceptedFiles.length === 0) {
        return;
      } else if (acceptedFiles.length > 5) { // here i am checking on the number of files
        return console.log('maxImages'); // here i am using react toaster to get some notifications. don't need to use it 
      } else {
        setFiles([...files, ...acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        }))]
        );
      }


    }
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt={file.name}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);




  return (
    <div>
      <Button
        onClick={toggle}
      >
        Other Information
      </Button>
      <Collapse in={open}>
        <Card>
          <CardContent>
            <section className="container">
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
              <aside style={thumbsContainer}>
                {thumbs}
              </aside>
            </section>
          </CardContent>
        </Card>
      </Collapse>
    </div>
  );
};

export default Other;
